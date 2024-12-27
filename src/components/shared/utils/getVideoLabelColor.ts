import dayjs from 'dayjs'

export default function getVideoLabelColor(publishedDate: dayjs.Dayjs) {
	let color = '#EB5757'
	if (dayjs().diff(publishedDate, 'day') < 7) color = '#2F80ED'
	else if (dayjs().diff(publishedDate, 'month') < 1) color = '#27AE60'
	else if (dayjs().diff(publishedDate, 'month') < 6) color = '#F2C94C'
	return color
}
