import { Games } from '@/hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius='10px' overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='xl'>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
