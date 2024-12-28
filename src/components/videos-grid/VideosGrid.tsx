import { useSearchParams } from 'react-router'
import useVideos from '../../hooks/useVideos'
import IQuery from '../../types/query.type'
import VideoCard from '../video-card/VideoCard'

const VideosGrid = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const query: IQuery = {
		_page: searchParams.get('_page') || '1',
		_per_page: searchParams.get('_limit') || '12',
		description_like: searchParams.get('description_like') || '',
		title_like: searchParams.get('title_like') || '',
		sort: searchParams.get('sort') || '',
		order: searchParams.get('order') || '',
	}
	const { videos, isLoading, isError } = useVideos(query)

	if (isLoading)
		return (
			<div className='container flex items-center justify-center h-96'>
				Loading...
			</div>
		)
	if (isError)
		<div className='container flex items-center justify-center h-96'>Error</div>

	return (
		<div className='container grid grid-cols-4 gap-7 py-7'>
			{videos?.map((video) => (
				<VideoCard key={video.id} video={video} />
			))}
		</div>
	)
}

export default VideosGrid
