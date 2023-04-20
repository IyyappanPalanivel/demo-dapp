import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";

function Welcome() {

  const connectWallet = () => {
    if (window.ethereum) {
      // Do something 
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(res => {
          // Return the address of the wallet
          console.log(res[0])
        })
    } else {
      alert("Install Metamask Wallet Extension!!")
    }
  }

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
        {/* Send Crypto Section */}
        <div className='flex flex-1 justify-start items-start flex-col mf:mr-10'>
          <h1 className='text-3xl  text-white text-gradient'>
            Send Crypto <br /> across the World
          </h1>
          <p className='text-white text-left mt-6 font-light md:w-9/12 w-11/12'>
            Explore the crypto world. Buy and Sell cryptocurrencies easily on Krypto
          </p>
        </div>

        {/* Connect Wallet */}
        <button
          type='button'
          onClick={connectWallet}
          className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">
            Connect Wallet
          </p>
        </button>

        {/* Grid */}
        <div class="grid grid-cols-3">
          <div className='border border-white text-white items-center justify-center p-4 rounded-tl-2xl'>Reliability</div>
          <div className='border border-white text-white items-center justify-center p-4'> Security</div>
          <div className='border border-white text-white items-center justify-center p-4 rounded-tr-2xl'>Ethereum</div>
          <div className='border border-white text-white items-center justify-center p-4 rounded-bl-2xl'>Web 3.0</div>
          <div className='border border-white text-white items-center justify-center p-4'>Low Fees</div>
          <div className='border border-white text-white items-center justify-center p-4 rounded-br-2xl'>Blockchain</div>
        </div>
      </div>
    </div>
  )
}

export default Welcome