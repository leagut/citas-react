import {useState, useEffect} from 'react'
import '../index.css'


const Formulario = () => {

    const [nombre,setNombre] = useState ('');


  return (
    <div className='md:w-1/2 lg:w-2/5 mb-5 ' >
        <h2 className='font-black text-3xl text-center'  >formulario</h2>

        <p className='text-lg text-center mt-5 mb-10'>
            Añade Pacientes y {' '}
            <span className='text-indigo-400 font-bold ' >Administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-md py-5 px-5'>
            <div className='mb-5'>
                <label htmlFor='masota' className='block uppercase font-bold '  >Nombre Mascota</label>
                <input id='mascota' type="text" 
                placeholder='nombre mascota'
                className='border-2 w-full p-2 mt-2 rounded-md'
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='propietario' className='block uppercase font-bold '  >Propietario</label>
                <input id='propietario' type="text" 
                placeholder='nombre propietario'
                className='border-2 w-full p-2 mt-2 rounded-md'
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block uppercase font-bold '  >Email</label>
                <input id='email' type="email" 
                placeholder='nombre de email'
                className='border-2 w-full p-2 mt-2 rounded-md'
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='alta' className='block uppercase font-bold '  >Alta</label>
                <input id='alta' type="date" 
                className='border-2 w-full p-2 mt-2 rounded-md'
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='sintomas' className='block uppercase font-bold '  >Sintomas</label>
                <textarea name="" placeholder='Descripcion' id="sintomas" cols="30" rows="10" className='border-2 w-full p-2 mt-2 rounded-md'> </textarea>
            </div>

            <input type="submit"
                   className='bg-indigo-400 w-full text-white font-bold p-2 rounded-md hover:bg-slate-500 cursor-pointer transition-colors'
                   value='Agregar paciente' 
            />
        </form>

    </div>
  )
}

export default Formulario