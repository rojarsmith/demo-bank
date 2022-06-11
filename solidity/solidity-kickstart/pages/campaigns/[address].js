import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/compaign';
import ContributeForm from '../../components/ContributeForm';
import web3 from '../../ethereum/web3';

export default function show(props) {
    console.log(props);

    const {
        minimumContribution,
        balance,
        requestsCount,
        approversCount,
        manager
    } = props;
    console.log(balance);
    console.log(manager);

    const items = [
        {
            header: manager,
            meta: "Address of Manager",
            description:
                "The manager created this campaign and can create requests to withdraw money",
        },
        {
            header: minimumContribution,
            meta: "Minimum Contribution (wei)",
            description:
                "You must contribute at least this much wei to become an approver",
        },
        {
            header: requestsCount,
            meta: "Number of Requests",
            description:
                "A request tries to withdraw money from the contract. Requests must be approved by approvers",
        },
        {
            header: approversCount,
            meta: "Number of Approvers",
            description:
                "Number of people who have already donated to this campaign",
        },
        {
            header: !!balance ? web3.utils.fromWei(balance, "ether") : undefined,
            meta: "Campaign Balance (ether)",
            description:
                "The balance is how much money this campaign has left to spend.",
        },
    ];

    console.log(items);

    const cards = items.map((item, index) => (
        <Grid item xs={6} key={index}>
            <Card variant="outlined" sx={{ maxWidth: 600 }}>
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
        </Grid>
    ));

    return (
        <Layout>
            <Typography sx={{ overflowWrap: 'break-word', variant: 'h1' }} >
                Campaign Show
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Grid container spacing={12}>
                        {cards}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <ContributeForm address={props.address} />
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
    console.log(`getStaticProps=${params}`);
    // Fetch necessary data
    const campaign = Campaign(params.address);

    const summary = await campaign.methods.getSummary().call();

    console.log(summary);

    return {
        props: {
            address: params.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        }
    }
}