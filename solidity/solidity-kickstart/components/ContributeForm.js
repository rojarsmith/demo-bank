import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';

export default () => {
    return (
        <>
            <Typography
                variant="h5"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
                Contrubute
            </Typography>
            <Box component="form">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="coin"
                    label="Amount to Contrubute"
                    name="coin"
                    autoFocus
                    InputProps={{
                        endAdornment: <InputAdornment position="start">wei</InputAdornment>,
                    }}
                />
                {/* <Collapse in={!!errormessage}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {errormessage}
                    </Alert>
                </Collapse> */}
                <LoadingButton
                    type="submit"
                    // loading={loading}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Contribute!
                </LoadingButton>
            </Box>
        </>
    );
}