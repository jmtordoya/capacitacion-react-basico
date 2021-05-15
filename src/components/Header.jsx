import React from 'react'
import '../styles/header.css'

const Header = ({onChange, placeholder}) => {
    return (
        <div className="header">
            <a href="#default" className="logo">Casas en Bolivia</a>
            <div className="header-right">
                <div className="Search">
                    <input
                        className="SearchInput"
                        type="text"
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header