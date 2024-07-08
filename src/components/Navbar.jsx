import React from 'react'
import { FcSearch } from "react-icons/fc";
import { IoFilterSharp } from "react-icons/io5";
import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";



const Navbar = ({bgColor, color, toggleButton, toggle}) => {
    return (
        <>
            <div className="nav_bar" >
                <div className="logo" style={{
                    backgroundColor: `${bgColor}`,
                    color: `${color}`
                }}>
                    WDM <div onClick={toggleButton}>
                        {toggle?(<MdToggleOff className='size'/>)
                        :(<MdToggleOn className='size'/>)}
                        {" "}
                    </div>
                    </div>
                <div className="search" style={{
                    backgroundColor: `${bgColor}`,
                    color: `${color}`
                }}>
                    <div className="left"><FcSearch  className='size p'/>Search here</div>
                    <div className="right"> <IoFilterSharp  className='size p'/>Filter</div>
                </div>
                <div className="seller" style={{
                    backgroundColor: `${bgColor}`,
                    color: `${color}`
                }}>Become  a seller</div>
            </div>
        </>
    )
}

export default Navbar
