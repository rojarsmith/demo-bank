import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import web3 from '../ethereum/web3';

export default function RequestRow({ id, request, address }) {
    console.log(id);
    console.log(request);
    console.log(address);

    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell>{request.description}</TableCell>
            <TableCell>{web3.utils.fromWei(request.value, 'ether')}</TableCell>
            <TableCell>{request.recipient}</TableCell>
        </TableRow>
    );
}