import { useSearchParams } from 'react-router'
import useVideos from '../../hooks/useVideos'
import IQuery from '../../types/query.type'
import VideoCard from '../video-card/VideoCard'

const VideosGrid = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const query: IQuery = {
		_page: searchParams.get('_page') || '',
		_per_page: searchParams.get('_per_page') || '',
		description_like: searchParams.get('description_like') || '',
		title_like: searchParams.get('title_like') || '',
		sort: searchParams.get('sort') || '',
		order: searchParams.get('order') || '',
	}
	const { videos } = useVideos(query)

	return (
		<div className='container grid grid-cols-4 gap-7 py-7'>
			{videos?.map((video) => (
				<VideoCard key={video.id} video={video} />
			))}
		</div>
	)
}

export default VideosGrid
