import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-md'>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Nombre: {'  '}
              <span className='font-normal normal-case'>Hook</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Propietario: {'  '}
              <span className='font-normal normal-case'>Leandro</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Email: {'  '}
              <span className='font-normal normal-case'>correo@correo.com</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Fecha de Alta: {'  '}
              <span className='font-normal normal-case'>10/11/2022</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Sintomas: {'  '}
              <span className='font-normal normal-case'> Lorem ipsum dolor sit amet magni! Esse at repudiandae accusantium dolore modi id asperiores!
              Eius v ipsa rem quam cupiditate illum voluptatem nemo ut obcaecati dignissimos. </span>
          </p>

      </div>
  )
}

export default Paciente