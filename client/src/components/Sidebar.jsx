import React from 'react'
import { useState }  from 'react'
import { Link, useNavigate} from 'react-router-dom'






const Sidebar = () => {

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState('dashboard')

  return (
    <div>Sidebar</div>
  )
}

export default Sidebar