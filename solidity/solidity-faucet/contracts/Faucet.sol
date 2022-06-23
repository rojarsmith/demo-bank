// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Faucet {
    // storage variables
    uint256 public funds = 1000;
    int256 public counter = -10;
    uint32 public test = 4294967295;

    address[] public funders;

    receive() external payable {}

    function addFunds() external payable {
        funders.push(msg.sender);
    }

    function getAllFunders() public view returns (address[] memory) {
        return funders;
    }

    function getFunderAtIndex(uint8 index) external view returns (address) {
        address[] memory _founders = getAllFunders();
        return _founders[index];
    }

    function justTesting() external pure returns (uint256) {
        return 2 + 2;
    }
}
