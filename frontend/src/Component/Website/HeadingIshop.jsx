import React from 'react'
import Profile from "./images/profile_icon.svg"
import BagIcon from "./images/bag_icon.svg"
import search_icon from './images/search_icon.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const HeadingIshop = () => {
    const cart = useSelector((state) => state.cart.data)
    return (
        <>
            <div className="row">
                <div className="left-top">
                    EN
                    <i className="fa fa-caret-down" aria-hidden="true" />
                    &nbsp;&nbsp;<span>$</span>&nbsp;
                    <i className="fa fa-caret-down" aria-hidden="true" />
                </div>
                <div className="right-top">
                    <img src={Profile} alt="" />
                    <span>My Profile</span>&nbsp;&nbsp;
                    <Link className="flex gap-x-2" to="/cart">
                        <img src={BagIcon} alt="" />
                        <span>{cart.length} </span>
                    </Link>
                    <span>$998</span>
                    &nbsp;&nbsp;
                    <img src={search_icon} alt="" />
                </div>
            </div>
        </>
    )
}

export default HeadingIshop
