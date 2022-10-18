// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/*

Library functions can be called directly if they do not modify the state.
That means pure or view functions only can be called from outside the library.

Library can not be destroyed as it is assumed to be stateless.

A Library cannot have state variables.
A Library cannot inherit any element.
A Library cannot be inherited.

*/

library SafeMath {
    // build functions to perform safe math operations that would
    // otherwise replace intuitive preventative measure

    function add(uint256 x, uint256 y) internal pure returns (uint256) {
        uint256 r = x + y;
        require(r >= x, "SafeMath: addition overflow");
        return r;
    }

    function sub(uint256 x, uint256 y) internal pure returns (uint256) {
        require(y <= x, "SafeMath: subtraction overflow");
        uint256 r = x - y;
        return r;
    }

    function mul(uint256 x, uint256 y) internal pure returns (uint256) {
        // gas optimization
        if (x == 0) {
            return 0;
        }

        uint256 r = x * y;
        require(r / x == y, "SafeMath: multiplication overflow");
        return r;
    }

    function divide(uint256 x, uint256 y) internal pure returns (uint256) {
        require(y > 0, "SafeMath: division by zero");
        uint256 r = x / y;
        return r;
    }

    function mod(uint256 x, uint256 y) internal pure returns (uint256) {
        require(y != 0, "Safemath: modulo by zero");
        return x % y;
    }
}
