import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Services.css";
import { RiCheckboxBlankFill } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Services() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(
      activeIndex === 1
        ? 0
        : activeIndex +1
    );
  };

  const handlePrev = () => {
    setActiveIndex(
      activeIndex === 1
        ? 0
        : activeIndex+1 
    );
  };
  return (
    <div id="services" className="service-container">
      
      <Box
        sx={{ width: "100%", padding: "100px 0px" }}
        className={`slider-item ${activeIndex === 0 ? "active" : ""}`}
      >
        <h1 className="service-title">Our Services</h1>
        <div class="section-title">
      <div class="bar">
        </div>      

        </div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: "100%", padding: "0px 150px" }}
          >
            <Tab
              label="Ticket Management "
              {...a11yProps(0)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s11.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px",marginTop:"30px"}}/>}

            />
                       

            <Tab
              label="Platform Support "
              {...a11yProps(1)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={<img src="../s22.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px",marginTop:"30px"}}/>}
            />
            <Tab
              label="Billing Operations"
              {...a11yProps(2)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s33.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px",marginTop:"30px"}}/>}

            />
            <Tab
              label="Customer Care "
              {...a11yProps(3)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s44.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px",marginTop:"30px"}}/>}

            />
                       

            <Tab
              label="Resource Plan Management "
              {...a11yProps(4)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={<img src="../s55.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px"}}/>}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
            <p>
                <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}
                
                We help bring customer communications from different channels to one interface. This reduces the amount of time your agents spend switching between tabs and brings all customer data to one place.              </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}
                
             

                            Ticket management refers to the process help desks use to collect requests and track ticket lifecycle from creation to resolution. The ticket management process, whether automated or manual, starts with a service request.              </p>
             
                            <p>                
                                <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                                We utilize advance software to ensure that we have a solid and effective method of raising and managing tickets. This helps us allocate tasks to our various teams and track progress to ensure deliverability to our clients.                </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            We help our clients to develop and maintain their product applications as well as ensure high performance and a user experience that meets their expectations.                </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            We know how to design, transform, migrate and operate your datacentre, with the key focus on availability and reliability.               </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            With our SLA based Managed Service we keep your data centre up and running, benefiting from over a decade of experience and technical knowhow in managing different server OS platforms, web services and portals, databases, messaging, storage and backup systems.               </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            As technologies such as the Internet of Things (IoT), artificial intelligence (AI), machine-to-machine (M2M) communication, cybersecurity, and the management of big data among others continue to gain a foothold, there’s an evolution within the IT services sector.               </p>
             
                            <p>            
                                    <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}


                
             

                                    Providers need to differentiate themselves through their offerings and pricing tactics.              </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Here with our highly qualified CoE team we can help you with this operation               </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                            Our IT services provide value to the customer and we help them accomplish a specific objective. However, unlike other business services, there is one key element that differentiates customer service in IT services—alignment.              </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
                            And this is because, IT service companies typically view the service in terms of applications and infrastructure. Thus, for an IT company to service its customers well there must be a clear alignment from both parties on the goals and the exact nature of the services provided.               </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
                            Businesses are not keen on understanding APIs, code, or other technical components. They want to understand relevant data better to increase their customer satisfaction.              </p>
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
                            By realizing this value, both of us work together to recognize their IT implementation goals and minimize their problems. This is co-creation. This is the strategy we follow to ensure customer services              
                </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Resource management is the process of planning, scheduling and allocating resources to complete a project. Resource management is an important process for many disciplines such as project management, portfolio management and business management.  {" "}
              </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            In project management, it's important to identify your resource requirements during the initiation and planning phases of the project life cycle so you can estimate costs and create a project budget. The right resources need to be scheduled at the right time to efficiently complete a project plan. {" "}
              </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Portfolio managers and project management offices (PMOs) need to ensure they allocate resources strategically to manage multiple projects simultaneously when it comes to portfolio Management. {" "}
              </p>
              <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            And in business management, managing resources effectively has a myriad of benefits for your business such as helping you cut down costs, streamlining your operations planning and maximizing your profits. The way in which you manage your business resources greatly affects its ability to function and grow beyond project management.               </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
      </Box>
      <Box
        sx={{ width: "100%", padding: "100px 0px" }}
        className={`slider-item ${activeIndex === 1 ? "active" : ""}`}
      >
        <h1 className="service-title">Our Services</h1>
        <div class="section-title">
      <div class="bar">
        </div>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: "100%", padding: "0px 150px" }}
          >
            <Tab
              label="Project Outsourcing "
              {...a11yProps(0)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s66.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px",marginTop:"30px"}}/>}

            />
            <Tab
              label="Technical Helpdesk "
              {...a11yProps(1)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s77.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px",marginTop:"30px"}}/>}

            />
          "
             
                         <Tab
              label="Product lifecycle services "
              {...a11yProps(2)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s88.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px"}}/>}

            />
             <Tab
              label="Functional and Non functional Testing "
              {...a11yProps(3)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s99.svg" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"50px"}}/>}

            />
            <Tab
              label="Complex Bug Fixing"
              {...a11yProps(4)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#476788",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
              icon={ <img src="../s10.svg" className="s5" style={{height:"40px",width:"40px",marginBottom:"20px",marginTop:"30px"}}/>}

            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Countless organisations can now mitigate the rising costs of IT services across the world. With outsourced software development, companies can boost their abilities with ease and flexibility. Slash your hiring costs with scalable expert IT solutions.               </p>
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Communication is central to ensuring team’s effectiveness. That’s why, with close geographical proximity, nearshoring teams operate in time zones near you. And with good cultural affinity, companies can expect no linguistic barriers between head office, and their IT teams.               </p>
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

             

                            IT project outsourcing is an increasingly viable investment for many companies seeking cost-effective enhancements to their team efforts. Outsourced teams bring rich expertise with internationally recognised qualifications and are specialised to champion any IT project.              </p>
              <p>  
              <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             
 

              Economical, and easily accessible, these squads of professionals consistently provide crucial ability and support. With these teams located nearby, expect a complete understanding between one another. With IT teams, your projects are in safe hands.               </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Our technical support team consists of engineers who are enriched with current IT trends and in-depth knowledge of software and hardware along cloud computing technologies.              </p>
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Whenever our customers raise tickets related to IT, hardware, and software issues              </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            we handle with best industry solutions and ensure 100% full proof resolution to technical issues.              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            We help you eliminate Bottlenecks and Assist Rapid Deployment by manging complex, cross-functional processes, by integrating people, processes and systems through coordination of the efforts of distributed teams and efficiently develop the best possible products; creating great products demand focus and the right technology.                </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            As an enterprise, strategy Product lifecycle management should be integrated along with the information driven approach to all aspects of a product’s life.              
                            </p>
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            To succeed you need to optimize the product development processes that will deliver on your strategic goals. Our Experienced Staff provide recommendations to eliminate the Bottlenecks and assist Rapid Deployment.              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            In this fast-paced world of technology development, software companies are striving not only for a bug-free product but also for an excellent performing product.               </p>
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            This way we want to ensure the two aspects which are Quality and Performance. Through functional testing we ensure the proper working of all the functionalities of an application.              </p>
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

             

                            All the requirements are met using Requirement traceability matrix to deliver 
                            a defect-free product.  Through non-functional testing we ensure using the parameters like Security, 
                            Usability, Scalability, Interoperability, Efficiency, and Flexibility of any kind of applications  </p>
                                     
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="row" >
            <div className="left col-lg-6 col-md-6 col-12">
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Diamatics provides a wide range of bug fixing and bug maintenance services to ensure that the delivered website or application runs smoothly and in full accordance with the clients' requirements. We have a dedicated Testing CoE team who provide services which include                </p>
             
                            <p> 
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Bug Fixing and Enhancements                </p>
             
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Code and speed Optimization               </p>
                            <p>  
                            <BsFillCheckCircleFill size="18px" style={{ color:'#056EE9'}} />{" "}

                
             

                            Security Maintenance                </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../services.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
      </Box>
      
      <div className="slider-controls">
        <button onClick={handlePrev}>
          <BsChevronLeft />
        </button>
        <button onClick={handleNext}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}

