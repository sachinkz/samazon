import React, { useState } from 'react'
import Button from '../../components/shared/Button'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {

  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleVisibility = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <div className='w-full min-h-screen flex justify-center gap-10 items-center flex-col' >

      <form className='flex flex-col w-[300px] h-auto justify-center items-center border-2 border-gray-500 rounded-md gap-8 p-5' action="">
        <h3 className='text-3xl font-bold text-emerald-500 ' >Login</h3>
        <input onChange={(e)=>setEmail(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Enter your email' type="email" />
        <div className='relative w-full' >
          <input onChange={(e)=>setPassword(e.target.value)} className='border-2 w-full rounded-md border-gray-500 py-2 pl-2' placeholder='Enter your password' type={isVisible?"text":"password"} />
          {isVisible ? <VisibilityOffIcon onClick={toggleVisibility} className='absolute right-2 text-zinc-600  top-2' />
            : <VisibilityIcon onClick={toggleVisibility} className='absolute right-2 text-zinc-600  top-2' />}

        </div>
        <Button btnType="Login" />
        <Link to={'/signup'} ><p className='text-emerald-500 text-sm cursor-pointer' >Create an account</p></Link>
      </form>
    </div>
  )
}

export default Login