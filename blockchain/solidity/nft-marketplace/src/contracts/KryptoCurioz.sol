// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./ERC721Connector.sol";

contract KryptoCurioz is ERC721Connector {
    string[] public kryptoCurioz;

    mapping(string => bool) _kryptoCuriozExists;

    function mint(string memory _kryptoCurioz) public {
        require(
            !_kryptoCuriozExists[_kryptoCurioz],
            "Error - kryptoCurioz already exists"
        );

        // .push no longer returns the length but a ref to the added element
        kryptoCurioz.push(_kryptoCurioz);
        uint256 _id = kryptoCurioz.length - 1;

        _mint(msg.sender, _id);

        _kryptoCuriozExists[_kryptoCurioz] = true;
    }

    constructor() ERC721Connector("KryptoCurioz", "KCURIOZ") {}
}
