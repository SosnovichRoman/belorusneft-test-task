import dayjs from 'dayjs'
import IVideo from '../../types/video.type'

const VideoCard = ({ video }: { video: IVideo }) => {
	const publisedDate = dayjs(video.snippet.publishedAt)
	console.log(publisedDate)

	return (
		<article className='rounded-[5px] overflow-hidden shadow-[2px_2px-4px_0] shadow-[#00000040] h-full flex flex-col bg-[#E5E5E5]'>
			<div className='px-5 pt-5 pb-[10px] flex flex-col grow justify-between'>
				<div className=''>
					<img
						src={video.snippet.thumbnails.medium.url}
						className='w-full aspect-video object-cover'
						alt='preview'
					/>
					<div className='flex gap-3 flex-wrap items-center mt-5 justify-center'>
						<div className='flex gap-[3px] items-center'>
							<img src='/icons/viewed.svg' className='' />
							<span className='text-[10px]'>{video.statistics.viewCount}</span>
						</div>
						<div className='flex gap-[3px] items-center'>
							<img src='/icons/liked.svg' className='' />
							<span className='text-[10px]'>{video.statistics.likeCount}</span>
						</div>
						<div className='flex gap-[3px] items-center'>
							<img src='/icons/dislike.svg' className='' />
							<span className='text-[10px]'>
								{video.statistics.dislikeCount}
							</span>
						</div>
						<div className='flex gap-[3px] items-center'>
							<img src='/icons/comment.svg' className='' />
							<span className='text-[10px]'>
								{video.statistics.commentCount}
							</span>
						</div>
					</div>
					<h2 className='text-[20px] font-bold text-[#4F4F4F] mt-5 text-right'>
						{video.snippet.title}
					</h2>
					<time className='text-[12px] text-[#4F4F4F] mt-1 text-right block'>
						{publisedDate.format('DD.MM.YYYY')}
					</time>
				</div>
				<button type='button' className='button mt-5 self-center'>
					Далее...
				</button>
			</div>

			<div className='h-[5px] bg-primary'></div>
		</article>
	)
}

export default VideoCard
