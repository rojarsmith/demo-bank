import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0x87b1ce7fbfE4f920e19aBdE8862f73CFFC372eFb'
);

export default instance;