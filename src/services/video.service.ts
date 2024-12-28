import axios from 'axios'
import IQuery from '../types/query.type'
import IVideo from '../types/video.type'

class VideoService {
	BASE_URL = 'http://localhost:3000/videos'
	async getAllWithQuery({
		_page = '0',
		_per_page = '12',
		sort = '',
		description_like = '',
		title_like = '',
		order = '',
	}: IQuery) {
		const response = await axios.get<IVideo[]>(
			`${this.BASE_URL}?_page=${_page}&_per_page=${_per_page}&_sort=${sort}&_order=${order}&snippet.description_like=${description_like}&snippet.title_like=${title_like}`
		)
		return response
	}
}

export default new VideoService()
