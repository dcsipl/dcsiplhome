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
        <h1>About Diamatics</h1>
        
        <div class="section-title">
      <div class="bar">
        </div>
    </div>
        <p className='p1'>
        Diamatics Consulting Services is an Information Technology company that provides technical solutions to its partners.
         We provide digital transformation strategies for your business through our full-fledged IT system. 
         Diamatics is known to facilitate and simplify IT services for data driven organizations with the help of our enthusiastic and energetic team. 
        </p>
        <p className='p2'>Our passion is to help make companies more agile and productive while minimizing business risks. </p>

    <div className='card-container row'>
    <Card className="col-lg-6 col-sm-12 left cards">
      <CardMedia
        sx={{ height: 414,width:500,marginLeft:"300px" }}
        image="../strategy.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>Our Strategy</h1>
          <p className='p3'>Diamatics adopts the “Value Disciplines Model” when it comes to formulating our strategy as it helps us meet the changing demands of our clients and customers. </p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <ul className='nav-navbar'>
        <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
            Product Leadership: We stay ahead in the trend and ensure that our partners receive cutting-edge products such as SaaS, AI, and security platform models that meet the industry’s expectations.  
        </li>
            <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
            Operational Excellence: Software must be provided with the lowest total cost possible without compromising quality. We follow LEAN methods such as the Scrum Methodology to ensure tasks are performed efficiently in order to meet promised timeframes for our partners. 
            </li>
            <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
            Customer Intimacy: Each of our partners has different needs and we work closely with them to understand and deliver customized products as per their expectations. We work with them and share the journey as the product evolves.             </li>

            <li>
            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9',marginLeft:"-30px",marginRight:"13px" }}/>
                These are our 3 hardcore strategies to fast-track enterprises
                into the digital era.
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