import React, { useEffect, useRef, useState } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import KryptoCurioz from '../abis/KryptoCurioz.json';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import './App.css';

function App() {
    const [pageData, setPageData] = useState({
        account: '',
        totalSupply: 0,
        KryptoCurioz: []
    })
    const [web3, setWeb3] = useState()
    const [contract, setContract] = useState()
    const inputKryptoCurio = useRef('')

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
                account: accounts[0]
            })

            const networkId = await web3.eth.net.getId()
            const networkData = KryptoCurioz.networks[networkId]
            if (networkData) {
                const contractobj = new web3.eth.Contract(KryptoCurioz.abi, networkData.address);
                console.log(contractobj)
                setContract(contractobj)
            } else {
                window.alert('Smart contract not deployed')
            }
        }

        if (web3) {
            loadBlockchainData()
        }
    }, [web3])


    useEffect(() => {
        const loadBlockchainData = async () => {
            // call the total supply of the KryptoCurioz
            const totalSupply = await contract.methods.totalSupply().call()
            console.log('totalSupply=' + totalSupply.toNumber())
            setPageData({
                ...pageData,
                totalSupply: totalSupply.toNumber()
            })
            // set up an array to keep track of tokens
            let kryptoCurioArray = []
            for (let i = 0; i < totalSupply; i++) {
                const KryptoCurio = await contract.methods.kryptoCurioz(i).call()
                console.log('KryptoCurio=' + KryptoCurio)
                kryptoCurioArray.push(KryptoCurio)
            }
            console.log(kryptoCurioArray)
            setPageData({
                ...pageData,
                KryptoCurioz: [...pageData.KryptoCurioz, ...kryptoCurioArray]
            })

            console.log('pageData=' + JSON.stringify(pageData))
        }

        if (contract) {
            loadBlockchainData()
        }
    }, [contract])

    // with minting we are sending information and we need to specify the account
    const mint = async (KryptoCurio) => {
        await contract.methods.mint(KryptoCurio).send({ from: pageData.account }).once('receipt', (receipt) => {
            console.log('receipt')
            setPageData({
                ...pageData,
                KryptoCurioz: [...pageData.KryptoCurioz, KryptoCurio]
            })
        })
    }

    return (
        <div className='container-filled'>
            {console.log(pageData.KryptoCurioz)}
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
            <div className='container-fluid mt-1'>
                <div className='row'>
                    <main role='main' className='col-lg-12 d-flex text-center'>
                        <div className='content mr-auto ml-auto' style={{ opacity: '0.8' }}>
                            <h1 style={{ color: 'black' }}>KryptoCurioz - NFT Marketplace</h1>
                            <form onSubmit={(event) => {
                                event.preventDefault()
                                const kryptoCurio = inputKryptoCurio
                                console.log(kryptoCurio.current.value)
                                mint(kryptoCurio.current.value)
                            }}>
                                <input type='text' placeholder='Add a file location' className='form-control mb-1'
                                    ref={inputKryptoCurio} />
                                <input style={{ margin: '6px' }} type='submit' className='btn btn-primary btn-black'
                                    value='MINT' />
                            </form>
                            <p>TotalSupply: {pageData.totalSupply}</p>
                        </div>
                    </main>
                </div>
                <hr></hr>
                <div className='row textCenter'>
                    {pageData.KryptoCurioz ?
                        pageData.KryptoCurioz.map((kryptoCurio, key) => {
                            return (
                                <div key={key}>
                                    <div>
                                        <MDBCard className='token img' style={{ maxWidth: '22rem' }}>
                                            <MDBCardImage src={kryptoCurio} position='top' height='250rem' style={{ marginRight: '4px' }} />
                                            <MDBCardBody>
                                                <MDBCardTitle>KryptoCurioz - {kryptoCurio}</MDBCardTitle>
                                                <MDBCardText>The KryptoCurioz are N uniquely generated KCurioz !</MDBCardText>
                                                <MDBBtn href={kryptoCurio}>Download</MDBBtn>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </div>
                                </div>
                            )
                        })
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
