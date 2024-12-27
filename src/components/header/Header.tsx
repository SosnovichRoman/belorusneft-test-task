import { useState } from 'react'

const Header = () => {
	const [settingsOpened, setSettingsOpened] = useState(false)
	return (
		<header className='bg-[#E5E5E5]'>
			<div className='container flex justify-center'>
				<div className='flex gap-[10px] items-center'>
					<a href='/'>
						<img src='/logo.png' className='' alt='logo' />
					</a>
					<div className='flex'>
						<input type='text' className='input w-[400px]' />
						<button type='button' className='button rounded-l-none py-1 px-6'>
							Искать
						</button>
					</div>
					<button
						type='button'
						onClick={() => setSettingsOpened((prev) => !prev)}
						className='button p-[4.5px]'
					>
						<img src='/settings.svg' className='' />
					</button>
				</div>
			</div>

			{settingsOpened && (
				<div className='container text-[12px] flex justify-center gap-[53px] py-[18px]'>
					<div className='flex gap-5 items-center'>
						<span className='text-[#929292]'>Сортировать по:</span>
						<button
							className='text-primary hover:opacity-60 transition-all underline'
							type='button'
						>
							дате
						</button>
						<button
							className='text-primary hover:opacity-60 transition-all underline'
							type='button'
						>
							просмотрам
						</button>
					</div>
					<div className='flex items-center gap-5'>
						<span className='text-[#929292]'>Фильтровать по слову:</span>
						<input className='input ' type='text' />
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
