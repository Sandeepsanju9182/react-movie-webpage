import React from 'react'
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h1>Movierulz</h1>
        </div>
        <div className='header-controls'>
            <input type="text" placeholder='Search Movies...' />
            <select>
                <option value="">sort by year</option>
                <option value="asc">year Ascending</option>
                <option value="desc">year Desending</option>
            </select>
            <label>
                <input type="checkbox" />
                DarkMode
            </label>
        </div>
    </header>
  )
}

export default Header
