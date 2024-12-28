import dayjs from 'dayjs'
import { useParams } from 'react-router'
import useVideo from '../../hooks/useVideo'
import getVideoLabelColor from '../shared/utils/getVideoLabelColor'
import VideoStatistics from '../shared/video-statistics.tsx/VideoStatistics'

const VideoPage = () => {
	const { id } = useParams()
	const { video, isLoading, isError } = useVideo(id!)
	const labelColor = getVideoLabelColor(dayjs(video?.snippet.publishedAt))

	if (isLoading)
		return (
			<div className='container flex justify-center items-center h-[800px]'>
				Loading...
			</div>
		)

	if (isError)
		return (
			<div className='container flex justify-center items-center h-[800px]'>
				Error
			</div>
		)

	return (
		<main>
			<div className='container flex py-10'>
				<a
					href='/'
					className='button p-2 rounded-r-none self-start shadow-none'
					style={{ backgroundColor: labelColor }}
				>
					<img src='/icons/left-arrow.svg' alt='arrow' />
				</a>
				<div
					className='grow min-h-[460px] flex rounded-[5px] rounded-tl-none overflow-hidden'
					style={{
						borderColor: labelColor,
						boxShadow: labelColor + '40 5px 10px 10px 0',
					}}
				>
					<img
						src={video?.snippet.thumbnails.standard.url}
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
									{video?.snippet.title}
								</h1>
								<time className='text-[#828282] text-[10px] shrink-0'>
									Четверг, Май 20, 2024
								</time>
							</div>
							<div className='mt-9'>
								<h2 className='text-[14px]'>Описание</h2>
								<p className='text-[#828282] text-[12px]'>
									{video?.snippet.description}
								</p>
							</div>
						</div>
						<VideoStatistics statistics={video?.statistics!} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default VideoPage
