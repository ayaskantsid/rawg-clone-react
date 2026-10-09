import { GameQuery } from '@/App';
import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap={6}>
      {isLoading &&
        skeletons.map((s) => (
          <GameCardContainer key={s}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
