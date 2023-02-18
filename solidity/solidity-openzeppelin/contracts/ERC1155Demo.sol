// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";

contract ERC1155Demo is ERC1155PresetMinterPauser {
    uint256 public constant CAPTAIN_AMERICA = 0;
    uint256 public constant THOR = 1; // NFT
    uint256 public constant IRON_MAN = 2;
    uint256 public constant SPIDER_MAN = 3;

    constructor()
        // OpenSea
        ERC1155PresetMinterPauser("https://demo.com/api/nft/demo/{id}.json")
    {
        _mint(msg.sender, CAPTAIN_AMERICA, 10**18, "");
        _mint(msg.sender, THOR, 1, "");
        _mint(msg.sender, IRON_MAN, 5, "");
        _mint(msg.sender, SPIDER_MAN, 10, "");
    }
}
