import React, { useState } from 'react';
import Nav from '../nav/Nav';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'About', path: '/About'},
        {id: 3, name: 'Products', path: '/Products'},
        {id: 4, name: 'Orders', path: '/Orders'},
        {id: 5, name: 'Contact', path: '/Contact'}
    ]
    return (
        <nav className='bg-indigo-300'>
            <div onClick={()=>setOpen(!open)} className="h-7 w-7 cursor-pointer md:hidden">
            {
                open?  <XMarkIcon /> : <Bars3Icon />
            }
            </div>
            <ul className={`md:flex justify-center text-lg font-semibold absolute duration-200 ease-in md:static bg-indigo-300 w-full ${open? 'top-7':'top-[-140px]'}`}>
                {
                    routes.map(route => <Nav key={route.id} route={route}/>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;