import axios from 'axios'
import IVideo from '../types/video.type'

class VideoService {
	BASE_URL = 'http://localhost:3000/videos'
	async getAllWithQuery(query: string) {
		const response = await axios.get<IVideo[]>(`${this.BASE_URL}${query}`)
		return response
	}
}

export default new VideoService()
