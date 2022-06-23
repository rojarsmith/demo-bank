// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Test {
    function test(uint256 testNum) external pure returns (uint256 data) {
        assembly {
            let _num := 4
            let _fmp := mload(0x40)
            mstore(0x40, 0x90)
        }

        return testNum;

        uint8[3] memory items = [1, 2, 3];

        assembly {
            data := mload(add(0x90, 0x20))
        }
    }
}
