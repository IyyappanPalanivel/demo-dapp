import React from 'react';
import vite from '../../public/vite.svg'


function Navbar() {
  return (
    <nav className='w-full flex md:justify-center items-center p-4'>
      {/* Logo */}
      <div className='md:flex-1 flex-initial'>
        <img src={vite} alt='logo' className='cursor-pointer' />
      </div>
      <ul className='text-white md:flex'>
        <li>Market</li>
        <li>Exchange</li>
        <li>Tutorials</li>
        <li>Wallets</li>
      </ul>
    </nav>
  )
}

export default Navbar