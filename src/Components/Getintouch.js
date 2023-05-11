import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { ImLocation2 } from "react-icons/im";
import { HiOutlinePhone } from "react-icons/hi";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { GrInstagram } from "react-icons/gr";
import "./Getintouch.css";
export default function Getintouch() {
  const [datas, setDatas] = useState([]);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function addData(e) {
    e.preventDefault();

    let data = {
      name,
      mobile,
      subject,
      email,
      message,
    };
    setDatas([...datas, data]);
    setName("");
    setMobile("");
    setSubject("");
    setEmail("");
    setMessage("");
  }
  useEffect(() => {
    const storedDatas = localStorage.getItem("datas");
    if (storedDatas) {
      setDatas(JSON.parse(storedDatas));
    } else {
      setDatas([]);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas]);
  return (
    <>
    <div className="bg"></div>
      <div
        className="contact-container"
        style={{ padding: "0px 200px" }}
        id="contact"
      >
                <h1>Contact Us</h1>

        <div className="row">
        <div className="left col-lg-6 col-md-6 col-12">
          <div className="contact-card">
            <h3 className="co_info">Contact Information</h3>
            <div>
              <div className="icon">
                <ImLocation2 />
              </div>
              <div className="address">
                Diamatics Consulting Services
                <br />
                Private Limited
                <br />
                Oklahoma City,
                <br />
                OK, 4043616198, US
              </div>
            </div>
            <div>
              <div className="icon">
                <ImLocation2 />
              </div>
              <div className="address">
                Diamatics Consulting Services,
                <br />
                Private Limited,
                <br />
                472/1, 472/2A, Melathiruchendur,
                <br />
                Rev village, Sree Krishna Nagar,
                <br />
                Tiruchendur, Thoothukudi,
                <br />
                Tamilnadu - 628205
              </div>
            </div>

            <div>
              <div className="icon">
                <HiOutlinePhone />
              </div>
              <div className="address">4043616198</div>
            </div>
          </div>
        </div>

        <div className="right col-lg-6 col-md-6 col-12">
          <h3>Send a Message</h3>
          <Box sx={{ maxWidth: 500 }}>
            <form>
              <div class="form-container">
                <div class="row">
                  <div class="col-sm-6">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="col-sm-6">
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      placeholder="Enter your mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Enter subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div class="col-sm-6">
                    <label>Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <label>Write your Message</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Wirte your message here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                <button onClick={addData}>Send message</button>
              </div>
            </form>
          </Box>
        </div>
        </div>
        

      </div>
      <div className="icons" >
          <div className="icon">
            <FaFacebookSquare size="40" />
          </div>
          <div className="icon">
            <TfiTwitterAlt size="40" />
          </div>
          <div className="icon">
            <GrInstagram size="40" />
          </div>
        </div>
    </>
  );
}
