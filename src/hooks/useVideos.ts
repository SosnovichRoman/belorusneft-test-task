import { useQuery } from '@tanstack/react-query'
import { AxiosHeaders } from 'axios'
import videoService from '../services/video.service'
import IQuery from '../types/query.type'

export default function useVideos(query: IQuery) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['videos', query],
		queryFn: async () => videoService.getAllWithQuery(query),
	})

	const pageInfo = {
		firstPage: '',
		lastPage: '',
		prevPage: '',
		nextPage: '',
	}

	const headers = data?.headers
	if (headers instanceof AxiosHeaders && headers.has('link')) {
		const links: string = headers['link']?.toString()
		let linksArray = links.split(',')
		linksArray.map((link) => {
			if (link.includes('first'))
				pageInfo.firstPage = link.split('_page=')?.[1]?.split('&')?.[0]
			if (link.includes('last'))
				pageInfo.lastPage = link.split('_page=')?.[1]?.split('&')?.[0]
			if (link.includes('prev'))
				pageInfo.prevPage = link.split('_page=')?.[1]?.split('&')?.[0]
			if (link.includes('next'))
				pageInfo.nextPage = link.split('_page=')?.[1]?.split('&')?.[0]
		})
	}

	return { videos: data?.data, isLoading, isError, pageInfo }
}
