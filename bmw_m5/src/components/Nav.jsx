import React from 'react'

import headerLogo from "../assets/images/headerLogo.png"
import { navLinks } from '../constants'

const Nav = () => {
    return (
        <header className='px-2 py-8 absolute w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="logo" width={250} height={29} />
                </a>
                <ul className='flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="font-serif leading-normal text-lg text-slate-500">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav
