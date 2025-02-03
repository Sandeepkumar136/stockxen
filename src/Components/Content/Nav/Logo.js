import React from 'react'
import ImageProvider from '../../Assets/ImgProvider';

const Logo = ({title}) => {
  return (
    <div className='logo-contain'>
        <img className='logo-img' src={ImageProvider.logo} alt={ImageProvider.logoAlt} />
        <h3 className="logo-title">{title}</h3>
    </div>
  )
}

export default Logo;
