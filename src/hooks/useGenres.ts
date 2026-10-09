import genres from '@/data/genres';
import APIClient from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<Genre[]>({
    queryKey: ['genres'],
    queryFn: () => apiClient.getAll().then((response) => response.results),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: genres,
  });

export default useGenres;
