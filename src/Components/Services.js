import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Services.css";
import { RiCheckboxBlankFill } from "react-icons/ri";
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
        <Box sx={{ p: 3 }}>
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
        : activeIndex === 2
        ? activeIndex - 1
        : activeIndex + 2
    );
  };

  const handlePrev = () => {
    setActiveIndex(
      activeIndex === 1
        ? 0
        : activeIndex === 2
        ? activeIndex - 1
        : activeIndex + 2
    );
  };
  return (
    <div id="services" className="service-container">
      <Box
        sx={{ width: "100%", padding: "100px 0px" }}
        className={`slider-item ${activeIndex === 0 ? "active" : ""}`}
      >
        <h1 className="service-title">Our Services</h1>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: "100%", padding: "0px 150px" }}
          >
            <Tab
              label="Platform Support"
              {...a11yProps(0)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
            <Tab
              label="Technical Helpdesk"
              {...a11yProps(1)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
            <Tab
              label="Billing Operations"
              {...a11yProps(2)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service4.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service1.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service2.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service9.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service1.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
      </Box>
      <Box
        sx={{ width: "100%", padding: "100px 0px" }}
        className={`slider-item ${activeIndex === 1 ? "active" : ""}`}
      >
        <h1 className="service-title">Our Services</h1>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: "100%", padding: "0px 150px" }}
          >
            <Tab
              label="Complex Bug Fixing"
              {...a11yProps(0)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
            <Tab
              label="Product Lifecycle Services"
              {...a11yProps(1)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
            <Tab
              label="Ticket Management"
              {...a11yProps(2)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service7.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service6.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service3.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
      </Box>
      <Box
        sx={{ width: "100%", padding: "100px 0px" }}
        className={`slider-item ${activeIndex === 2 ? "active" : ""}`}
      >
        <h1 className="service-title">Our Services</h1>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ width: "100%", padding: "0px 150px" }}
          >
            <Tab
              label="Project Outsourcing"
              {...a11yProps(0)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
            <Tab
              label="Functional & Non-Functional Testing"
              {...a11yProps(1)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
            <Tab
              label="Customer Care"
              {...a11yProps(2)}
              sx={{
                fontFamily: "gilroyRegular",
                color: "#056EE9",
                "&.Mui-selected": { color: "#0000A0" },
                fontWeight: 800,
                flex: "1 1 0",
                maxWidth: "none",
                textTransform: "capitalize",
                fontSize: "17px",
              }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service8.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Title3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service10.png" alt="logo" className="img-fluid" />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row" style={{ padding: "0px 200px" }}>
            <div className="left col-lg-6 col-md-6 col-12">
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading1
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading2
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
              <h3>
                <RiCheckboxBlankFill
                  style={{ backgroundColor: " #ECECEC", color: " #ECECEC" }}
                />{" "}
                Heading3
              </h3>
              <p>
                We Are A Global, One-stop offering Complete IT Solutions. Over
                The Past 5 Years, We Have Built Relationships With
                Market-Leading Companies Around USA{" "}
              </p>
            </div>
            <div className="right col-lg-6 col-md-6 col-12">
              <img src="../service5.png" alt="logo" className="img-fluid" />
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

