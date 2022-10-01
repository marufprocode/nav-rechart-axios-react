import React from 'react';

const Nav = ({route}) => {
    return (
            <li className='mx-3'>
                <a href={route.path}>{route.name}</a>
            </li>
    );
};

export default Nav;