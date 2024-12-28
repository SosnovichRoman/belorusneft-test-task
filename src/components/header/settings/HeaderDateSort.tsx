import { useSearchParams } from 'react-router'

const HeaderDateSort = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const sort = searchParams.get('sort') || ''
	const order = searchParams.get('order') || ''
	return (
		<button
			onClick={() => {
				if (sort == 'snippet.publishedAt' && order == '') {
					searchParams.set('order', 'desc')
				} else if (sort == 'snippet.publishedAt' && order == 'desc') {
					searchParams.set('order', '')
					searchParams.set('sort', '')
				} else {
					searchParams.set('sort', 'snippet.publishedAt')
				}
				setSearchParams(searchParams)
			}}
			className='text-primary hover:opacity-60 transition-all underline flex gap-3 items-center'
			type='button'
		>
			дате
			{sort == 'snippet.publishedAt' && order == ''
				? '↑'
				: sort == 'snippet.publishedAt' && order == 'desc'
				? '↓'
				: ''}
		</button>
	)
}

export default HeaderDateSort
