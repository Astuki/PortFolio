import React from 'react';
import placeholder from '../../assets/Img.jpg'



export default function HomepageImg() {
  return (
    <>
      <div className='wrapper'>
        <img 
          className="wrapper_img" 
          src={placeholder} 
          alt="Photo prise de face"
        />
      </div>
    </>
  );
}
