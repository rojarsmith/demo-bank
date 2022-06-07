import factory from '../ethereum/factory';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default ({ campaigns }) => {
    const cards = campaigns.map((id) =>
    (<Card variant="outlined" key={id}>
        <CardContent>
            <Typography sx={{ fontSize: 18 }} >
                {id}
            </Typography>
            <Typography sx={{ fontSize: 18 }} >
                <Link href="#">View Campaign</Link>
            </Typography>
        </CardContent>
    </Card>));

    return (
        <>
            {cards}
        </>
    );
};

export async function getServerSideProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(Object.isExtensible(campaigns));
    let campaignsMock = Object.assign([], campaigns);
    campaignsMock.push("0xA2A100ac89ce6ce8102E4a8B12a208A8877dFFAA");
    console.log(campaignsMock);
    return {
        props: {
            campaigns: campaignsMock
        }
    }
}