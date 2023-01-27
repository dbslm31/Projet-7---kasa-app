import React from 'react';
import '../styles/Banner.css'

function Banner(props) {
    return (
        <div className="banner-container">
            <div className='img-container'>
                <img src={props.img} alt='Banner' className='banner' />
                <div className="color-overlay"></div>
                <p className="banner-overlay">{props.title}</p>

            </div>
        </div>
    )

}

export default Banner

