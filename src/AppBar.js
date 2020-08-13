import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
// import logo from "./amazon-logo.jpg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
// import Brightness6Icon from '@material-ui/icons/Brightness6';
// import Brightness3Icon from '@material-ui/icons/Brightness3';
import Switch from '@material-ui/core/Switch';
import { Tooltip, Typography, Menu, MenuItem } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: theme.spacing(0),
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


export default function HideAppBar({set,darkmode},props) {
    const classes = useStyles();
    // const[mode,setmode] = useState("light");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
       <div className={classes.root}>
       <AppBar style={{width:"100%"}}>
       <Toolbar>
       <IconButton>
           <MenuIcon id="simple-menu"  aria-haspopup="true" onClick={handleClick} className={classes.menuButton,"Icon"} style={{color:"white"}} edge="start" color="inherit"/>
         </IconButton>
         <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem style={{backgroundColor:"rgb(46, 60, 243)"}} onClick={handleClose}><Button  style={{color:"white"}} href="#Amazon Consultant">Home</Button></MenuItem>
  <MenuItem style={{backgroundColor:"rgb(46, 60, 243)"}} onClick={handleClose}><Button  style={{color:"white"}} href="#About">About</Button></MenuItem>
  <MenuItem style={{backgroundColor:"rgb(46, 60, 243)"}} onClick={handleClose}><Button  style={{color:"white"}} href="#Services">Services</Button></MenuItem>
  <MenuItem style={{backgroundColor:"rgb(46, 60, 243)"}} onClick={handleClose}><Button  style={{color:"white"}} href="#PPC Audit">Audit</Button></MenuItem>
  <MenuItem style={{backgroundColor:"rgb(46, 60, 243)"}} onClick={handleClose}><Button  style={{color:"white"}} href="#Optimization">Optimization</Button></MenuItem>
  <MenuItem style={{backgroundColor:"rgb(46, 60, 243)"}} onClick={handleClose}><Button  style={{color:"white"}} href="#Contact Us">Contact</Button></MenuItem>
</Menu>

        <Typography variant="h6" className={classes.title}>
          AMAZON CONSULTANT
        </Typography>
         
           <span className="BarButton">
            <Button  color="inherit" href="#Amazon Consultant">Home</Button>
            <Button  color="inherit" href="#About">About</Button>
            <Button  color="inherit" href="#Services">Services</Button>
            <Button  color="inherit" href="#PPC Audit">Audit</Button>
            <Button  color="inherit" href="#Optimization">Optimization</Button>
            <Button  color="inherit" href="#Contact Us">Contact</Button>
            </span>
            
            <Tooltip title='Toggle Dark/Light Theme'>  
          <Switch
        checked={darkmode}
        onChange={()=>set(!darkmode)}
        
      /></Tooltip>
          
          
          </Toolbar>
      </AppBar>
        
       </div>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}







