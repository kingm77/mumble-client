import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

export default function NavBar() {
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
              <Button href="/signIn" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  Sign in
              </Button>
              <Button href="/signUp" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                  Sign up
              </Button>
          </Toolbar>
      </AppBar>
  );
}