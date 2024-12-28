import { useSearchParams } from 'react-router'

const PagesDropdown = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	return (
		<select
			onChange={(e) => {
				searchParams.set('_limit', e.target.value)
				searchParams.set('_page', '1')
				setSearchParams(searchParams)
			}}
			value={searchParams.get('_limit')!}
			className='ml-5 h-[30px] border-[#999999] border-[1px] px-3 rounded-[5px]'
		>
			<option value={'12'}>12 / page</option>
			<option value={'20'}>20 / page</option>
			<option value={'32'}>32 / page</option>
			<option value={'56'}>56 / page</option>
		</select>
	)
}

export default PagesDropdown
