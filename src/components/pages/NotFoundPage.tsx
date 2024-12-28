const NotFoundPage = () => {
	return (
		<div className='container flex justify-center h-[800px] items-center'>
			<div className='flex items-center gap-5 flex-col'>
				<div className='flex gap-7 items-center'>
					<img src='/not-found.png' />
					<h1 className='text-[#828282] font-bold text-[24px]'>
						Что-то пошло не так...
					</h1>
				</div>
				<a href='/' className='hover:underline text-[12px] text-primary'>
					Вернуться на главную
				</a>
			</div>
		</div>
	)
}

export default NotFoundPage
