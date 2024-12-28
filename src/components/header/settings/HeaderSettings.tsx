import HeaderDateSort from './HeaderDateSort'
import HeaderTitleFilter from './HeaderTitleFilter'
import HeaderViewsSort from './HeaderViewsSort'

const HeaderSettings = () => {
	return (
		<div className='container text-[12px] flex justify-center gap-[53px] py-[18px]'>
			<div className='flex gap-5 items-center'>
				<span className='text-[#929292]'>Сортировать по:</span>
				<HeaderDateSort />
				<HeaderViewsSort />
			</div>
			<HeaderTitleFilter />
		</div>
	)
}

export default HeaderSettings
