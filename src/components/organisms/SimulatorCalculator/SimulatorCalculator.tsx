import React from 'react'
import SimulatorContainer from '../../atoms/SimulatorContainer'
import FirstColumnSimulator from '../FirstColumnSimulator'

export const SimulatorCalculator = () => {
  return (
    <SimulatorContainer firstChild={<FirstColumnSimulator />} secondChild={<></>}/>
  )
}
