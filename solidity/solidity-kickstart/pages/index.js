import { useState, useEffect } from 'react';
import factory from '../ethereum/factory';

export default () => {
    const [campaigns, setCampaigns] = useState();

    useEffect(() => {
        const fetchCampaigns = async () => {
            const data = await factory.methods.getDeployedCampaigns().call();
            console.log(data);
            setCampaigns(data);
        }

        fetchCampaigns().catch(console.error);
    }, []);

    return (
        <>
            <h1>This is the campaign list page!!!</h1>
            {campaigns}
        </>
    );
};