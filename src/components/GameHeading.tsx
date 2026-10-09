import { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || 'All '} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading marginY={6} marginX={2} fontSize='4xl' as='h1' lineHeight={1}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
