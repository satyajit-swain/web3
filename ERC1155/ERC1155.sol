// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract ERC1155Token is ERC1155, ERC1155Burnable {
    address public owner;

    constructor() ERC1155("image") {
        owner = msg.sender;
    }

    function setURI(string memory newuri) public {
        _setURI(newuri);
    }

    function mint(
        address to,
        uint256 id,
        uint256 amount
    ) public {
        require(amount>0, "ERC1155: Amount cannot be negative");
        _mint(to, id, amount, "");
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts
    ) public {
        for (uint256 i = 0; i < amounts.length; i++) {
            
            require(amounts[i]>0, "ERC1155: Amount cannot be zero");
        }
        _mintBatch(to, ids, amounts, "");
    }
}
