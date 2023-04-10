import React ,{ useState }  from 'react'
import { Link, useNavigate} from 'react-router-dom'

import logo from '../assets/logo.svg';
import sun from '../assets/sun.svg';



const Icon = ({ styles, name, imgurl, isActive,disabled, handleClick }) => {

  <div>

  </div>

}

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard')



  return (
    <div className='flex justify-between items-center flex-col sticky top-5 h-[93vh]'>
      <Link to="/">
        <Icon styles = 'w-[52px] h-[52px] bg-[#2c2f32]' imgurl={logo} />
      </Link>
    </div>
  )
}

export default Sidebar