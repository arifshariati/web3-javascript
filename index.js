// dotenv config to read from .env file
require('dotenv').config();
const mainnet_infura = process.env.MAINNET_INFURA;
const ropsten_infura = process.env.ROPSTEN_INFURA;
const project_secret = process.env.PROJECT_SECRET;

// const Tx = require('ethereumjs-tx');

const Web3 = require("web3");

const web3 = new Web3(mainnet_infura);

// contract taken from etherscan
const account = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

const privateKey = Buffer.from(project_secret, 'hex');
// average gas price 
const getAvgGasPrice = async () => {
    return await web3.eth.getGasPrice().then((result) => web3.utils.fromWei(result, 'ether'));
};

// get hash
const getHash = async () => {
    return await web3.utils.sha3('web3-javascript');
}

// get account balance
const getBalance = async (address) => {
    const balance = await web3.eth.getBalance(address, (err, bal) => bal );
    return await web3.utils.fromWei(balance,'ether')
};

// create Account 
const createAccount = () => {
    return web3.eth.accounts.create();
} 

(
    async () => {
        const avgGasPrice = await getAvgGasPrice();
        const myHash = await getHash();
        const accountBalance = await getBalance(account);

        // const accountCreated = createAccount();
        // console.log({accountCreated});

        console.log({ avgGasPrice, myHash, accountBalance });
    }
)();
