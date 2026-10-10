import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant={'outline'}>
          {selectedPlatform?.name || 'Platforms'}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map((platform) => (
              <Menu.Item
                onClick={() => setSelectedPlatformId(platform.id)}
                key={platform.id}
                value={platform.name}
                fontWeight={
                  selectedPlatform?.id === platform.id ? 'bold' : 'normal'
                }
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
