import { Button, Grid, TextField, Typography } from '@mui/material';
import { LoginAvatar, LoginPaper } from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from 'next/link';

const Login = () => {
  return (
    <Grid>
      <LoginPaper elevation={10}>
        <Grid direction="column"
          justifyContent="center"
          alignItems="center" container>
          <LoginAvatar><LockOutlinedIcon /></LoginAvatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField className='mb-16' id="outlined-basic" label="Username" placeholder='Enter Username' variant="outlined" fullWidth required />
        <TextField className='mb-16' id="outlined-basic" label="Password" type="password" placeholder='Enter Password' variant="outlined" fullWidth required />
        <Button className='mb-16' variant="contained" size="large" fullWidth>Sign In</Button>
        <Typography>
          Are you not registered yet..?
          <Link href='/register'>
            &nbsp;Sign Up
          </Link>
        </Typography>
      </LoginPaper>
    </Grid>
  )
}

export default Login