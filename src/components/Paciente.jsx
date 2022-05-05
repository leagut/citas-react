import {useState} from 'react'
import React from 'react'

const Paciente = ({paciente,setPaciente}) => {

    const {nombre,propietario,email,fecha,sintomas} = paciente;

  return (
    <div className='m-3 bg-indigo-100 shadow-lg px-5 py-10 rounded-md'>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Nombre: {'  '}
              <span className='font-normal normal-case'>{nombre}</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Propietario: {'  '}
              <span className='font-normal normal-case'>{propietario}</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Email: {'  '}
              <span className='font-normal normal-case'>{email}</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Fecha de Alta: {'  '}
              <span className='font-normal normal-case'>{fecha}</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase' >Sintomas: {'  '}
              <span className='font-normal normal-case'> {sintomas} </span>
          </p>
        <div>
            <button type='button' className='py-2 px-10 bg-indigo-300 hover:bg-indigo-500 text-white rounded-lg '
            onClick={()=>setPaciente(paciente)}
            >Editar</button>
            <button type='button' className='py-2 px-10 bg-red-300 hover:bg-red-500 text-white rounded-lg ml-2'>Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente