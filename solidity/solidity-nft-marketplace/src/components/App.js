import React, { useEffect } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import KryptoCurioz from '../abis/KryptoCurioz.json';

function App() {

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
        loadWeb3()
    }, [])

    return (
        <div>
            <h1>NFT Marketplace</h1>
        </div>
    )
}

export default App;
