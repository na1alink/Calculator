import React, { useContext } from 'react'
import { NumberContext } from '../NumberProvider'

import './style.scss'

const BackButton = () => {
	const { handleBackButton } = useContext(NumberContext)
	return (
		<button
			type='button'
			className='function-button'
			onClick={() => handleBackButton()}
		>
			&#8592;
		</button>
	)
}

export default BackButton
