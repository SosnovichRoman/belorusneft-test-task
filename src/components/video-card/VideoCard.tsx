import dayjs from 'dayjs'
import IVideo from '../../types/video.type'
import getVideoLabelColor from '../shared/utils/getVideoLabelColor'
import VideoStatistics from '../shared/video-statistics.tsx/VideoStatistics'

const VideoCard = ({ video }: { video: IVideo }) => {
	const publisedDate = dayjs(video.snippet.publishedAt)

	return (
		<article
			className='rounded-[5px] overflow-hidden shadow-[2px_2px_4px_0] shadow-[#00000040] h-full bg-[#E5E5E5] hover:bg-[#F6F6F6] hover:shadow-[4px_4px_8px_0] hover:shadow-[#00000066] transition-all duration-200 border-b-[5px] px-5 pt-5 pb-[10px] flex flex-col grow justify-between'
			style={{ borderColor: getVideoLabelColor(publisedDate) }}
		>
			<div className=''>
				<img
					src={video.snippet.thumbnails.medium.url}
					className='w-full aspect-video object-cover'
					alt='preview'
				/>
				<VideoStatistics statistics={video.statistics} />
				<h2 className='text-[20px] font-bold text-[#4F4F4F] mt-5 text-right'>
					{video.snippet.title}
				</h2>
				<time className='text-[12px] text-[#4F4F4F] mt-1 text-right block'>
					{publisedDate.format('DD.MM.YYYY')}
				</time>
			</div>
			<a href={`/video/${video.id}`} className='button mt-5 self-center'>
				Далее...
			</a>
		</article>
	)
}

export default VideoCard
