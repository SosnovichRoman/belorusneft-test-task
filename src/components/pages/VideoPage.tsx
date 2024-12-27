import dayjs from 'dayjs'
import useVideos from '../../hooks/useVideos'
import getVideoLabelColor from '../shared/utils/getVideoLabelColor'
import VideoStatistics from '../shared/video-statistics.tsx/VideoStatistics'

const VideoPage = () => {
	const { videos } = useVideos('')
	const labelColor = getVideoLabelColor(dayjs(videos?.[3].snippet.publishedAt))
	return (
		<main>
			<div className='container flex py-10'>
				<button
					// onClick={() => }
					type='button'
					className='button p-2 rounded-r-none self-start shadow-none'
					style={{ backgroundColor: labelColor }}
				>
					<img src='/icons/left-arrow.svg' alt='arrow' />
				</button>
				<div
					className='grow min-h-[460px] flex rounded-[5px] rounded-tl-none overflow-hidden'
					style={{
						borderColor: getVideoLabelColor(
							dayjs(videos?.[0].snippet.publishedAt)
						),
						boxShadow: labelColor + '40 5px 10px 10px 0',
					}}
				>
					<img
						src={videos?.[3].snippet.thumbnails.standard.url}
						className='shadow-[#33333340] shadow-[5px_5px_20px_0] grow'
					/>
					<div
						className='p-9 bg-[#E5E5E5] shadow-[#33333340] shadow-[5px_5px_20px_0] w-[436px] flex flex-col  border-b-[5px]'
						style={{
							borderColor: labelColor,
						}}
					>
						<div className='grow'>
							<div className='flex justify-between items-end'>
								<h1 className='text-[24px] font-bold'>
									{videos?.[0].snippet.title}
								</h1>
								<time className='text-[#828282] text-[10px] shrink-0'>
									Четверг, Май 20, 2024
								</time>
							</div>
							<div className='mt-9'>
								<h2 className='text-[14px]'>Описание</h2>
								<p className='text-[#828282] text-[12px]'>
									{videos?.[0].snippet.description}
								</p>
							</div>
						</div>
						<VideoStatistics statistics={videos?.[0].statistics!} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default VideoPage
