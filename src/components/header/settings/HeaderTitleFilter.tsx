import { debounce } from 'lodash'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

const HeaderTitleFilter = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [title, setTitle] = useState('')
	useEffect(() => {
		setTitle(searchParams.get('title_like') || '')
	}, [searchParams])

	const changeParams = debounce((searchParams: URLSearchParams) => {
		setSearchParams(searchParams)
	}, 500)

	const handleChange = (value: string) => {
		setTitle(value)
		searchParams.set('title_like', value)
		changeParams(searchParams)
	}

	return (
		<div className='flex items-center gap-5'>
			<span className='text-[#929292]'>Фильтровать по слову:</span>
			<input
				className='input'
				value={title}
				onChange={(e) => handleChange(e.target.value)}
				type='text'
			/>
		</div>
	)
}

export default HeaderTitleFilter
