import { Button, Menu, Portal } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '@/hooks/usePlatforms';
import usePlatform from '@/hooks/usePlatform';

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();
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
                onClick={() => onSelectPlatform(platform)}
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
