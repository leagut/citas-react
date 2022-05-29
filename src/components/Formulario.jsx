import {useState, useEffect} from 'react'
import Error from './Error';
import '../index.css'
import './tra.css'

const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {

    const [nombre,setNombre] = useState ('');
    const [propietario,setPropietario] = useState ('');
    const [email,setEmail] = useState ('');
    const [fecha,setFecha] = useState ('');
    const [sintomas,setSintomas] = useState ('');

    const [error , setError] = useState(false)

    useEffect(()=>{
        if (Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente]);

    
    const generarId = ()=>{
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        if ( [nombre, propietario, email , fecha ,sintomas].includes('')){
            
            setError(true)
            
        } else{
                setError(false);

                const objetoPaciente ={
                    nombre,
                    propietario,
                    email,
                    fecha,
                    sintomas,
                    
                }

                if(paciente.id){
                    //editando el registro
                    objetoPaciente.id=paciente.id

                    const pacientesActualizados = pacientes.map(pacienteState=> pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

                    setPacientes(pacientesActualizados)
                    setPaciente({})

                }else{
                    //nuevo registro
                    objetoPaciente.id=generarId();
                    setPacientes([...pacientes,objetoPaciente]);
                }
                
                
                

                
                //reinicia el formulario
                setNombre('');
                setPropietario('');
                setEmail('');
                setFecha('');
                setSintomas('');
        }
        
    }


return (
    <div className='md:w-1/2 lg:w-2/5 mx-5  ' >
        <h2 className='font-black text-3xl text-center'  >formulario</h2>

        <p className='text-lg text-center mt-5 '>
            Añade Pacientes y {' '}
            <span className='text-indigo-400 font-bold ' >Administralos</span>
        </p>

        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-md py-5 px-5 border-2 border-indigo-100 transpa'>

            { error &&  <Error  mensaje='Hay que llenar todos los campos'/>
                
            }
            
            <div className='mb-5'>
                <label htmlFor='masota' className='block uppercase font-bold '>Nombre Mascota</label>
                <input id='mascota' type="text" 
                placeholder='nombre mascota'
                className='border-2 w-full p-2 mt-2 rounded-md'
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='propietario' className='block uppercase font-bold ' >Propietario</label>
                <input id='propietario' type="text" 
                placeholder='nombre propietario'
                className='border-2 w-full p-2 mt-2 rounded-md'
                value={propietario}
                onChange={(e)=>setPropietario(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='email' className='block uppercase font-bold '  >Email</label>
                <input id='email' type="email" 
                placeholder='nombre de email'
                className='border-2 w-full p-2 mt-2 rounded-md'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='alta' className='block uppercase font-bold '  >Alta</label>
                <input id='alta' type="date" 
                className='border-2 w-full p-2 mt-2 rounded-md'
                value={fecha}
                onChange={(e)=>setFecha(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label htmlFor='sintomas' className='block uppercase font-bold '  >Sintomas</label>
                <textarea name="" placeholder='Descripcion' id="sintomas" cols="30" rows="10" className='border-2 w-full p-2 mt-2 rounded-md' value={sintomas}
                onChange={(e)=>setSintomas(e.target.value)} />  
            </div>

            <input type="submit"
                className='bg-indigo-400 w-full text-white font-bold p-2 rounded-md hover:bg-slate-500 cursor-pointer transition-colors'
                value={paciente.id ? ' Editar paciente' : 'Agregar paciente'} 
            />
        </form>

    </div>
)
}

export default Formulario