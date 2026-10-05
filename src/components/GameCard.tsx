import { Games } from '@/hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius='10px' overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='xl'>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
