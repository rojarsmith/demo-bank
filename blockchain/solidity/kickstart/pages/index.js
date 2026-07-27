import NextLink from 'next/link'
import { useRouter } from 'next/router'
import factory from '../ethereum/factory';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Layout from '../components/Layout';

export default ({ campaigns }) => {
    const router = useRouter();

    const cards = campaigns.map((id) =>
    (<Card variant="outlined" key={id} sx={{mb: 2}}>
        <CardContent>
            <Typography sx={{ fontSize: 18 }} >
                {id}
            </Typography>
            <Link>
                <NextLink href={`/campaigns/${id}`}>
                    <Typography sx={{ fontSize: 18 }} >
                        View Campaign
                    </Typography>
                </NextLink>
            </Link>
        </CardContent>
    </Card>));

    return (
        <Layout>
            <div>
                <Typography variant="h3" component="div" sx={{ mb: 4 }}>
                    Open Campaigns
                </Typography>
                <Grid container justifyContent="flex-end">
                    <Grid item xs={8}>
                        {cards}
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={3}>
                        <NextLink href='/campaigns/new' passHref>
                            <Button variant="contained" startIcon={<AddCircleOutlineOutlinedIcon />} sx={{
                                bgcolor: '#FAFAFA',
                                color: '#000000',
                                raisedPrimary: {
                                    color: '#FFFFFF',
                                },
                                '&:hover': {
                                    backgroundColor: '#F0F0F0',
                                    color: '#000000',
                                }
                            }}>
                                Create Campaign
                            </Button>
                        </NextLink>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    );
};

export async function getServerSideProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(Object.isExtensible(campaigns));
    let campaignsMock = Object.assign([], campaigns);
    campaignsMock.push("0xA2A100ac89ce6ce8102E4a8B12a208A8877dFFAA");
    console.log(campaigns);
    return {
        props: {
            // campaigns: campaignsMock
            campaigns: campaigns
        }
    }
}