import { GameQuery } from '@/App';
import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const selectedPlatform = usePlatform(gameQuery.platformId);

  const heading = `${selectedPlatform?.name || 'All '} ${genre?.name || ''} Games`;

  return (
    <Heading marginY={6} marginX={2} fontSize='4xl' as='h1' lineHeight={1}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
