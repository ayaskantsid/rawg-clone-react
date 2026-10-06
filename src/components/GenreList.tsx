import useGenres, { Genre } from '@/hooks/useGenres';
import { Button, HStack, Image, List, Spinner, Text } from '@chakra-ui/react';
import GenreListSkeleton from './GenreListSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];

  if (error) return null;

  return (
    <List.Root variant='plain'>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <List.Item key={genre.id}>
          <HStack paddingY={1}>
            <Image
              src={genre.image_background}
              boxSize='32px'
              borderRadius={8}
              objectFit='cover'
            />
            <Button
              fontSize='lg'
              variant='plain'
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
