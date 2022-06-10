import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/compaign';

export default function show(props) {
    console.log(props);

    const {
        minimumContribution,
        balance,
        requestsCount,
        approversCount,
        manager
    } = props;

    const items = [
        {
            header: manager,
            meta: 'Address of Manager',
            description: 'The manager created this campaign and can create requests to withdraw money',
        }
    ];
    console.log(items);

    const cards = items.map((item, index) => (
        <Card variant="outlined" key={index}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ overflowWrap: 'break-word', variant: 'h2', fontWeight: 600 }} >
                        {item.header}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: 'blue' }} >
                        {item.meta}
                    </Typography>
                    <Typography sx={{ fontSize: 12 }} >
                        {item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    ));

    return (
        <Layout>
            <Typography sx={{ overflowWrap: 'break-word', variant: 'h1' }} >
                Campaign Show
            </Typography>
            <Grid container justifyContent="flex-end">
                <Grid item xs={4}>
                    {cards}
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        </Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = [];

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    console.log(params);
    // Fetch necessary data
    const campaign = Campaign(params.address);

    const summary = await campaign.methods.getSummary().call();

    console.log(summary);

    return {
        props: {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        }
    }
}