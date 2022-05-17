import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import React, { useState } from "react"
import { ISignUpData } from "../../types/utils.types"
import { initialState } from "../../utils/constants"
import { postData } from "../../utils/httpUtils"
import { SignUpAvatar, SignUpPaper } from "./styles"

const Register = () => {
    const { enqueueSnackbar } = useSnackbar();
    const router = useRouter();

    const [formState, setFormState] = useState<ISignUpData>(initialState);

    const { name, email, password, gender } = formState;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleRegsiterFormSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            await postData(formState, 'http://localhost:3001/api/v1/auth/register');
            enqueueSnackbar("User Registration Successfull. Please Login", {variant: 'success'});
            setFormState(initialState);
            router.push('/');
        } catch(error) {
            enqueueSnackbar("Oops. Something went Wrong.", {variant: 'error'});
        }
    }

    const getButtonDisabledState = (): boolean => (!name || !email || !password || !gender)

    return (
        <Grid>
            <SignUpPaper elevation={20}>
                <Grid direction="column"
                    justifyContent="center"
                    alignItems="center" container>
                    <SignUpAvatar />
                    <h2>Sign Up</h2>

                </Grid>
                <form className="mb-16">
                    <TextField onChange={handleInputChange} value={name} name="name" className="mb-16" fullWidth label='Name' placeholder="Enter your name" />
                    <TextField onChange={handleInputChange} name="email" value={email} className="mb-16" fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl className="mb-16" component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup onChange={handleInputChange} value={gender} name="gender" aria-label="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField onChange={handleInputChange} value={password} name="password" className="mb-16" fullWidth label='Password' type='password' placeholder="Enter your password" />
                    <Button disabled={getButtonDisabledState()} onClick={handleRegsiterFormSubmit} type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </SignUpPaper>
        </Grid>
    )
}

export default Register