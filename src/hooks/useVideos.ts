import { useQuery } from '@tanstack/react-query'
import videoService from '../services/video.service'

export default function useVideos(query: string) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['videos'],
		queryFn: async () => videoService.getAllWithQuery(query),
	})

	return { videos: data?.data, isLoading, isError }
}
