// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyToken is ERC1155 {
    address public owner;

    //id => uri
    mapping(uint256 => string) public tokenUri;

    //uri exists
    mapping(string => bool) public uriExist;

    //id => totalTokenMinted
    mapping(uint256 => uint256) public idAmounts;

    //address => token id owned
    mapping(address => uint256[]) public userNFT;

    constructor() ERC1155("") {
        owner = msg.sender;
    }

    function setURI(string memory newuri) public {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        string memory uri,
        bytes memory data
    ) public {
        checkUri(id, uri);

        _mint(account, id, amount, data);

        mintDone(account, id, amount, uri);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        string[] memory uri,
        bytes memory data
    ) public {
        for (uint256 i = 0; i < ids.length; i++) {
            checkUri(ids[i], uri[i]);
        }
        _mintBatch(to, ids, amounts, data);
        for (uint256 i = 0; i < ids.length; i++) {
            tokenUri[ids[i]] = uri[i];
            uriExist[uri[i]] = true;
            idAmounts[ids[i]] = amounts[i];

            if (userNFT[to].length == 0) {
                userNFT[to].push(ids[i]);
            } else {
                bool exists;
                for (uint256 j = 0; j < userNFT[to].length; j++) {
                    if (userNFT[to][j] == ids[i]) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    userNFT[to].push(ids[i]);
                }
            }
        }
    }

    function burn(
        address account,
        uint256 id,
        uint256 amount
    ) public virtual {
        require(
            account == _msgSender() || isApprovedForAll(account, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );

        _burn(account, id, amount);
        burnDone(account, id, amount);
    }

    function burnBatch(
        address account,
        uint256[] memory ids,
        uint256[] memory values
    ) public virtual {
        require(
            account == _msgSender() || isApprovedForAll(account, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );

        _burnBatch(account, ids, values);
        for (uint256 i = 0; i < ids.length; i++) {
            burnDone(account, ids[i], values[i]); 
        }
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual override {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );
        bool newId;
        if (balanceOf(to, id) == 0) {
            newId = true;
        }
        _safeTransferFrom(from, to, id, amount, data);

        safeTransferDone(from, to, id, newId);
    }

    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual override {
        require(
            from == _msgSender() || isApprovedForAll(from, _msgSender()),
            "ERC1155: caller is not token owner or approved"
        );
        bool[] memory newId = new bool[](ids.length);
        for (uint256 i = 0; i < ids.length; i++) {
            if (balanceOf(to, ids[i]) == 0) {
                newId[i] = true;
            }
        }
        _safeBatchTransferFrom(from, to, ids, amounts, data);
        for (uint256 i = 0; i < ids.length; i++) {
            safeTransferDone(from, to, ids[i], newId[i]);
        }
    }

    function getTokenURLsOfUser(address user)
        public
        view
        returns (string[] memory)
    {
        // uint256 userIds = userNFT[user];
        string[] memory IdUrls = new string[](userNFT[user].length);
        for (uint256 i = 0; i < userNFT[user].length; i++) {
            IdUrls[i] = tokenUri[userNFT[user][i]];
        }
        return IdUrls;
    }

    function mintDone(
        address account,
        uint256 id,
        uint256 amount,
        string memory uri
    ) private {
        tokenUri[id] = uri;
        uriExist[uri] = true;
        idAmounts[id] += amount;

        if (userNFT[account].length == 0) {
            userNFT[account].push(id);
        } else {
            bool exists;
            for (uint256 i = 0; i < userNFT[account].length; i++) {
                if (userNFT[account][i] == id) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                userNFT[account].push(id);
            }
        }
    }

    function burnDone(
        address account,
        uint256 id,
        uint256 amount
    ) private {
        idAmounts[id] -= amount;
        if (balanceOf(account, id) == 0) {
            deleteElement(account, id);
        }
        if (idAmounts[id] == 0) {
            string memory uri = tokenUri[id];
            uriExist[uri] = false;
            delete tokenUri[id];
        }
    }

    function safeTransferDone(
        address from,
        address to,
        uint256 id,
        bool newId
    ) private {
        if (balanceOf(from, id) == 0) {
            deleteElement(from, id);
        }
        if (newId) {
            userNFT[to].push(id);
        }
    }

    function deleteElement(address from, uint256 id) private {
        for (uint256 i = 0; i < userNFT[from].length; i++) {
            if (userNFT[from][i] == id) {
                // Swap the element to be deleted with the last element
                userNFT[from][i] = userNFT[from][userNFT[from].length - 1];

                // Remove the last element
                userNFT[from].pop();

                // Exit the loop
                break;
            }
        }
    }

    function checkUri(uint256 id, string memory uri) private view {
        if (
            keccak256(abi.encodePacked((tokenUri[id]))) !=
            keccak256(abi.encodePacked((uri)))
        ) {
            require(!uriExist[uri], "ERC1155: This uri is already exists");
        }
    }

    function getUserIds(address account)
        external
        view
        returns (uint256[] memory)
    {
        return userNFT[account];
    }
}
