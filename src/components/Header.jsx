import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import { Tooltip } from '@mui/material';
function Header() {
    const projectInfo = "Build a new CV or improve your existing one with step-by-step expert guidance."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://www.pngrepo.com/download/262734/curriculum-vitae-resume.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" alt="" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <Link to={'/'} className='text-light text-decoration-none' >rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">About Us</Button>
          </Tooltip>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
