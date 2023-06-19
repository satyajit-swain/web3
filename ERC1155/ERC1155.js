let tokenAddress = "0xC4bf3E5DFA75b9a7e6992812F82B2F5F97E5d828";
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
        name: "account",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintBatch",
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
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
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
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];
let web3;
let account;
const networkId = 11155111;
// Check if MetaMask is installed

let contract;

async function contractInfo(accountAddress) {
  contract = new web3.eth.Contract(abi, tokenAddress);

  let sContractOwner = await contract.methods.owner().call();
  let uri = await contract.methods.uri(1).call();

  $("#contractOwner").html(`Contract Owner: ${sContractOwner}`);
  $("#uri").html(`URI: ${uri}`);
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

    // if (network !== chainId) {
    //   alert("Please switch to the sepolia network");
    //   let newChainId = "0x" + chainId.toString(16);
    //   await window.ethereum.request({
    //     method: "wallet_switchEthereumChain",
    //     params: [{ chainId: newChainId }],
    //   });
    //   alert("Account switched to the sepolia network");
    // }
    if (network !== networkId) {
      alert("Please switch to the sepolia network");
      try {
        await web3.currentProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: web3.utils.toHex(networkId) }],
        });
        alert("Account switched to the sepolia network");
      } catch (error) {
        console.error("Network switch fail",error.message);
      }
    }
    contractInfo(account);

    alert("Connected to MetaMask");

    $("#connectButton").prop("disabled", true);
  } catch (error) {
    console.log(error);
  }
}

async function mintTokens() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
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
    let id = $("#tokenid").val();
    if (!verifyid(id)) {
      $("#mintButton").prop("disabled", false);
      return;
    }

    let amount = $("#mintAmount").val();
    if (amount === 0) {
      $("#mintButton").prop("disabled", false);
      alert("Amount cannot be zero");
      return;
    }
    if (!verifyid(amount)) {
      $("#mintButton").prop("disabled", false);
      return;
    }

    try {
      estGas = await contract.methods
        .mint(toAddress, id, amount, "0x00000000")
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
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
      
    }
    await contract.methods
      .mint(toAddress, id, amount, "0x00000000")
      .send({ from: account, gas: estGas });
    alert(`Token minted to: ${toAddress} token Id: ${id} amount: ${amount}`);
    console.log(
      "Token minted to: ",
      toAddress,
      " token Id: ",
      id,
      " amount: ",
      amount
    );
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

async function mintBatchTokens() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#mintBatchButton").prop("disabled", true);

  try {
    let estGas;

    let toAddress = $("#tokenToB").val();
    if (!web3.utils.isAddress(toAddress)) {
      alert("Please enter a valid address.");
      $("#mintBatchButton").prop("disabled", false);
      return;
    }
    let id = $("#tokenidB").val();
    if (!verifyInput(id)) {
      $("#mintBatchButton").prop("disabled", false);
      return;
    }
    let ids = id.split(",").map(Number);
    let amount = $("#mintAmountB").val();
    if (!verifyAmount(amount)) {
      $("#mintBatchButton").prop("disabled", false);
      return;
    }
    let amounts = amount.split(",").map(Number);

    try {
      estGas = await contract.methods
        .mintBatch(toAddress, ids, amounts, "0x00")
        .estimateGas({ from: account });
    } catch (error) {
      $("#mintBatchButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    await contract.methods
      .mintBatch(toAddress, ids, amounts, "0x00")
      .send({ from: account, gas: estGas });
    alert(`Token minted to: ${toAddress} token Id: ${id} amount: ${amount}`);
    console.log(
      "Token minted to: ",
      toAddress,
      " token Id: ",
      id,
      " amount: ",
      amount
    );
    $("#mintBatchButton").prop("disabled", false);
    contractInfo(account);
  } catch (error) {
    $("#mintBatchButton").prop("disabled", false);
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error minting token", error);
  }
}

async function burnTokens() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#burnButton").prop("disabled", true);
  try {
    let estGas;
    let fromAddress = $("#tokenFrom").val();
    if (!web3.utils.isAddress(fromAddress)) {
      alert("Please enter a valid address.");
      $("#burnButton").prop("disabled", false);

      return;
    }
    let id = $("#burnid").val();
    if (!verifyid(id)) {
      $("#burnButton").prop("disabled", false);

      return;
    }

    let amount = $("#burnAmount").val();
    if (amount === 0) {
      $("#burnButton").prop("disabled", false);
      alert("Amount cannot be zero");
      return;
    }
    if (!verifyid(amount)) {
      $("#burnButton").prop("disabled", false);

      return;
    }
    try {
      estGas = await contract.methods
        .burn(fromAddress, id, amount)
        .estimateGas({ from: account });
    } catch (error) {
      $("#burnButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    await contract.methods
      .burn(fromAddress, id, amount)
      .send({ from: account, gas: estGas });
    alert(`Token id burned: ${id} from: ${fromAddress} amount: ${amount}`);
    console.log(
      "Token id burned:",
      id,
      "amount:",
      amount,
      "from:",
      fromAddress
    );
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
async function burnBatchTokens() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#burnBatchButton").prop("disabled", true);

  try {
    let estGas;
    let fromAddress = $("#tokenFromB").val();
    if (!web3.utils.isAddress(fromAddress)) {
      alert("Please enter a valid address.");
      $("#burnBatchButton").prop("disabled", false);

      return;
    }
    let id = $("#burnidB").val();
    if (!verifyInput(id)) {
      $("#burnBatchButton").prop("disabled", false);
      return;
    }
    let ids = id.split(",").map(Number);

    let amount = $("#burnAmountB").val();
    if (!verifyAmount(amount)) {
      $("#burnBatchButton").prop("disabled", false);
      return;
    }
    let amounts = amount.split(",").map(Number);
    try {
      estGas = await contract.methods
        .burnBatch(fromAddress, ids, amounts)
        .estimateGas({ from: account });
    } catch (error) {
      $("#burnBatchButton").prop("disabled", false);

      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }
    await contract.methods
      .burnBatch(fromAddress, ids, amounts)
      .send({ from: account, gas: estGas });
    alert(`Token id burned: ${id} from: ${fromAddress} amount: ${amount}`);
    console.log(
      "Token id burned:",
      id,
      "amount:",
      amount,
      "from:",
      fromAddress
    );
    $("#burnBatchButton").prop("disabled", false);

    contractInfo(account);
  } catch (error) {
    $("#burnBatchButton").prop("disabled", false);
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error burning token", error);
  }
}

async function checkBalance() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#balButton").prop("disabled", true);
  try {
    let fromAddress = $("#addressBal").val();
    if (!web3.utils.isAddress(fromAddress)) {
      alert("Please enter a valid address.");
      $("#balButton").prop("disabled", false);

      return;
    }
    let id = $("#tokensIdBal").val();
    if (!verifyid(id)) {
      $("#balButton").prop("disabled", false);

      return;
    }
    let tokenBalance = await contract.methods.balanceOf(fromAddress, id).call();
    alert(
      `Token balance of ${fromAddress} of token id ${id} is ${tokenBalance}`
    );
    console.log(
      "Token balance of :",
      fromAddress,
      "of token id ",
      id,
      "is ",
      tokenBalance
    );
    $("#balButton").prop("disabled", false);
  } catch (error) {
    $("#balButton").prop("disabled", false);
    let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    console.error("Failed to fetch owner.", error);
  }
}

async function approvesForAll() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#approveButton").prop("disabled", true);
  try {
    let estGas;
    let approvedAddress = $("#approvedAddressForAll").val();
    if (!web3.utils.isAddress(approvedAddress)) {
      alert("Please enter a valid address.");
      $("#approveButton").prop("disabled", false);

      return;
    }

    let approveS = $("input[name=myInput]:checked").val();
    let approveSign = approveS === "true" ? true : false;

    try {
      estGas = await contract.methods
        .setApprovalForAll(approvedAddress, approveSign)
        .estimateGas({ from: account });
    } catch (error) {
      $("#approveButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
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
    }
    $("#approveButton").prop("disabled", false);
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

async function allowanceCheckForAll() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#allowButton").prop("disabled", true);
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

async function safeTokenTransferFrom() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
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

    let id = $("#idToSTransfer").val();
    if (!verifyid(id)) {
      $("#safeButton").prop("disabled", false);

      return;
    }
    let amount = $("#amountToTransfer").val();
    if (amount === 0) {
      $("#safeButton").prop("disabled", false);
      alert("Amount cannot be zero");
    }
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
        .safeTransferFrom(spenderAddress, recipientAddress, id, amount, "0x00")
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
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }

    await contract.methods
      .safeTransferFrom(spenderAddress, recipientAddress, id, amount, "0x00")
      .send({ from: account, to: recipientAddress, gas: estGas });
    alert(
      `Transfer successful of token id: ${id} from: ${spenderAddress} to: ${recipientAddress} amount: ${amount}`
    );
    console.log(
      "Transfer successful of token id:",
      id,
      "from:",
      spenderAddress,
      "to:",
      recipientAddress,
      "amount:",
      amount
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

async function safeBatchTransfer() {
  let network = await web3.eth.getChainId();
  if (!account) connect();
  if (network !== networkId) {
    alert("Please switch to the sepolia network");
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: web3.utils.toHex(networkId) }],
      });
      alert("Account switched to the sepolia network");
    } catch (error) {
      console.error("Network switch fail",error.message);
    }
  }
  $("#safeBatchButton").prop("disabled", true);
  try {
    let estGas;
    let spenderAddress = $("#spendersAddressB").val();
    let recipientAddress = $("#recipientsAddressB").val();
    if (!web3.utils.isAddress(spenderAddress)) {
      alert("Please enter a valid spender address.");
      $("#safeBatchButton").prop("disabled", false);

      return;
    }
    if (!web3.utils.isAddress(recipientAddress)) {
      alert("Please enter a valid recipient address.");
      $("#safeBatchButton").prop("disabled", false);

      return;
    }

    let id = $("#idToBTransfer").val();
    if (!verifyInput(id)) {
      $("#safeBatchButton").prop("disabled", false);
      return;
    }
    let ids = id.split(",").map(Number);

    let amount = $("#amountToBTransfer").val();
    
    if (!verifyAmount(amount)) {
      $("#safeBatchButton").prop("disabled", false);
      return;
    }
    let amounts = amount.split(",").map(Number);
    if (spenderAddress === recipientAddress) {
      alert("Self transfer is not allowed.");
      $("#safeBatchButton").prop("disabled", false);

      return;
    }
    try {
      estGas = await contract.methods
        .safeBatchTransferFrom(
          spenderAddress,
          recipientAddress,
          ids,
          amounts,
          "0x00"
        )
        .estimateGas({ from: account, to: recipientAddress });
    } catch (error) {
      $("#safeBatchButton").prop("disabled", false);
      let oErrorJSON = JSON.parse(
        error.message.substr(
          error.message.indexOf("{"),
          error.message.lastIndexOf("}")
        )
      );
      let oError = oErrorJSON.originalError.message;
      if (error.message.includes("ERC1155")) {
        alert(oError.slice(20));
        return;
      } else alert(error.message);
    }

    await contract.methods
      .safeBatchTransferFrom(
        spenderAddress,
        recipientAddress,
        ids,
        amounts,
        "0x00"
      )
      .send({ from: account, to: recipientAddress, gas: estGas });
    alert(
      `Transfer successful of token id: ${id} from: ${spenderAddress} to: ${recipientAddress} amount: ${amount}`
    );
    console.log(
      "Transfer successful of token id:",
      id,
      "from:",
      spenderAddress,
      "to:",
      recipientAddress,
      "amount:",
      amount
    );
    $("#safeBatchButton").prop("disabled", false);

    contractInfo(account);
  } catch (error) {
    $("#safeBatchButton").prop("disabled", false);

    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
  $("#safeBatchButton").prop("disabled", false);
}

function verifyid(idToVerify) {
  if (isNaN(idToVerify) || !idToVerify) {
    alert("Please enter a valid input.");
    return false;
  } else {
    return true;
  }
}

function verifyInput(input) {
  if (!input) {
    alert("Please enter a valid input.");
    return false;
  }
  // input = input.toString();
  input = input.trim();
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i]) && input[i] != ",") {
      alert("invalid input");
      return false;
    }
  }

  return true;
}
function verifyAmount(input) {
  let inputs = input.split(",").map(Number);
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i]<=0) {
      alert("invalid input");
      return false;
    }
  }
  
  if (!input) {
    alert("Please enter a valid input.");
    return false;
  }
  input = input.trim();
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i]) && input[i] != ",") {
      alert("invalid input");
      return false;
    }
    
  }

  return true;
}
