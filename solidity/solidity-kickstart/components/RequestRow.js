import LoadingButton from '@mui/lab/LoadingButton';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/compaign';

export default function RequestRow({ id, request, address, approversCount }) {
    // console.log(id);
    // console.log(request);
    // console.log(address);

    const onApprove = async (event) => {
        const compaign = Campaign(address);

        const accounts = await web3.eth.getAccounts();
        await compaign.methods.approveRequest(id)
            .send({
                from: accounts[0]
            });
    }

    const onFinalize = async (event) => {
        const compaign = Campaign(address);

        const accounts = await web3.eth.getAccounts();
        await compaign.methods.finalizeRequest(id)
            .send({
                from: accounts[0]
            });
    }

    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
        <TableRow sx={readyToFinalize && !request.complete ? { background: "MidnightBlue" } : { background: "snow" }}>
            <TableCell sx={request.complete ? { color: "silver" } : { color: "black" }}>{id + 1}</TableCell>
            <TableCell sx={request.complete ? { color: "silver" } : { color: "black" }}>{request.description}</TableCell>
            <TableCell sx={request.complete ? { color: "silver" } : { color: "black" }}>{web3.utils.fromWei(request.value, 'ether')}</TableCell>
            <TableCell sx={request.complete ? { color: "silver" } : { color: "black" }}>{request.recipient}</TableCell>
            <TableCell sx={request.complete ? { color: "silver" } : { color: "black" }}>{request.approvalCount}/{approversCount}</TableCell>
            <TableCell>
                {request.complete ? null : (
                    <LoadingButton
                        // loading={loading}
                        variant="outlined"
                        sx={{ color: "green" }}
                        onClick={onApprove}
                    >
                        Approve
                    </LoadingButton>
                )}
            </TableCell>
            <TableCell>
                {request.complete ? null : (
                    <LoadingButton
                        // loading={loading}
                        variant="outlined"
                        sx={{ color: "teal" }}
                        onClick={onFinalize}
                    >
                        Finalize
                    </LoadingButton>
                )}
            </TableCell>
        </TableRow>
    );
}