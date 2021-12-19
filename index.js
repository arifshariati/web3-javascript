// dotenv config to read from .env file
require('dotenv').config();
const mainnet_infura = process.env.MAINNET_INFURA;

const Web3 = require("web3");

const web3 = new Web3(mainnet_infura);

// average gas price 
const getAvgGasPrice = async () => {
    return await web3.eth.getGasPrice().then((result) => web3.utils.fromWei(result, 'ether'));
};

// get hash
const getHash = async () => {
    return await web3.utils.sha3('web3-javascript');
}


(
    async () => {
        const avgGasPrice = await getAvgGasPrice();
        const myHash = await getHash();


        console.log({ avgGasPrice, myHash });
    }
)();
