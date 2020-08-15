import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid } from '@material-ui/core';
import cl1 from "./cl1.jpg";
import stars from "./5star.png";
import cl2 from "./cl2.jpg";
import cl3 from "./cl3.jpg";
import cl4 from "./cl4.jpg";
import ShowMore from "react-show-more";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({darkmode}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (<div style={{margin:"0px 20px"}}>
      <Grid container spacing={6} >
<Grid item xs={12} md={3}>
<Card className={classes.root}>
      <CardContent>
        <Avatar src={cl1} alt="Client1" style={{display:"flex",margin:"0px auto"}}></Avatar>
        <Typography style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} variant="h5" component="h2">
          Alex Chertkov
        </Typography>
        <img src={stars} alt="Stars" style={{width:"100px",display:"flex",margin:"0px auto"}}></img>
        <Typography variant="body2" component="p" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}}>
        <ShowMore lines={3} more='Show more' less='Show less' anchorClass=''>
        If you are looking Higher sales and lower ACOS, Zayn is the right person to work with.
        </ShowMore> 
          
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12}  md={3}>
          <Card className={classes.root}>
      <CardContent>
        <Avatar src={cl2} alt="Client2" style={{display:"flex",margin:"0px auto"}}></Avatar>
        <Typography variant="h5" component="h2" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}}>
          Desislave Taylor
        </Typography>
        <img src={stars} alt="Stars" style={{width:"100px",display:"flex",margin:"0px auto"}}></img>
        <Typography variant="body2" component="p" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}}>
        <ShowMore lines={3} more='Show more' less='Show less' anchorClass=''>
         Very Knowledgeable and Helpful.Would definitely Recomended Zayn Faraz for PPC and Audit.</ShowMore>
        </Typography>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Card className={classes.root}>
      <CardContent>
        <Avatar src={cl3} alt="Client3" style={{display:"flex",margin:"0px auto"}}></Avatar>
        <Typography variant="h5" component="h2" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}}>
          Molly Tino
        </Typography>
        <img src={stars} alt="Stars" style={{width:"100px",display:"flex",margin:"0px auto"}}></img>
        <Typography variant="body2" component="p">
        <ShowMore lines={3} more='Show more' less='Show less' anchorClass='' style={darkmode ? {color:"white"}:{color:"blue"}}>
         Thankyou Zayn for taking care of my PPC.He take care of your PPC such that it get lower B4 using him I used to do my own PPC and my ACOS use to be very High over 70% and always had a negitive balance in my account but with my ACOS is down to 15% and I have had increase in my sales.If you are looking for a PPC manager Zayn is the best Option.
        </ShowMore></Typography>
      </CardContent>
    </Card>   
         </Grid>
         <Grid item xs={12} md={3}>
          <Card className={classes.root}>
      <CardContent>
        <Avatar src={cl4} alt="Client4" style={{display:"flex",margin:"0px auto"}}></Avatar>
        <Typography variant="h5" component="h2" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}}>
          Ernst Etienne
        </Typography>
        <img src={stars} alt="Stars" style={{width:"100px",display:"flex",margin:"0px auto"}}></img>
        <Typography variant="body2" component="p" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}}>
        <ShowMore lines={3} more='Show more' less='Show less' anchorClass=''>
        If you are Amazon store owner you should contact Zayn.Thankyou Zayn for work on my Amazon store very happy with the results.
        </ShowMore></Typography>
      </CardContent>
    </Card>   
         </Grid>
         </Grid>
    
         </div>
  );
}




