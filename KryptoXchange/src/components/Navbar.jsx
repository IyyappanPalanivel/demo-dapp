import React from 'react';
import vite from '../../public/vite.svg'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

function Navbar() {
  return (
    <nav className='w-full flex md:justify-center items-center p-4'>
      {/* Logo */}
      <div className='md:flex-1 flex-initial'>
        <img src={vite} alt='logo' className='cursor-pointer' />
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className='bg-[#2952e3] px-7 py-2 rounded-full hover:bg-[#2546bd] cursor-pointer'>
          Login
        </li>
      </ul>
    </nav>
  )
}

export default Navbar