// BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules
// import Web3 from "web3";
import Web3 from "web3/dist/web3.min.js";

const web3 = new Web3(window.web3.currentProvider);

export default web3;