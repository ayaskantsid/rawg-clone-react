import { GameQuery } from '@/App';
import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 15 }, (_, i) => i);

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0,
  );

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount || 0}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={null}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={6}
        padding='10px'
      >
        {isLoading &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page) =>
          page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          )),
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
