import React from 'react'
import './Picture.css'


const Picture = ({ src }) => {
    return (
        <div className="IMG-Container">
            <img className="img-prop" src={src} alt="img1"></img>

        </div>
     
    );
}

export default Picture;