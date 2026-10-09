import { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();

  const selectedPlatform = platforms?.find(
    (p) => p.id === gameQuery.platformId,
  );

  const heading = `${selectedPlatform?.name || 'All '} ${genre?.name || ''} Games`;

  return (
    <Heading marginY={6} marginX={2} fontSize='4xl' as='h1' lineHeight={1}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
