import useScreenshots from '@/hooks/useScreenshots';
import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={3}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
