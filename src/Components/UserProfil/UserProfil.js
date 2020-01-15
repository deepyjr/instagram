import React from 'react'
import Header from "../Header/Header"
import UserHeader from "./Header/UserHeader"
import "./UserProfil.css"
import Picture from "./Pictures/Picture"
import img1 from "../UserProfil/Pictures/img1.png";
import img2 from "../UserProfil/Pictures/img2.png";
import img3 from "../UserProfil/Pictures/img3.png";

const UserProfil = () => {
    return (
        <div>
            <Header></Header>
            <UserHeader></UserHeader>
            <div className="Pic-Container">
                <Picture src={img1}></Picture>
                <Picture src={img2}></Picture>
                <Picture src={img3}></Picture>
                <Picture src={img1}></Picture>
                <Picture src={img2}></Picture>
                <Picture src={img3}></Picture>                
                <Picture src={img1}></Picture>
                <Picture src={img2}></Picture>
                <Picture src={img3}></Picture>
            </div>
        </div>

    );
}

export default UserProfil;