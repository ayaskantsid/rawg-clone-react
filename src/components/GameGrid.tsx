import { Text } from '@chakra-ui/react';
import apiClient from '@/services/api-client';
import React, { useEffect, useState } from 'react';

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
