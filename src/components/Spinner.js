import React from 'react'
import Ghost from './Ghost.gif'

const spinner = () => {

  return (
    <div className='text-center'>
      <img className='my-3' src={Ghost} alt="loading" />
    </div>
  )

}

export default spinner
