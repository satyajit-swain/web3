// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT721 is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable {
    using Counters for Counters.Counter;

    address public owner;
    mapping (string => bool) public uriExist;

    Counters.Counter public _tokenIdCounter;

    constructor() ERC721("Saken", "SKN") {
        owner = msg.sender;
    }

    function safeMint(address to, string memory uri) public {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        uriExist[uri] = true;

    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        _tokenIdCounter.decrement();
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getTokenURLsOfUser(
        address _user
    ) external view returns (string[] memory) {
        // IERC721 erc721Contract = IERC721(_contractAddress);
        uint256 totalTokens = ERC721.balanceOf(_user);
        string[] memory tokenURLs = new string[](totalTokens);

        for (uint256 i = 0; i < totalTokens; i++) {
            uint256 tokenId = ERC721Enumerable.tokenOfOwnerByIndex(_user, i);
            tokenURLs[i] = getTokenURL(tokenId);
        }

        return tokenURLs;
    }

    function getTokenURL(
        uint256 _tokenId
    ) internal view returns (string memory) {
        return ERC721URIStorage.tokenURI(_tokenId);
    }
}
