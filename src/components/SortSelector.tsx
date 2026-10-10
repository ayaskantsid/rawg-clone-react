import useGameQueryStore from '@/store';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  const isSelectedSortOrder = (order: string) => sortOrder === order;
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant={'outline'}>
          Order by: {currentSortOrder?.label || 'Relevance'}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => setSortOrder(order.value)}
                key={order.value}
                value={order.value}
                fontWeight={
                  isSelectedSortOrder(order.value) ? 'bold' : 'normal'
                }
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
