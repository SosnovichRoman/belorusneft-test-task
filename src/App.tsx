import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'

import Header from './components/header/Header'
import HomePage from './components/pages/HomePage'
import NotFoundPage from './components/pages/NotFoundPage'
import VideoPage from './components/pages/VideoPage'
import Providers from './components/providers/Providers'

function App() {
	return (
		<Providers>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='video/:id' element={<VideoPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</Providers>
	)
}

export default App
