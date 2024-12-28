import { useQuery } from '@tanstack/react-query'
import videoService from '../services/video.service'

export default function useVideo(id: string) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['video', id],
		queryFn: async () => videoService.getById(id),
		enabled: !!id,
	})
	return { video: data?.data?.[0], isLoading, isError }
}
