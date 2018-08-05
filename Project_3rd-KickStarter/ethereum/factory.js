import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x4a9451d99c426e6174D8Dd65F7015a5467fE9246'    
);

export default instance;