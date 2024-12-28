import { useSearchParams } from 'react-router'
import useVideos from '../../hooks/useVideos'
import IQuery from '../../types/query.type'
import PagesDropdown from './PagesDropdown'

const Pagination = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const currentPage = searchParams.get('_page') || '1'
	const query: IQuery = {
		_page: currentPage,
		_per_page: searchParams.get('_limit') || '12',
		description_like: searchParams.get('description_like') || '',
		title_like: searchParams.get('title_like') || '',
		sort: searchParams.get('sort') || '',
		order: searchParams.get('order') || '',
	}
	const { pageInfo, isLoading, isError } = useVideos(query)

	const handlePageChange = (page: string) => {
		searchParams.set('_page', page)
		setSearchParams(searchParams)
	}

	if (isLoading)
		return (
			<div className='container flex items-center justify-center h-96'>
				Loading...
			</div>
		)
	if (isError)
		<div className='container flex items-center justify-center h-96'>Error</div>

	return (
		<div className='container flex justify-center py-5'>
			<div className='flex text-center'>
				{pageInfo.firstPage != currentPage &&
					pageInfo.firstPage != pageInfo.prevPage && (
						<>
							<button
								type='button'
								className='w-[30px] h-[30px]'
								onClick={() => handlePageChange(pageInfo.firstPage)}
							>
								{pageInfo.firstPage}
							</button>
							{Number(pageInfo.firstPage) != Number(pageInfo.prevPage) - 1 && (
								<div className='w-[30px] h-[30px]'>...</div>
							)}
						</>
					)}
				{pageInfo.prevPage && (
					<button
						type='button'
						className='w-[30px] h-[30px]'
						onClick={() => handlePageChange(pageInfo.prevPage)}
					>
						{pageInfo.prevPage}
					</button>
				)}

				<button
					type='button'
					className='w-[30px] h-[30px] rounded-[5px] border-primary border-[1px]'
				>
					{currentPage}
				</button>

				{pageInfo.nextPage && (
					<button
						type='button'
						className='w-[30px] h-[30px]'
						onClick={() => handlePageChange(pageInfo.nextPage)}
					>
						{pageInfo.nextPage}
					</button>
				)}

				{pageInfo.lastPage != currentPage &&
					pageInfo.lastPage != pageInfo.nextPage && (
						<>
							{Number(pageInfo.lastPage) != Number(pageInfo.nextPage) + 1 && (
								<div className='w-[30px] h-[30px]'>...</div>
							)}
							<button
								type='button'
								className='w-[30px] h-[30px]'
								onClick={() => handlePageChange(pageInfo.lastPage)}
							>
								{pageInfo.lastPage}
							</button>
						</>
					)}
			</div>
			<PagesDropdown />
		</div>
	)
}

export default Pagination
