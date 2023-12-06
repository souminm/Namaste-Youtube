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
        <button onClick={handleButton}className='md:px-5 px-2  md:py-2 py-0 md:m-2 m-1 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button