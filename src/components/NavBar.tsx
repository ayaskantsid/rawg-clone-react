import {
  Box,
  Drawer,
  HStack,
  IconButton,
  Image,
  Portal,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import logoLight from '../assets/logo-light.webp';
import logoDark from '../assets/logo-dark.webp';
import { ColorModeButton, useColorMode } from './ui/color-mode';
import SearchInput from './SearchInput';
import GenreList from './GenreList';
import { Link } from 'react-router-dom';
import { LuMenu, LuX } from 'react-icons/lu';

const NavBar = () => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === 'dark' ? logoLight : logoDark;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <HStack justifyContent='space-between' padding='10px'>
      <HStack flexShrink={0}>
        {/* Drawer trigger — only visible below lg */}
        <Box hideFrom='lg'>
          <Drawer.Root
            placement='start'
            size='xs'
            open={drawerOpen}
            onOpenChange={(e) => setDrawerOpen(e.open)}
          >
            <Drawer.Trigger asChild>
              <IconButton variant='ghost' aria-label='Open genre menu'>
                <LuMenu />
              </IconButton>
            </Drawer.Trigger>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Header
                    display='flex'
                    justifyContent='space-between'
                    borderBottom='none'
                    paddingBottom={2}
                    paddingTop={3}
                  >
                    <Text fontSize='xl' fontWeight='bold'>
                      Genres
                    </Text>
                    <IconButton
                      variant='ghost'
                      aria-label='Close drawer'
                      size='sm'
                      onClick={() => setDrawerOpen(false)}
                    >
                      <LuX />
                    </IconButton>
                  </Drawer.Header>
                  <Drawer.Body>
                    <GenreList onSelectGenre={() => setDrawerOpen(false)} />
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Box>

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
            hideBelow='lg'
          >
            RAWG
          </Text>
        </Link>
      </HStack>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
