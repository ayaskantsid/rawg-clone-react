import { Platform } from '@/hooks/usePlatforms';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillAndroid } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import {
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiAtari, SiCommodore, SiNintendo, SiSega } from 'react-icons/si';

interface Props {
  platforms?: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    web: BsGlobe,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: AiFillAndroid,
    ios: MdPhoneIphone,
    sega: SiSega,
    atari: SiAtari,
    'commodore-amiga': SiCommodore,
  };

  return (
    <HStack marginTop={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        return <Icon key={platform.id} as={IconComponent} color='gray.500' />;
      })}
    </HStack>
  );
};

export default PlatformIconList;
