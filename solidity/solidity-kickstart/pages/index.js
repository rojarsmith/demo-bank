import factory from '../ethereum/factory';

export default ({campaigns}) => {
    return (
        <>
            <h1>This is the campaign list page!!!</h1>
            {campaigns[0]}
        </>
    );
};

export async function getServerSideProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
    return{
        props:{
            campaigns
        }
    }
}