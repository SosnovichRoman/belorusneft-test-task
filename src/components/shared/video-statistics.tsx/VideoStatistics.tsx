type StatisticsType = {
	viewCount: number
	likeCount: string
	dislikeCount: string
	commentCount: string
}

const VideoStatistics = ({ statistics }: { statistics: StatisticsType }) => {
	return (
		<div className='flex gap-3 flex-wrap items-center mt-5 justify-center'>
			<div className='flex gap-[3px] items-center'>
				<img src='/icons/viewed.svg' className='' />
				<span className='text-[10px]'>{statistics?.viewCount}</span>
			</div>
			<div className='flex gap-[3px] items-center'>
				<img src='/icons/liked.svg' className='' />
				<span className='text-[10px]'>{statistics?.likeCount}</span>
			</div>
			<div className='flex gap-[3px] items-center'>
				<img src='/icons/dislike.svg' className='' />
				<span className='text-[10px]'>{statistics?.dislikeCount}</span>
			</div>
			<div className='flex gap-[3px] items-center'>
				<img src='/icons/comment.svg' className='' />
				<span className='text-[10px]'>{statistics?.commentCount}</span>
			</div>
		</div>
	)
}

export default VideoStatistics
