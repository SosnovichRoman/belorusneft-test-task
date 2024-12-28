import Pagination from '../pagination/Pagination'
import VideosGrid from '../videos-grid/VideosGrid'

const HomePage = () => {
	return (
		<main>
			<VideosGrid />
			<Pagination />
		</main>
	)
}

export default HomePage
