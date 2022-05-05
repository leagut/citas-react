
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes,setPaciente}) => {
  

  

  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll ' >
      {
        pacientes && pacientes.length ? <>
              <h2 className='font-black text-3xl text-center'  >
        Listado de Pacientes
        </h2>
        <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus {''}
        <span className='text-indigo-400 font-bold '>Pacientes y citas</span>  
        </p>

        {
        pacientes.map((paciente)=>(
          <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} />
        ))

        }
        
        
        </>: <>
        <h2 className='font-black text-3xl text-center'  >
        Listado de Pacientes
        </h2>
        <p className='text-xl mt-5 mb-10 text-center'>
        Todavia no hay pacientes {''}
        <span className='text-indigo-400 font-bold '></span>  
        </p>
        </>
      }


      
  


    </div>
  )
}

export default ListadoPacientes