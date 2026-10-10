import { Box, Grid, GridItem, HStack } from '@chakra-ui/react';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import useGameQueryStore from './store';

function App() {
  const { gameQuery } = useGameQueryStore();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='aside' paddingX={5} hideBelow='lg'>
        <GenreList />
      </GridItem>
      <GridItem area='main'>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack gapX={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
