import { HStack, List, Skeleton } from '@chakra-ui/react';

const GenreListSkeleton = () => {
  return (
    <List.Item>
      <HStack paddingY={1}>
        <Skeleton boxSize='32px' borderRadius={8} />
        <Skeleton height='16px' width='120px' />
      </HStack>
    </List.Item>
  );
};

export default GenreListSkeleton;
