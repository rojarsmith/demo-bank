// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    uint256 public numOfFunders;
    mapping(address => bool) private funders;

    modifier limitWithdraw(uint256 withdrawAmount) {
        require(
            withdrawAmount <= 100000000000000000,
            "Cannot withdraw more than 0.1 ether"
        );
        _;
    }

    receive() external payable {}

    function addFunds() external payable {
        address funder = msg.sender;

        if (!funders[funder]) {
            numOfFunders++;
            funders[funder] = true;
        }
    }

    function withdraw(uint256 withdrawAmount)
        external
        limitWithdraw(withdrawAmount)
    {
        payable(msg.sender).transfer(withdrawAmount);
    }
}

// const instance = await Faucet.deployed();
// instance.addFunds({from: accounts[0], value: "200000000"})
// instance.addFunds({from: accounts[1], value: "200000000"})
// instance.getFunderAtIndex(0)
// instance.getAllFunders()
