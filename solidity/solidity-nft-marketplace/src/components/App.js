import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import KryptoCurioz from '../abis/KryptoCurioz.json';

function App() {
    const [pageData, setPageData] = useState({
        account: ''
    })
    const [web3, setWeb3] = useState();

    useEffect(() => {
        // first up is to detect ethereum provider
        const loadWeb3 = async () => {
            const provider = await detectEthereumProvider()

            if (provider) {
                if (window.ethereum) {
                    let web3obj = new Web3(window.ethereum)
                    setWeb3(web3obj)
                    console.log('ethereum wallet is connected')
                }
            } else {
                console.log('no ethereum wallet detected')
            }
        }
        loadWeb3()
    }, [])

    useEffect(() => {
        console.log(web3)
        console.log('useEffect[web3]')
        const loadBlockchainData = async () => {
            const accounts = await web3.eth.getAccounts()
            setPageData({
                ...pageData,
                account: accounts
            })

            const networkId = await web3.eth.net.getId()
            const networkData = KryptoCurioz.networks[networkId]
            if (networkData) {
                const contract = new web3.eth.Contract(KryptoCurioz.abi, networkData.address);
                console.log(contract)
            }
        }

        if (web3) {
            loadBlockchainData()
        }
    }, [web3])

    return (
        <div>
            <nav className='navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow'>
                <div className='navbar-brand col-sm-3 col-md-3 mr-0' style={{ color: 'white' }}>
                    KryptoCurioz NFTs (Non Fungible Tokens)
                </div>
                <ul className='navbar-nav px-3'>
                    <li className='nav-item text-nowrap d-none d-sm-none d-sm-block'>
                        <small className='text-white'>
                            {pageData.account}
                        </small>
                    </li>
                </ul>
            </nav>
            <h1>NFT Marketplace</h1>
        </div>
    )
}

export default App;
