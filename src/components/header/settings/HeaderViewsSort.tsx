import { useSearchParams } from 'react-router'

const HeaderViewsSort = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const sort = searchParams.get('sort') || ''
	const order = searchParams.get('order') || ''
	return (
		<button
			onClick={() => {
				if (sort == 'statistics.viewCount' && order == '') {
					searchParams.set('order', 'desc')
				} else if (sort == 'statistics.viewCount' && order == 'desc') {
					searchParams.set('order', '')
					searchParams.set('sort', '')
				} else {
					searchParams.set('sort', 'statistics.viewCount')
				}
				setSearchParams(searchParams)
			}}
			className='text-primary hover:opacity-60 transition-all underline flex gap-3 items-center'
			type='button'
		>
			просмотрам
			{sort == 'statistics.viewCount' && order == ''
				? '↑'
				: sort == 'statistics.viewCount' && order == 'desc'
				? '↓'
				: ''}
		</button>
	)
}

export default HeaderViewsSort
