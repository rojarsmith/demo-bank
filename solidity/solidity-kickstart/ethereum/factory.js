import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xe0010f47a31811b68711D92Fc5D81eAf5d5687e8'
);

export default instance;