import React, { useEffect, useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
// import KryptoCurioz from '../abis/KryptoCurioz.json';

function App() {
    const [pageData, setPageData] = useState({
        account: ''
    })

    useEffect(() => {
        // first up is to detect ethereum provider
        const loadWeb3 = async () => {
            const provider = await detectEthereumProvider()

            if (provider) {
                console.log('ethereum wallet is connected')
                const chainId = await provider.request({
                    method: 'eth_chainId'
                })
                console.log(chainId)
            } else {
                console.log('no ethereum wallet detected')
            }
        }

        const loadBlockchainData = async () => {
            const web3 = window.ethereum
            const accounts = await web3.request({ method: 'eth_requestAccounts' });
            setPageData({
                ...pageData,
                account: accounts
            })
        }

        loadWeb3()
        loadBlockchainData()
    }, [])

    return (
        <div>
            <h1>NFT Marketplace</h1>
            <p>{pageData.account}</p>
        </div>
    )
}

export default App;
