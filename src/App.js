import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './frontend/components/Navbar';
import Home from './frontend/screens/Home';
import { useState } from 'react';
import { ethers } from 'ethers';
import { Spinner } from 'react-bootstrap';
import DemoAddress from './frontend/contractsData/Demo-address.json'
import DemoAbi from './frontend/contractsData/Demo.json'

function App() {

  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [democontract, setDemocontract] = useState(null);

  //MetaMask Login/Connect 
  const web3Handler = async () => {

    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0])
      // Get provider from Metamask
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // Set signer
      const signer = provider.getSigner()

      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      })

      window.ethereum.on('accountsChanged', async function (accounts) {
        setAccount(accounts[0])
        await web3Handler()
      })
      loadContracts(signer)
    } else {
      alert('Install MetaMask Wallet')
    }
  }

  const loadContracts = (signer) => {
    // Get deployed copies of contracts
    const demo = new ethers.Contract(DemoAddress.address, DemoAbi.abi, signer)
    setDemocontract(demo)
    setLoading(false)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation web3Handler={web3Handler} account={account} />
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Spinner animation="border" style={{ display: 'flex' }} />
            <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={
              <Home demo={democontract}/>
            } />
            
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
