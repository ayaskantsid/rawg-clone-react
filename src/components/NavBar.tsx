import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} h='60px' padding='10px' />
      <Text>RAWG</Text>
    </HStack>
  );
};

export default NavBar;
