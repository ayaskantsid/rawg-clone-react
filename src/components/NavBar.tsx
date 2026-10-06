import { Box, HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image
        src={logo}
        h='60px'
        onClick={handleLogoClick}
        className='pointer'
      />
      <Text
        onClick={handleLogoClick}
        fontWeight='extrabold'
        letterSpacing='5px'
        fontSize='18px'
        className='pointer'
      >
        RAWG
      </Text>
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
