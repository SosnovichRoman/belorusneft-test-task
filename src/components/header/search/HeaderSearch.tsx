import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

const HeaderSearch = ({
	setSettingsOpened,
}: {
	setSettingsOpened: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [descriptionLike, setDescriptionLike] = useState('')
	useEffect(() => {
		setDescriptionLike(searchParams.get('description_like')?.toString()!)
	}, [searchParams.get('description_like')])

	return (
		<div className='container flex justify-center'>
			<div className='flex gap-[10px] items-center'>
				<a href='/'>
					<img src='/logo.png' className='' alt='logo' />
				</a>
				<form className='flex' onSubmit={(e) => e.preventDefault()}>
					<input
						type='text'
						name='description_like'
						value={descriptionLike}
						onChange={(e) => setDescriptionLike(e.target.value)}
						className='input w-[400px]'
					/>
					<button
						onClick={() =>
							setSearchParams({ description_like: descriptionLike })
						}
						type='submit'
						className='button rounded-l-none py-1 px-6'
					>
						Искать
					</button>
				</form>
				<button
					type='button'
					onClick={() => setSettingsOpened((prev) => !prev)}
					className='button p-[4.5px]'
				>
					<img src='/settings.svg' className='' alt='settings' />
				</button>
			</div>
		</div>
	)
}

export default HeaderSearch
