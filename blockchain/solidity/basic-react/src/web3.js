// BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules
// import Web3 from "web3";
import Web3 from "web3/dist/web3.min.js";

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
}

export default web3;