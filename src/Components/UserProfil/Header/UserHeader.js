import React from 'react';
import ProfilIMG from './icon.png'
import "./UserHeader.css"
const UserHeader = () => {
    return (
        <div>
            <div className="UserHeader">
                <img className="User-Image-Profil" src={ProfilIMG} alt="Chris" />
                <div className="Text-Right-Container">
                    <div className="Post-Name-Title"><span>annapolina_</span></div>
                    
                    <div className="Container-Nb">
                        <div className="Nb-Pub"><span><strong>207</strong> Publications</span></div>
                        <div className="Nb-Pub"><span><strong>605k</strong> Abonnées</span></div>
                        <div className="Nb-Pub"><span><strong>1 214</strong> Personnes suivies</span></div>
                    </div>

                    <div className="RealName"><strong>Anna Polina </strong></div>
                    <div className="Description-Item">I have Slavic romantic melancholy.</div>
                    
                    
                </div>
                
            </div>
        </div>
    );
}

export default UserHeader;