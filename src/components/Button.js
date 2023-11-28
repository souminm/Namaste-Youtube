import React from 'react'
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const {name} = props;
    const navigate = useNavigate();
    const handleButton = ()=>{
      navigate('/search?q='+name);
    }
  return (
    <div>
        <button onClick={handleButton}className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button