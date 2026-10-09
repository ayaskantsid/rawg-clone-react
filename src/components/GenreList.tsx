import useGenres, { Genre } from '@/hooks/useGenres';
import { Button, Heading, HStack, Image, List } from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = Array.from({ length: 20 }, (_, i) => i);

  if (error) return null;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant='plain'>
        {isLoading &&
          skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <List.Item key={genre.id}>
            <HStack paddingY={1}>
              <Image
                src={genre.image_background}
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                flexShrink={0}
              />
              <Button
                fontSize='lg'
                variant='plain'
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                whiteSpace='normal'
                textAlign='left'
                height='auto'
                flexShrink={1}
                paddingX={0}
                justifyContent='flex-start'
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
