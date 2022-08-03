import { Button } from "@mui/material";


function AuthComponent() {
    return (
        <div>
            <Button href="/signIn" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                          Sign in
            </Button>
            <Button href="/signUp" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                Sign up
            </Button>
        </div>
);
}

export default AuthComponent;