let tokenAddress = "0xC319900e53fA3A6B1D1EcA16Cf531108c4a209c6";
let abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_tokenIdCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getTokenURLsOfUser",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "uriExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
let web3;
let account;
const chainId = 11155111;
// Check if MetaMask is installed

let contract;

async function contractInfo(accountAddress) {
  contract = new web3.eth.Contract(abi, tokenAddress);
  let sTokenName = await contract.methods.name().call();
  let sSymbol = await contract.methods.symbol().call();
  let sContractOwner = await contract.methods.owner().call();
  let nTokenSupply = await contract.methods._tokenIdCounter().call();
  let nBalance = await contract.methods.balanceOf(accountAddress).call();

  $("#tokenName").html(`Token Name: ${sTokenName}`);
  $("#symbol").html(`Token Symbol: ${sSymbol}`);
  $("#contractOwner").html(`Contract Owner: ${sContractOwner}`);
  $("#totalSupply").html(`Total Supply: ${nTokenSupply}`);
  $("#balance").html(`My Balance: ${nBalance}`);
  $("#userAddress").html(`User Address: ${accountAddress}`);
}

async function connect() {
  try {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      let accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
    } else {
      alert("Metamask is not installed, redirecting to metamask page");
      window.location.href = "https://metamask.io/";
    }

    web3.eth.currentProvider.on("accountsChanged", function (accounts) {
      if (accounts.length === 0) {
        location.reload();
      } else {
        account = accounts[0];
        $("#userAddress").text("User Address: " + account);
      }
    });
    let network = await web3.eth.getChainId();
    if (network !== chainId) {
      alert("Please switch to the sepolia network");
      let newChainId = "0x" + chainId.toString(16);
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: newChainId }],
      });
      alert("Account switched to the sepolia network");
    }

    contractInfo(account);

    alert("Connected to MetaMask");

    $("#connectButton").prop("disabled", true);
  } catch (error) {
    console.log(error);
  }
}

async function mintTokens() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#mintButton").prop("disabled", true);

  try {
    let estGas;

    let toAddress = $("#tokenTo").val();
    if (!web3.utils.isAddress(toAddress)) {
      alert("Please enter a valid address.");
      $("#mintButton").prop("disabled", false);

      return;
    }
    let uris = $("#tokenUri").val();
    if (!validateURI(uris)) {
      $("#mintButton").prop("disabled", false);
      return;
    }
    if (!(await checkURI(uris))) {
      $("#mintButton").prop("disabled", false);
      return;
    }

    try {
      estGas = await contract.methods
        .safeMint(toAddress, uris)
        .estimateGas({ from: account });
    } catch (error) {
      $("#mintButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    let tokenId = await contract.methods._tokenIdCounter().call();
    await contract.methods
      .safeMint(toAddress, uris)
      .send({ from: account, gas: estGas });
    alert(`Token minted to: ${toAddress} token Id: ${tokenId}`);
    console.log("Token minted to: ", toAddress, " token Id: ", tokenId);
    $("#mintButton").prop("disabled", false);
    contractInfo(account);
  } catch (error) {
    $("#mintButton").prop("disabled", false);

    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);

    console.error("Error minting token", error);
  }
}

async function burnTokens() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#burnButton").prop("disabled", true);
  try {
    let estGas;
    let id = $("#burnid").val();
    if (!verifyid(id)) {
      $("#burnButton").prop("disabled", false);

      return;
    }
    try {
      estGas = await contract.methods.burn(id).estimateGas({ from: account });
    } catch (error) {
      $("#burnButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    await contract.methods.burn(id).send({ from: account, gas: estGas });
    alert(`Token id burned: ${id}`);
    console.log("Token id burned:", id);
    $("#burnButton").prop("disabled", false);

    contractInfo(account);
  } catch (error) {
    $("#burnButton").prop("disabled", false);

    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error burning token", error);
  }
}

async function checkOwner() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#ownerButton").prop("disabled", true);

  try {
    let id = $("#tokensId").val();
    if (!verifyid(id)) {
      $("#ownerButton").prop("disabled", false);

      return;
    }
    let tokenOwner = await contract.methods.ownerOf(id).call();
    alert(`Token Owner of id :${id} is ${tokenOwner}`);
    console.log("Token Owner of id :", id, "is ", tokenOwner);
    $("#ownerButton").prop("disabled", false);
    contractInfo(account);
  } catch (error) {
    $("#ownerButton").prop("disabled", false);

    if (error.message.includes("ERC721: invalid")) {
      alert("This token is not minted yet.");
      return;
    } else alert(error.message);

    console.error("Failed to fetch owner.", error);
  }
}

async function approves() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#approveButton").prop("disabled", true);

  try {
    let estGas;
    let approvedAddress = $("#approvedAddress").val();
    if (!web3.utils.isAddress(approvedAddress)) {
      alert("Please enter a valid address.");
      $("#approveButton").prop("disabled", false);

      return;
    }

    let id = $("#approvedId").val();
    if (!verifyid(id)) {
      $("#approveButton").prop("disabled", false);

      return;
    }
    try {
      estGas = await contract.methods
        .approve(approvedAddress, id)
        .estimateGas({ from: account });
    } catch (error) {
      $("#approveButton").prop("disabled", true);

      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }

    await contract.methods
      .approve(approvedAddress, id)
      .send({ from: account, gas: estGas });
    alert(`Approval successful of token id: ${id} to: ${approvedAddress}`);
    console.log(
      "Approval successful of token id: ",
      id,
      "to: ",
      approvedAddress
    );
    $("#approveButton").prop("disabled", false);
    contractInfo(account);
  } catch (error) {
    $("#approveButton").prop("disabled", false);
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to Approve", error);
  }
}

async function allowanceCheck() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#allowButton").prop("disabled", true);

  try {
    let tokenApprovedId = $("#tokenApprovedId").val();
    if (!verifyid(tokenApprovedId)) {
      $("#allowButton").prop("disabled", false);

      return;
    }
    let approvalAddress = await contract.methods
      .getApproved(tokenApprovedId)
      .call();
    alert(`Allowance to: ${approvalAddress}`);
    console.log("Allowance to:", approvalAddress);
    $("#allowButton").prop("disabled", false);
  } catch (error) {
    $("#allowButton").prop("disabled", false);

    if (error.message.includes("ERC721: invalid")) {
      alert("This token is not minted yet.");
      return;
    } else alert(error.message);

    console.error("Failed to fetch allowance.", error);
  }
}

async function approvesForAll() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#approveAllButton").prop("disabled", true);
  try {
    let estGas;
    let approvedAddress = $("#approvedAddressForAll").val();
    if (!web3.utils.isAddress(approvedAddress)) {
      alert("Please enter a valid address.");
      $("#approveAllButton").prop("disabled", false);
      return;
    }

    let approveS = $("input[name=myInput]:checked").val();
    let approveSign = approveS === "true" ? true : false;
    try {
      estGas = await contract.methods
        .setApprovalForAll(approvedAddress, approveSign)
        .estimateGas({ from: account });
    } catch (error) {
      $("#approveAllButton").prop("disabled", false);

      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }

    await contract.methods
      .setApprovalForAll(approvedAddress, approveSign)
      .send({ from: account, gas: estGas });
    if (approveSign == true) {
      alert(`Approval successful to: ${approvedAddress}`);
      console.log("Approval successful to: ", approvedAddress);
    } else {
      alert(`Approval removed from: ${approvedAddress}`);
      console.log("Approval removed from: ", approvedAddress);
      $("#approveAllButton").prop("disabled", false);
    }
  } catch (error) {
    $("#approveAllButton").prop("disabled", false);

    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to Approve", error);
  }
}

async function allowanceCheckForAll() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#allowAllButton").prop("disabled", true);

  try {
    let tokenOwnerAddress = $("#tokenOwnerAddress").val();
    let approvalAddress = $("#approvalAddress").val();
    if (!web3.utils.isAddress(tokenOwnerAddress)) {
      alert("Please enter a valid token owner address.");
      $("#allowButton").prop("disabled", false);

      return;
    }
    if (!web3.utils.isAddress(approvalAddress)) {
      alert("Please enter a valid benificiary address.");
      $("#allowButton").prop("disabled", false);

      return;
    }

    let allowanceSign = await contract.methods
      .isApprovedForAll(tokenOwnerAddress, approvalAddress)
      .call();
    if (allowanceSign == true) {
      alert(` ${approvalAddress}  is allowed From: ${tokenOwnerAddress}`);
      console.log(approvalAddress, " is allowed From: ", tokenOwnerAddress);
    } else {
      alert(` ${approvalAddress}  is not allowed From: ${tokenOwnerAddress}`);
      console.log(approvalAddress, " is not allowed From: ", tokenOwnerAddress);
    }
    $("#allowButton").prop("disabled", false);
  } catch (error) {
    $("#allowButton").prop("disabled", false);

    alert(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}

async function tokenTransferFrom() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#transferButton").prop("disabled", true);
  try {
    let estGas;
    let spenderAddress = $("#spenderAddress").val();
    let recipientAddress = $("#recipientAddress").val();
    if (!web3.utils.isAddress(spenderAddress)) {
      alert("Please enter a valid spender address.");
      $("#transferButton").prop("disabled", false);
      return;
    }
    if (!web3.utils.isAddress(recipientAddress)) {
      alert("Please enter a valid recipient address.");
      $("#transferButton").prop("disabled", false);
      return;
    }

    let id = $("#tokenIdToTransfer").val();
    if (!verifyid(id)) {
      $("#transferButton").prop("disabled", false);

      return;
    }
    if (spenderAddress === recipientAddress) {
      alert("Self transfer is not allowed.");
      $("#transferButton").prop("disabled", false);

      return;
    }
    try {
      estGas = await contract.methods
        .transferFrom(spenderAddress, recipientAddress, id)
        .estimateGas({ from: account, to: recipientAddress });
    } catch (error) {
      $("#transferButton").prop("disabled", false);

      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }

    await contract.methods
      .transferFrom(spenderAddress, recipientAddress, id)
      .send({ from: account, to: recipientAddress, gas: estGas });
    alert(
      `Transfer successful of token id: ${id} from: ${spenderAddress} to: ${recipientAddress}`
    );
    console.log(
      "Transfer successful of token id:",
      id,
      "from:",
      spenderAddress,
      "to:",
      recipientAddress
    );
    $("#transferButton").prop("disabled", false);
    contractInfo(account);
  } catch (error) {
    $("#transferButton").prop("disabled", false);

    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
}

async function safeTokenTransferFrom() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#safeButton").prop("disabled", true);
  try {
    let estGas;
    let spenderAddress = $("#spendersAddress").val();
    let recipientAddress = $("#recipientsAddress").val();
    if (!web3.utils.isAddress(spenderAddress)) {
      alert("Please enter a valid spender address.");
      $("#safeButton").prop("disabled", false);
      return;
    }
    if (!web3.utils.isAddress(recipientAddress)) {
      alert("Please enter a valid recipient address.");
      $("#safeButton").prop("disabled", false);
      return;
    }

    let id = $("#tokenIdToSTransfer").val();
    if (!verifyid(id)) {
      $("#safeButton").prop("disabled", false);
      return;
    }

    if (spenderAddress === recipientAddress) {
      alert("Self transfer is not allowed.");
      $("#safeButton").prop("disabled", false);
      return;
    }
    try {
      estGas = await contract.methods
        .safeTransferFrom(spenderAddress, recipientAddress, id)
        .estimateGas({ from: account, to: recipientAddress });
    } catch (error) {
      $("#safeButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC721")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }

    await contract.methods
      .safeTransferFrom(spenderAddress, recipientAddress, id)
      .send({ from: account, to: recipientAddress, gas: estGas });
    alert(
      `Transfer successful of token id: ${id} from: ${spenderAddress} to: ${recipientAddress}`
    );
    console.log(
      "transfer successful of token id:",
      id,
      "from:",
      spenderAddress,
      "to:",
      recipientAddress
    );
    $("#safeButton").prop("disabled", false);
    contractInfo(account);
  } catch (error) {
    $("#safeButton").prop("disabled", false);

    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
}

function verifyid(idToVerify) {
  if (isNaN(idToVerify) || !idToVerify) {
    alert("Please enter a valid id.");
    return false;
  } else {
    return true;
  }
}

function validateURI(uri) {
  try {
    new URL(uri);
    return true;
  } catch (error) {
    alert("Please enter a valid URI");
    return false;
  }
}

async function checkURI(_tokenURI) {
  let uri = await contract.methods.uriExist(_tokenURI).call();
  if (uri === true) {
    alert("This uri is already exits");
    return false;
  }
  return true;
}

async function showNft() {
  if (!account) connect();
  let network = await web3.eth.getChainId();
  if (network !== chainId) {
    alert("Please switch to the sepolia network");
    let newChainId = "0x" + chainId.toString(16);
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: newChainId }],
    });
    alert("Account switched to the sepolia network");
  }
  $("#imageContainer").empty();

  try {
    let uris;

    try {
      uris = await contract.methods.getTokenURLsOfUser(account).call();
    } catch (error) {
      // $("#nftShow").prop("disabled", false);
      $("#imageContainer").hide();
      console.error("Error retrieving token URI:", error.message);
      return;
    }
    if (uris.length === 0) {
      // $("#nftShow").prop("disabled", false);
      $("#imageContainer").hide();
      alert("You don't have any NFT");
    }

    window.ethereum.on("accountsChanged", function (account) {
      $("#imageContainer").empty();
      // $("#nftShow").prop("disabled", false);

      // connect();
    });
    for (let uriCount = 0; uriCount < uris.length; uriCount++) {
      let jsonUri
      let tokenId = await contract.methods
        .tokenOfOwnerByIndex(account, uriCount)
        .call();
      let imgUri = await fetch(uris[uriCount]);
      try {
        jsonUri = await imgUri.json();
      } catch (error) {
        alert("Error showing token, Please check the uri of token id "+tokenId);
        console.log("Error in uri of token ",tokenId," ",error.message);
        continue;
      }
      let newCard = $("#imageContainer");

      newCard.append(
        `<div id=${uriCount} class="card"">
      <img src="${jsonUri.image}" class="card-img-top" alt="...">
      <div class="card-body" >
        <h5 class="card-title">NFT-ID: ${tokenId}</h5>
        <h5 class="card-title">${jsonUri.name}</h5>
        <p class="card-text">${jsonUri.description}</p>
      </div>
    </div>`
      );
    }
  } catch (error) {
    alert("You don't have any NFT");
    $("#imageContainer").hide();
    // $("#nftShow").prop("disabled", false);
    console.error(error.message);
  }
}
