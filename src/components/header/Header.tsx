const Header = () => {
	return (
		<header className='bg-[#E5E5E5]'>
			<div className='container flex justify-center'>
				<div className='flex gap-[10px] items-center'>
					<img src='/logo.png' className='' alt='logo' />
					<div className=''>
						<input type='text' className='' />
						<button type='button' className='button rounded-r-none'>
							Искать
						</button>
					</div>
					<button type='button' className='button'>
						<img src='/settings.svg' className='' />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
