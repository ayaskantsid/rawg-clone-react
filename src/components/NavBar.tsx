import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logoLight from '../assets/logo-light.webp';
import logoDark from '../assets/logo-dark.webp';
import { ColorModeButton, useColorMode } from './ui/color-mode';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === 'dark' ? logoLight : logoDark;

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
        <Image src={logoSrc} h={{ base: '42px', sm: '50px' }} />
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
