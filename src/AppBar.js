import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import logo from "./amazon-logo.jpg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness3Icon from '@material-ui/icons/Brightness3';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow:1,
    },
  }));
  



function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
    const classes = useStyles();
    // const[mode,setmode] = useState("light");
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
       <div className={classes.root}>
       <AppBar>
       <Toolbar>
        
         <div className={classes.title}>
           <img src={logo} width="50px" alt="Logo"/>
           </div>
          <Button color="inherit" href="#Amazon Consultant">Home</Button>
            <Button color="inherit" href="#About">About</Button>
            <Button color="inherit" href="#Services">Services</Button>
            <Button color="inherit" href="#PPC Audit">Audit</Button>
            <Button color="inherit" href="#Optimization">Optimization</Button>
            <Button color="inherit" href="#Contact Us">Contact</Button>
            {/* <IconButton>
            <Brightness3Icon onClick={setmode(!mode)}/>
            </IconButton> */}
          </Toolbar>
      </AppBar>
        
       </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}







