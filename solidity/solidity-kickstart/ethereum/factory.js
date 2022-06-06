import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    '0xeb24B144819b2AfFB12272917E5207E618b134C0'
);

export default instance;