import React from 'react'
import Left from './Hero-Left'
import Right from './Hero-Right'

const Hero = () => {
  return (
    <div className='min-h-screen items-center grid grid-cols-2 justify-center'>
      <Left />
      <Right />
    </div>
  )
}

export default Hero
