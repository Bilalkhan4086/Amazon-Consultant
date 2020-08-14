import React, { useState } from 'react';
import "./App.css";
// import pic from "./Aboutpic.png";
import fb from "./facebook.png";
import phone from "./phone.png";
import mail from "./email.png";
import HideAppBar from "./AppBar.js";
import { Button } from '@material-ui/core';
import contact from "./contact.svg";
import opt from "./Audit1.svg";
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";
// import LightSpeed from 'react-reveal/LightSpeed';
import Swing from 'react-reveal/Swing';
import Flip from 'react-reveal/Flip';
import Audit from "./Audit1.svg";
import Sec from "./services.svg";
// import { AppBar } from '@material-ui/core';
import ad from "./_audit_.svg";
import ab from "./about.svg"
import sv from "./svs2.svg"
// git
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";




function App(){
const [darkmode,setdarkmode] = useState(false);
    

//##########
const theme = createMuiTheme({
    palette: {
      type: darkmode ? "dark" : "light",
      primary: {
        main: "#000",
      },
      secondary: {
        main: "#f44336",
        light: '#0066ff',
        contrastText: '#000AAA',
        button:"blue"
    },
    },
  });
// ###########
return(

<div className="main">
      <HideAppBar  set={setdarkmode} darkmode={darkmode}/>       
      <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="Dheading SHeading">
    <div>  <h1 className="Heading"><a href="/#" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} name="Amazon Consultant">Looking for a Amazon Consultant for you startup</a></h1>
    <br/><br/>
    <h3 className="SubTitle">You are at the right place</h3>
  
      <Button className="Button" variant="contained" style={{backgroundColor:"rgb(46, 60, 243)",color:"white",marginLeft:"3%"}} href="https://www.facebook.com/zayn.faraz.9/" ><span className="BFS">Hire Now</span></Button>
      <Button className="Button" style={{border:"2px solid red",color:"red",marginLeft:"3%"}} href="#Contact Us" ><span className="BFS">Contact Now</span></Button> 
      </div>
      <Swing>
<img className="HImg" src={Audit} alt="Audit"/> 
</Swing><br/>
     </div>

     
    <div className="innerdetails">
    <h2><a href="/#" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} name="About">About</a>
</h2>
<div className="About">
<div className="AContent">
<Fade left>
<p className="AP">Welcome to our Website, All amazing people selling on amazon. we have a team of experienced and talented digital marketing individuals and we provide effective and efficient services for your amazon business to grow and reach its maximum potential at very reasonable service charges(as we don’t believe in charging extra like others and want to give you value for your money like all our satisfied clients) .if you are struggling with high ACOS and low sales, we are here to effectively manage your ppc and optimize your listing to improve your sales significantly.Contact US for Free audit of Your PPC and Listing.
</p>
<Zoom>
<img className="Gays" src={ab} alt="Here are two gays for About page"/>
</Zoom>
</Fade></div></div>


<div className="Services">
<h2><a href="/#"  style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} name="Services">Services</a></h2>
<div className="Servicediv">
<div className="SeContent">
<Zoom>
    <img className="ServiceImg" src={Sec} alt="Logo"/>
    </Zoom><br/>
    <Zoom>
    <img className="ServiceImg2" src={sv} alt="Logo"/>
    </Zoom>
    </div>

<div className="PContent">
<Fade right>
<h3 style={{fontWeight:"bold",fontSize:"30px"}}>Amazon PPC Campaign Setup and Management</h3>
<p>We are a veteran team of Amazon Seller Central and Advertising Experts. we are bringing our Consulting Services to You.<br/>
If you have a new product, A product with high Acos and Low Sales , or   just looking to increase your sales. We are here to help you get the most out of your product and campaigns.As we setup and optimize your ppc in such a way that your spend decreases overnight with your ad exposure staying the same.As we believe spending ppc budget strictly on relevant traffic (clicks from customers searching for product that you offer) and eliminating the irrelevant clicks to reduce the spend. 
</p>
<h3 style={{fontWeight:"bold",fontSize:"22px"}}>Our services includes</h3>
<ul>
    <li>Audit of past ppc performance filtering expensive and converting keywords</li>
    <li>Creation of a new ad campaign (including keyword research of top competitors)</li>
    <li>implementation of the ad campaign</li>
    <li>weekly campaign management and optimization report to clients</li>
    <li>Every 3 days generation of reports and putting negative keywords</li>
</ul>
<h3 style={{fontWeight:"bold",fontSize:"22px"}}>Service Charges</h3>
    <ul>
        <li>Setup and Management of PPC $150 (First Month) (upto 3 Asins)</li>
        <li>Management and Optimization of PPC $100 (Per Month) (upto 3 Asins)</li>
    </ul>
    </Fade>
</div></div>
</div>

<div className="Audit">
    <h2><a href="/#"  style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} name="PPC Audit">Amazon PPC Audit</a></h2>
  <div className="AdC"> <div className="ppcp">
   <Fade left>
        <h3 style={{fontWeight:"bold",fontSize:"26px"}}>Services include</h3>
    <ul>
        <li>Check why ACOS is high</li>
        <li>A keyword is relevant or not</li>
        <li>Check CPC (cost per click)</li>
        <li>CTR</li>
        <li>Bids are right</li>
        <li>Keywords tracking</li>
        <li>Negative KWS are tracked and added</li>
        <li>Check all these factors and suggest you the best solutions to optimize the PPC</li>
    </ul>
<h3 style={{fontWeight:"bold",fontSize:"22px"}}>Service Charges</h3>
<b>Free For One Asin</b>
<ul>
    <li>Audit for upto 5 Asins PPC ad Campaign Performance $50</li>
</ul>
</Fade></div>
<div>
    <Zoom>
    <img className="AuditImg" src={ad} alt="LOGO"/>
    </Zoom>
</div>
</div></div>
<div className="Listing">
    <h2 ><a href="/#"  style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} name="Optimization">Amazon Product Listing and Optimization</a></h2>
    <div className="Ocontent">
    <Flip left>
<img className="OImg" src={opt} alt="Audit"></img>
</Flip>
        <div className="ListingP">
    <Fade right>
    <b>Are you planning to sell on Amazon and want the have the best possible highly searched keywords in your listing?</b>
<p>If you need content for your listing including high search volume keywords or listing optimization)..We can provide services of listing or its optimization by writing content for the listing title, bullet points, product description in number of characters defined by amazon containing  high search volume keywords of top competitors and backend search terms which will also include most searched keywords of competitors for your listing to rank high organically it will be as good as your top competitors listings..(We can send some samples)
    <br/>
    Contact us and gain sales with the ultimate blend of SEO keyword optimization and professional copy writing that sells huge numbers.
</p>
<h3 style={{fontWeight:"bold",fontSize:"22px"}}>Service Charges</h3>
<ul>
    <li>Listing or its optimization $50</li>
</ul></Fade>

</div>
</div>
</div>
</div>
<div className="Contact">
    <h2><a href="/#" style={darkmode ? {color:"white"}:{color:"rgb(61, 54, 42)"}} name="Contact Us">Contact Us</a></h2>
    <div className="ContactP">
        <h3 style={{fontSize:"20px",fontWeight:"bolder"}}>Zayn Faraz</h3>
        <Zoom left><img src={contact} alt="Pics" width="300px"/></Zoom>
        <p className="p">You can contact us via</p>
    <a href="https://www.facebook.com/faraz.abid.50/"><img src={fb} className="fb" alt="facebook"/></a>
    <a href="tel:+923058772851"><img src={phone} alt="Phone" className="phone" /></a>
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkSbKVtFQmszvffGxSbMrlcLwBKwwhkrNZVBblswhdbvXhsFKKqWgZxPJTjgpTTLHwnnF"><img src={mail} alt="Email"  className="mail" /></a>
    </div></div>
    <script src="//code.tidio.co/seopql9cxmzmabaifse5oaszkqf8q3nx.js" async></script>
    <div className="footer">
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <div><h6>Developer</h6><br/><span>Muhammad Bilal</span></div>
        
         <div><h6>Email</h6><br/><span><a style={{color:"white"}} href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwPkSbKVtFQmszvffGxSbMrlcLwBKwwhkrNZVBblswhdbvXhsFKKqWgZxPJTjgpTTLHwnnF">Bscs.f18.m.16.a@gmail.com</a></span></div>
    </div></div>
</ThemeProvider>
</div>
)

}
export default App;//Here App is a Component name
