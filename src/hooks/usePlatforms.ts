import platforms from '@/data/platforms';
import apiClient, { FetchResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<Platform[]>({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>('platforms/lists/parents')
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: platforms,
  });

export default usePlatforms;
