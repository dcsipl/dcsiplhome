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
        <p className='p1'>
        Diamatics Consulting Services is an Information Technology company that provides technical solutions to its partners.
         We provide digital transformation strategies for your business through our full-fledged IT system. 
         Diamatics is known to facilitate and simplify IT services for data driven organizations with the help of our enthusiastic and energetic team. 
        </p>
        <p className='p2'>Our passion is to help make companies more agile and productive while minimizing business risks. </p>

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
    </div>
</>
    )
}