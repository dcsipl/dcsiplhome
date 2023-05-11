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
        <p className='p1'>We are a global, <b>one-stop-shop offering complete IT solutions</b> for all your business needs cost effectively. 
            Presently, Diamatics is<br></br>the confluence of PAN Indian IT and non-IT squads led by the Specialists 
            and budding engineers. Our wide range of solutions make<br></br>data-driven companies more agile and 
            productive while minimizing business risks.</p>
        <p className='p2'>Over the past <b>5 years</b>, we have built relationships with market-leading companies around the USA.</p>
    </div>
    <div className='card-container row'>
    <Card className="col-lg-6 col-sm-12 left cards">
      <CardMedia
        sx={{ height: 314,width:471 }}
        image="../strategy.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Our Strategy</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <ul className='nav-navbar'>
        <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
            For Serving Things Right
        </li>
            <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
              To apply Business at the centre of enterprise
                software.
            </li>
            <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
                To enhance business growth of our customers and to deliver market defining high quality solutions.
            </li>

            <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
                These are our 3 hardcore strategies to fast-track enterprises
                into the digital era.
            </li>

            </ul>
        </Typography>
      </CardContent>
    </Card>
    <Card className="col-lg-6 col-sm-12 right cards">
      <CardMedia
        sx={{ height: 314,width:450}}
        image="../vision.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Purpose, Vision & Mission</h1>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        <ul className="nav-navbar">
              <li>
              <BsFillCheckCircleFill size="18px" color='#056EE9' style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
               Centre of Excellence and Strategy for Serving
                Things Right.
              </li>
              <li>
              <BsFillCheckCircleFill size="18px" color='#056EE9' style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
                We preach and practise Democracy and Secularism also we expect the same from our employees and clients.
              </li>
              <li>
              <BsFillCheckCircleFill size="18px" color='#056EE9' style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
                Help Each Other, Grow Together!
              </li>

            </ul>
        </Typography>
      </CardContent>
    </Card>
    </div>

</>
    )
}