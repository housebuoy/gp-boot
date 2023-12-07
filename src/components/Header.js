import './Header.css'
import React, { useState } from 'react'
import { Dropdown, ButtonToolbar } from 'rsuite';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
    const activeClass = isClicked ? 'text-swiper-theme' : 'hover:text-swiper-theme';


  return (
    <div className='Header'>
        <h1 className='logo sm:ml-20'>gp<span>.</span></h1>
        <div className="navbar ">
            <a href="#home" className={activeClass} onClick={handleClick}>Home</a>
            <a href="#about" className='hover:text-swiper-theme'>About</a>
            <a href="#services" className='hover:text-swiper-theme'>Services</a>
            <a href="#portfolio" className='hover:text-swiper-theme'>Portfolio</a>
            <a href="#team" className='hover:text-swiper-theme'>Team</a>
            <span>
            <ButtonToolbar className='Drop'>
                <Dropdown title="Drop Down" appearance='link' className='menu'>
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Menu title="Right Item 2">
                    <Dropdown.Menu title="Item 2-1">
                    <Dropdown.Item>Item 2-1-1</Dropdown.Item>
                    <Dropdown.Item active>Item 2-1-2</Dropdown.Item>
                    <Dropdown.Item>Item 2-1-3</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>Item 2-2</Dropdown.Item>
                    <Dropdown.Item>Item 2-3</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Menu title="Left Item 3">
                    <Dropdown.Menu title="Item 3-1">
                    <Dropdown.Item>Item 3-1-1</Dropdown.Item>
                    <Dropdown.Item active>Item 3-1-2</Dropdown.Item>
                    <Dropdown.Item>Item 3-1-3</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>Item 3-2</Dropdown.Item>
                    <Dropdown.Item>Item 3-3</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Item 4</Dropdown.Item>
                <Dropdown.Item>Item 5</Dropdown.Item>
                <Dropdown.Item>Item 6</Dropdown.Item>
                </Dropdown>
            </ButtonToolbar>
            </span>
            <a href="#contact" className='hover:text-swiper-theme'>Contact</a>
        </div>
        <div className="getStarted-button flex items-center gap-3">
            <button class='hover:bg-swiper-theme hover:text-black'>
                Get Started
            </button>
            <label for="check" class="checkbtn">
                <i class='bx bx-menu text-4xl text-white'></i>
            </label>
            <input type="checkbox" id="check"></input>
        </div>
    </div>
  )
}

export default Header