// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract CryptoToken {
    mapping(address => uint) public balances;

    event Sent(address from, address to, uint amount);

    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);

        balances[receiver] += amount;
    }

    address public minter;

    constructor() {
        minter = msg.sender;
    }

    function send(address receiver, uint amount) public {
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        emit Sent(msg.sender, receiver, amount);
    }
}
