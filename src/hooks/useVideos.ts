import { useQuery } from '@tanstack/react-query'
import videoService from '../services/video.service'
import IQuery from '../types/query.type'

export default function useVideos(query: IQuery) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['videos', query],
		queryFn: async () => videoService.getAllWithQuery(query),
	})

	return { videos: data?.data, isLoading, isError }
}
