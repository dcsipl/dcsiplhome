import React from 'react'
import './About.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {BsFillCheckCircleFill} from "react-icons/bs"
export default function About() {
  return (
    <>
    <div className='about-container' id="about">
        <h1>About DCSIPL</h1>
        <p>We are a global, <b>one-stop-shop offering complete IT solutions</b> for all your business needs cost effectively. 
            Presently, Diamatics is<br></br>the confluence of PAN Indian IT and non-IT squads led by the Specialists 
            and budding engineers. Our wide range of solutions make<br></br>data-driven companies more agile and 
            productive while minimizing business risks.</p>
        <p>Over the past <b>5 years</b>, we have built relationships with market-leading companies around the USA.</p>
    </div>
    <div className='card-container row'>
    <Card className="col-lg-6 col-sm-12 cards">
      <CardMedia
        sx={{ height: 314 }}
        image="../strategy.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Our Strategy</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
             <ul className="navbar-nav">
            <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9'/> &nbsp; &nbsp; &nbsp;For Serving Things Right.
            </li>
            <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9'/> &nbsp; &nbsp; &nbsp;To apply Business at the centre of enterprise
                software.
            </li>
            <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9'/> &nbsp; &nbsp; &nbsp;To enhance business growth of our customers and to
                deliver market defining high quality solutions.
            </li>
            <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9'/> &nbsp;&nbsp; &nbsp;These are our 3 hardcore strategies to fast-track enterprises
                into the digital era.
            </li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
    <Card className="col-lg-6 col-sm-12 cards">
      <CardMedia
        sx={{ height: 314 }}
        image="../vision.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Purpose, Vision & Mission</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        <ul className="navbar-nav">
              <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9'/>&nbsp; &nbsp; &nbsp;Centre of Excellence and Strategy for Serving
                Things Right.
              </li>
              <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9' />&nbsp; &nbsp; &nbsp;We preach and practise Democracy and Secularism
                also we expect the same from our employees and clients.
              </li>
              <li>
                {" "}
                <BsFillCheckCircleFill size="20px" color='#056EE9'/>&nbsp; &nbsp; &nbsp;Help Each Other, Grow Together!
              </li>
            </ul>
        </Typography>
      </CardContent>
    </Card>
    </div>

</>
    )
}