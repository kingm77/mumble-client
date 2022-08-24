import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link' ;
import { useCookies } from 'react-cookie';
import AuthComponent from './AuthComponent';
import RouteLink from './RouteLink';


export default function NavBar() {
  const [cookies, , removeCookies] = useCookies();
  return (
      <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
    
              <Link
                  variant="h6"
                  color="inherit"
                  noWrap
                  style={{ textDecoration: "none" }}
                  sx={{ flexGrow: 1 }}
              >
                  <RouteLink path="/" name="Mumble" />
              </Link>
              <nav>
                  <Link
                      variant="button"
                      color="text.primary"
                      style={{ textDecoration: "none" }}
                      sx={{ my: 1, mx: 1.5 }}
                  >
                      <RouteLink path="/pricer" name="PRICER" />
                  </Link>
                  <Link
                      variant="button"
                      color="text.primary"
                      style={{ textDecoration: "none" }}
                      sx={{ my: 1, mx: 1.5 }}
                  >
                      <RouteLink path="/myTrades" name="my trades" />
                  </Link>
              </nav>
              {cookies.pSession ? <Button href="/"
                  onClick={() => { removeCookies("pSession", {path: "/"}) }}
                  variant="outlined" sx={{ my: 1, mx: 1.5 }}>Log out</Button> :
                 <AuthComponent />
              }
             
          </Toolbar>
      </AppBar>
  );
}