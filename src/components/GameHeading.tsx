import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import { Heading } from '@chakra-ui/react';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const heading = `${selectedPlatform?.name || 'All '} ${genre?.name || ''} Games`;

  return (
    <Heading marginY={6} marginX={2} fontSize='4xl' as='h1' lineHeight={1}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
