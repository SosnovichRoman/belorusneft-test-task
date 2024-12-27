import dayjs from 'dayjs'

const VideoTimeLabel = ({ publishedDate }: { publishedDate: dayjs.Dayjs }) => {
	let bgColor = '#EB5757'
	console.log(dayjs().diff(publishedDate, 'day'))
	if (dayjs().diff(publishedDate, 'day') < 7) bgColor = '#2F80ED'
	else if (dayjs().diff(publishedDate, 'month') < 1) bgColor = '#27AE60'
	else if (dayjs().diff(publishedDate, 'month') < 6) bgColor = '#F2C94C'

	return <div className='h-[5px]' style={{ backgroundColor: bgColor }}></div>
}

export default VideoTimeLabel

// 	#EB5757 если видео старше 6 месяцев
// 	#F2C94C дата публикации от 1 до 6 месяцев назад
// 	#27AE60 дата публикации от 7 дней до 1 месяца назад
// 	#2F80ED видео младше 7 дней
