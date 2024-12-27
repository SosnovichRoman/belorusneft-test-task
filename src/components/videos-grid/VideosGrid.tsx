import useVideos from '../../hooks/useVideos'
import VideoCard from '../video-card/VideoCard'

const VideosGrid = () => {
	const { videos } = useVideos('')

	return (
		<div className='container grid grid-cols-4 gap-7'>
			{videos?.map((video) => (
				<VideoCard key={video.id} video={video} />
			))}
		</div>
	)
}

export default VideosGrid
