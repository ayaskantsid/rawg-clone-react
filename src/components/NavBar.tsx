import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <HStack>
        <Image src={logo} h='40px' />
        <Text>RAWG</Text>
      </HStack>
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
