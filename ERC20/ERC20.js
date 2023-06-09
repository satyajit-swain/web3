let tokenAddress = "0xCF80e5Bfd9013e96d39b77DaeCAf7Fce8E158531";
let abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokensymbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimal",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_MAXSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenUser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokens",
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
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "senders",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivers",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokens",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "_account",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
];
let web3;
let accounts;
// Check if MetaMask is installed

let contract;

async function contractInfo(accountAddress) {
  contract = new web3.eth.Contract(abi, tokenAddress);
  let sTokenName = await contract.methods.name().call();
  let sSymbol = await contract.methods.symbol().call();
  let nDecimal = await contract.methods.decimals().call();
  let nBalance = await contract.methods.balanceOf(accountAddress).call();
  let tSupply = await contract.methods.totalSupply().call();
  nTotalSupply = web3.utils.fromWei(tSupply, "ether");
  nBalance = web3.utils.fromWei(nBalance, "ether");
 
  $("#tokenname").html(`Token Name: ${sTokenName}`);
  $("#symbol").html(`Token Symbol: ${sSymbol}`);
  $("#decimals").html(`Token Decimals: ${nDecimal}`);
  $("#totalsupply").html(`Total Supply: ${nTotalSupply}`);
  $("#balance").html(`My Balance: ${nBalance}`);
  $("#userAddress").html(`User Address: ${accountAddress}`);
}

async function connect() {
  try {
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else {
      alert("Metamask is not installed, redirecting to metamask page");
      window.location.href = "https://metamask.io/";
    }
    let network = await web3.eth.getChainId();
    if (network !== 11155111) {
      return alert("Please switch to the correct network.");
    }

    contractInfo(accounts[0]);

    alert("Connected to MetaMask");

    $("#connectButton").prop("disabled", true);
  } catch (error) {
    console.log(error);
  }
}

async function mintTokens() {
  if (!accounts) connect();

  try {
    let estGas;
    let amounts = $("#mintAmount").val();
    verifyAmount(amounts);

    let amount = web3.utils.toWei(amounts, "ether");
    try {
      estGas = await contract.methods
        .mint(amount)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      if (error.message.includes("Erc20: Reached")) {
        alert(error.message.slice(20, 45));
        return;
      } else if (error.message.includes("Erc20: Only")){
        alert(error.message.slice(20, 48));
        return;
      }else
      alert(error.message);
    }
    await contract.methods
      .mint(amount)
      .send({ from: accounts[0], gas: estGas });
      alert(`Tokens minted: ${amounts}`)
    console.log("Tokens minted:", amounts);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error minting tokens", error);
  }
}

async function burnTokens() {
  if (!accounts) connect();
  try {
    let estGas;
    let amounts = $("#burnAmount").val();
    verifyAmount(amounts);

    let amount = web3.utils.toWei(amounts, "ether");

    try {
      estGas = await contract.methods
        .burn(amount)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      if (error.message.includes("Erc20: Reached")) {
        alert(error.message.slice(20, 47));
        return;
      } else if (error.message.includes("Erc20: Only")) {
        alert(error.message.slice(20, 48));
        return;
      }else
      alert(error.message);
    }
    await contract.methods
      .burn(amount)
      .send({ from: accounts[0], gas: estGas });
      alert(`Tokens burned: ${amounts}`);
    console.log("Tokens burned:", amounts);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Error burning tokens", error);
  }
}

async function transferTokens() {
  if (!accounts) connect();
  try {
    let estGas;
    let toAddress = $("#toAddress").val();
    if (!web3.utils.isAddress(toAddress)) {
      alert("Please enter a valid address.");
      return;
    }
    let amounts = $("#transferAmount").val();
    verifyAmount(amounts);

    let amount = web3.utils.toWei(amounts, "ether");

    if (accounts[0] === toAddress) {
      alert("Self transfer is not allowed.");
      return;
    }
    try {
      estGas = await contract.methods
        .transfer(toAddress, amount)
        .estimateGas({ from: accounts[0], to: toAddress });
    } catch (error) {
      if (error.message.includes("Erc20")) {
        alert(error.message.slice(20, 34));
        return;
      }
      alert(error.message);
    }
    await contract.methods
      .transfer(toAddress, amount)
      .send({ from: accounts[0], to: toAddress, gas: estGas });
      alert(`Tokens transferred: ${amounts} to: ${toAddress}`);
    console.log("Tokens transferred:", amounts, "to:", toAddress);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
}

async function approves() {
  if (!accounts) connect();
  try {
    let estGas;
    let approvedAddress = $("#approvedAddress").val();
    if (!web3.utils.isAddress(approvedAddress)) {
      alert("Please enter a valid address.");
      return;
    }

    let amounts = $("#approvedAmount").val();
    verifyAmount(amounts);
    let amount = web3.utils.toWei(amounts, "ether");
    try {
      estGas = await contract.methods
        .approve(approvedAddress, amount)
        .estimateGas({ from: accounts[0] });
    } catch (error) {
      if (error.message.includes("Erc20")) {
        alert(error.message.slice(20, 59));
        return;
      }
      alert(error.message);
    }

    await contract.methods
      .approve(approvedAddress, amount)
      .send({ from: accounts[0], gas: estGas });
      alert(`Tokens approved: ${amounts} to: ${approvedAddress}`);
    console.log("Tokens approved:", amounts, "to:", approvedAddress);
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to Approve", error);
  }
}

async function tokenTransferFrom() {
  if (!accounts) connect();
  try {
    let estGas;
    let spenderAddress = $("#spenderAddress").val();
    let recipientAddress = $("#recipientAddress").val();
    if (!web3.utils.isAddress(spenderAddress)) {
      alert("Please enter a valid spender address.");
      return;
    }
    if (!web3.utils.isAddress(recipientAddress)) {
      alert("Please enter a valid recipient address.");
      return;
    }

    let amounts = $("#amountTransfer").val();
    verifyAmount(amounts);
    let amount = web3.utils.toWei(amounts, "ether");
    if (spenderAddress === recipientAddress) {
      alert("Self transfer is not allowed.");
      return;
    }
    if (spenderAddress === accounts[0]) {
      try {
        estGas = await contract.methods
          .transfer(recipientAddress, amount)
          .estimateGas({ from: accounts[0], to: recipientAddress });
      } catch (error) {
        if (error.message.includes("Erc20")) {
          alert(error.message.slice(20, 34));
          return;
        }
        alert(error.message);
      }

      await contract.methods
        .transfer(recipientAddress, amount)
        .send({ from: accounts[0], to: recipientAddress, gas: estGas });
        alert(`Tokens transferred: ${amounts} to: ${recipientAddress}`);
      console.log("Tokens transferred:", amounts, "to:", recipientAddress);
    } else {
      try {
        estGas = await contract.methods
          .transferFrom(spenderAddress, recipientAddress, amount)
          .estimateGas({ from: accounts[0], to: recipientAddress });
      } catch (error) {
        if (error.message.includes("Erc20: Failed")) {
          alert(error.message.slice(20, 34));
          return;
        } 
        else if(error.message.includes("Erc20: Not")){
          alert(error.message.slice(20, 38));
          return;
        }else
        alert(error.message);
      }

      await contract.methods
        .transferFrom(spenderAddress, recipientAddress, amount)
        .send({ from: accounts[0], to: recipientAddress, gas: estGas });
        alert(`transfer successful: ${amounts} from: ${spenderAddress} to: ${recipientAddress}`);
      console.log(
        "transfer successful:",
        amounts,
        "from:",
        spenderAddress,
        "to:",
        recipientAddress
      );
    }
  } catch (error) {
    if (error.message.includes("User denied")) {
      alert("you have denied the transaction");
      return;
    }
    alert(error.message);
    console.error("Failed to transfer", error);
  }
}

async function allowanceCheck() {
  if (!accounts) connect();
  try {
    let tokenOwnerAddress = $("#tokenOwnerAddress").val();
    let approvalAddress = $("#approvalAddress").val();
    if (!web3.utils.isAddress(tokenOwnerAddress)) {
      alert("Please enter a valid spender  address.");
      return;
    }
    if (!web3.utils.isAddress(approvalAddress)) {
      alert("Please enter a valid benificiary address.");
      return;
    }

    let amount = await contract.methods
      .allowance(tokenOwnerAddress, approvalAddress)
      .call();
      alert(`allowance: ${web3.utils.fromWei(amount)} from: ${tokenOwnerAddress} to: ${approvalAddress}`);
    console.log(
      "allowance:",
      web3.utils.fromWei(amount),
      "from:",
      tokenOwnerAddress,
      "to:",
      approvalAddress
    );
  } catch (error) {
    alert(error.message);
    console.error("Failed to fetch allowance.", error);
  }
}

function verifyAmount(amountToVerify) {
  if (isNaN(amountToVerify) || amountToVerify <= 0 || !amountToVerify) {
    alert("Please enter a valid amount.");
    return;
  }
}
