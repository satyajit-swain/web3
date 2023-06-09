// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface Token {
    function balanceOf(address _account) external view returns (uint256);

    function transfer(address _to, uint256 _tokens) external returns (bool);

    function approve(address _from, uint256 _tokens) external returns (bool);

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokens
    ) external returns (bool);

    function allowance(address _owner, address _from)
        external
        view
        returns (uint256);

    function mint(uint256 _tokens) external;

    function burn(uint256 _tokens) external;
}

contract Erc20 is Token {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    uint256 private MAXSupply;

    address private owner;

    mapping(address => uint256) private balances;
    mapping(address => mapping(address => uint256)) private tokenAllowance;

    event Transfer(address senders, address receivers, uint256 amount);
    event Approval(address owner, address tokenUser, uint256 amount);

    constructor(
        string memory _tokenName,
        string memory _tokensymbol,
        uint8 _decimal,
        uint256 _MAXSupply
    ) {
        owner = msg.sender;
        name = _tokenName;
        symbol = _tokensymbol;
        decimals = _decimal;
        MAXSupply = _MAXSupply;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Erc20: Only Owner can access");
        _;
    }

    function balanceOf(address _account) external view returns (uint256) {
        return balances[_account];
    }

    function transfer(address _to, uint256 _tokens) public returns (bool) {
        require(balances[msg.sender] >= _tokens, "Erc20: Failed!");
        balances[msg.sender] -= _tokens;
        balances[_to] += _tokens;
        emit Transfer(msg.sender, _to, _tokens);
        return true;
    }

    function approve(address _from, uint256 _tokens) external returns (bool) {
        require(
            balances[msg.sender] >= _tokens,
            "Erc20: insuficient balance for approval"
        );

        tokenAllowance[msg.sender][_from] = _tokens;
        emit Approval(msg.sender, _from, _tokens);

        return true;
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _tokens
    ) external returns (bool) {
        require(
            tokenAllowance[_from][msg.sender] >= _tokens,
            "Erc20: Not Allowed"
        );
        require(
            balances[_from] > 0 && balances[_from] >= _tokens,
            "Erc20: Failed!"
        );
        balances[_from] -= _tokens;
        balances[_to] += _tokens;
        tokenAllowance[_from][msg.sender] -= _tokens;
        emit Transfer(_from, _to, _tokens);
        return true;
    }

    function allowance(address _owner, address _spender)
        external
        view
        returns (uint256)
    {
        return tokenAllowance[_owner][_spender];
    }

    function mint(uint256 _tokens) public onlyOwner {
        require(
            _tokens <= MAXSupply - totalSupply && _tokens > 0,
            "Erc20: Reached MAX supply"
        );

        totalSupply += _tokens;
        balances[owner] += _tokens;
        balances[address(this)] += _tokens;
        emit Transfer(address(0), owner, _tokens);
    }

    function burn(uint256 _tokens) external onlyOwner {
        require(
            _tokens <= totalSupply && _tokens > 0,
            "Erc20: Reached total supply"
        );
        totalSupply -= _tokens;
        balances[owner] -= _tokens;
        balances[address(this)] -= _tokens;

        emit Transfer(owner, address(0), _tokens);
    }
}
