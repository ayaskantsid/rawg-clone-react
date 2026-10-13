import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import { Game } from '../entities/Game';
import ms from 'ms';

//TODO: handle inteface dependency later
const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms('24h'),
  });

export default useGame;
