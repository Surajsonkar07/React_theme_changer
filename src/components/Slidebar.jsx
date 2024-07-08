import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const Slidebar = ({bgColor,color}) => {
    return (
        <>
            <div className='side-bar-content'  style={{
                backgroundColor:`${bgColor}`,
                color:`${color}`
            }}>
                <div className="top-content">
                    <div className="items"><FaHome  className='size p'/> Home</div>
                    <div className="items">
                        <IoIosNotifications className='size p' /> Notification</div>
                    <div className="items"><CiShoppingCart className='size p' /> Shop</div>
                    <div className="items"><BiConversation className='size p' /> Conversation</div>
                    <div className="items"><FaWallet  className='size p'/> Wallet</div>
                    <div className="items">
                        <MdOutlineSubscriptions  className='size p'/> Subscription</div>
                    <div className="items">
                        <CgProfile className='size p' /> My Profile</div>
                </div>
                <div className="bottom-content items">Log Out</div>
            </div>
        </>
    )
}

export default Slidebar
