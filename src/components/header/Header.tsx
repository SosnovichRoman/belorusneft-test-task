import { useState } from 'react'
import HeaderSearch from './search/HeaderSearch'
import HeaderSettings from './settings/HeaderSettings'

const Header = () => {
	const [settingsOpened, setSettingsOpened] = useState(false)
	return (
		<header className='bg-[#E5E5E5]'>
			<HeaderSearch setSettingsOpened={setSettingsOpened} />
			{settingsOpened && <HeaderSettings />}
		</header>
	)
}

export default Header
