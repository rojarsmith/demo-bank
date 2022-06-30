// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Owned.sol";
import "./Logger.sol";
import "./IFaucet.sol";

contract FaucetContract is Owned, Logger, IFaucet {
    uint256 public numOfFunders;
    mapping(address => bool) private funders;

    modifier limitWithdraw(uint256 withdrawAmount) {
        require(
            withdrawAmount <= 100000000000000000,
            "Cannot withdraw more than 0.1 ether"
        );
        _;
    }

    function emitLog() public pure override returns (bytes32) {
        return "Hello World";
    }

    receive() external payable {}

    function addFunds() external payable override {
        address funder = msg.sender;

        if (!funders[funder]) {
            numOfFunders++;
            funders[funder] = true;
        }
    }

    function test1() external onlyOwner {
        // some managing stuff that only admin should have access to
    }

    function withdraw(uint256 withdrawAmount)
        external
        override
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
