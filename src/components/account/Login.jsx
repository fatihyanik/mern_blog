import {Box, TextField, Button, styled} from "@mui/material";

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0, 0, 0, 0.6)
`;



const Login = () => {
    const imageURL = "https://st2.depositphotos.com/1026266/10131/i/450/depositphotos_101315294-stock-photo-unknown-suspect-standing-in-the.jpg"
  return (
    <Component>
        <img src={imageURL} alt="login" />
        <TextField variant="standard"/>
        <TextField variant="standard"/>
        <Button variant="contained">Login</Button>
        <Button>Create an account</Button>
    </Component>
  )
}

export default Login