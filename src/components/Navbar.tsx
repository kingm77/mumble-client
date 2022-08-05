import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { useCookies } from 'react-cookie';
import AuthComponent from './AuthComponent';

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
                  href="/"
                  noWrap
                  style={{ textDecoration: "none" }}
                  sx={{ flexGrow: 1 }}
              >
                  Mumble
              </Link>
              <nav>
                  <Link
                      variant="button"
                      color="text.primary"
                      href="/pricer"
                      sx={{ my: 1, mx: 1.5 }}
                  >
                      Pricer
                  </Link>
                  <Link
                      variant="button"
                      color="text.primary"
                      href="/myTrades"
                      sx={{ my: 1, mx: 1.5 }}
                  >
                      My Trades
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