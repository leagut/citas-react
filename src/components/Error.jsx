import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-500 p-3 uppercase font-bold text-white rounded-md '  >
                    <p>{mensaje}</p>
    </div> 
  )
}

export default Error