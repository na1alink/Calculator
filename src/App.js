import React from 'react'
import Calculator from './components/Calculator'
import NumberProvider from './components/NumberProvider'

import 'bootstrap/dist/css/bootstrap.css'

function App() {
	return (
		<NumberProvider>
			<Calculator />
		</NumberProvider>
	)
}

export default App
