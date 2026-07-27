// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./SafeMath.sol";

/**
 * @title Counters
 * @dev Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number
 * of elements in a mapping, issuing ERC721 ids, or counting request ids.
 *
 * Include with `using Counters for Counters.Counter;`
 */

library Counters {
    using SafeMath for uint256;

    // build your own variable type with the keyword 'struct'

    struct Counter {
        uint256 _value;
    }

    // we want to find the current value of a count
    function current(Counter storage counter) internal view returns (uint256) {
        return counter._value;
    }

    function increment(Counter storage counter) internal {
        counter._value += 1;
    }

    function decrement(Counter storage counter) internal {
        counter._value = counter._value.sub(1);
    }
}
