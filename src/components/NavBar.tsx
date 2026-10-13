import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Link
        to={'/'}
        className='pointer'
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0,
          textDecoration: 'none',
        }}
      >
        <Image src={logo} h={{ base: '42px', sm: '50px' }} />
        <Text
          fontWeight='extrabold'
          letterSpacing='5px'
          fontSize={{ base: '14px', sm: '18px' }}
        >
          RAWG
        </Text>
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
