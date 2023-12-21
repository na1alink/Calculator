import React from 'react'
import NumberButton from '../NumberButton'
import FunctionButton from '../FunctionButton'
import ClearButton from '../ClearButton'
import Display from '../Display'
import EqualButton from '../EqualButton'
import BackButton from '../BackButton'
import NegativeButton from '../NegativeButton'
// import { CalculatorStyles } from '../styles/Styles'

import './style.scss'

const Calculator = () => (
	<div className='calculator'>
		<div className='calculator__top'>
			<h1 className='calculator__title'>Калькулятор</h1>
			<Display />
		</div>

		<div className='number__pad'>
			<ClearButton />
			<BackButton />
			<NegativeButton />
			<FunctionButton buttonValue='/' />
			<NumberButton buttonValue={7} />
			<NumberButton buttonValue={8} />
			<NumberButton buttonValue={9} />
			<FunctionButton buttonValue='*' />
			<NumberButton buttonValue={4} />
			<NumberButton buttonValue={5} />
			<NumberButton buttonValue={6} />
			<FunctionButton buttonValue='-' />
			<NumberButton buttonValue={1} />
			<NumberButton buttonValue={2} />
			<NumberButton buttonValue={3} />
			<FunctionButton buttonValue='+' />
			<div className='zero-button'>
				<NumberButton buttonValue={0} />
			</div>
			<NumberButton buttonValue='.' />
			<EqualButton />
		</div>
	</div>
)

export default Calculator
