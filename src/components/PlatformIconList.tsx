import { Platform } from '@/hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { AiFillAndroid } from 'react-icons/ai';
import { SiNintendo, SiSega, SiAtari, SiCommodore } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

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
