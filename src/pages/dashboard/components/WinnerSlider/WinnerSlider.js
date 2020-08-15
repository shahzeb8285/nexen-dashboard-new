import React, { useState } from 'react';
import {
  Media,
  Container,
  Row,
  Col
} from 'reactstrap';


import Widget from '../../../../components/Widget/Widget';
import Carousel from 'react-elastic-carousel'

const WinnerSlider = (props) => {




  return (

    <>
      <Carousel enableAutoPlay autoPlaySpeed={1500} itemsToShow={1}>



        <Container>
        <div style={{
              position: "relative",
              paddingTop: "20px",
              display: "inline-block",

            }}>
              <Row style={{
                padding: "10px",
                borderRadius: "10px",
                // background: "radial-gradient(farthest-side ellipse at 10% 0, " + "#fdcb6e"
                //   + " 20%, " + "#bf8415" + ")", 
              }}>
                <Col>
                  <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" style={{
                    height: 80,
                    width: 80,
                    objectFit: "cover",
                    borderRadius: "50%"
                  }} alt="" />




                </Col>

                <Col>
                  <h5 className="fw-bold">Shahzeb</h5>
                  <p
                    className="fw-semi-bold"
                    style={{
                      backgroundColor: "#2c2f46",
                      borderRadius: "5px",
                      display: "block", paddingTop: "4px",
                      paddingBottom: "4px",
                      flex: "1"
                    }}>
                    33322323233233
            </p>
                </Col>



              </Row>

              <h5 style={{
                position: "absolute",
                left: "-20px",
                top: "10px",
                marginLeft: "20px",
                background: "radial-gradient(farthest-side ellipse at 10% 0, " + "#fdcb6e"
                  + " 20%, " + "#bf8415" + ")",
                textAlign: "center",
                borderRadius: "5px",
                color: "white",
                padding: "8px 6px 6px 6px",
                fontWeight: "600",
                fontSize: "18px}"
              }}>1st</h5>

            </div>


        </Container>



        <Container>









          <div style={{
              position: "relative",
              paddingTop: "20px",
              display: "inline-block",

            }}>


          <div id="card" style={{
            background: "radial-gradient(farthest-side ellipse at 10% 0, " + "#fdcb6e"
              + " 20%, " + "#bf8415" + ")", height: "auto",
            width: "100%",
            borderRadius: "8px",
            padding: "15px",
            marginLeft:"20px"
            
          }}>
            <h1>John Doe</h1>
            <div class="image-crop" style={{
              display: "block",
              position: "relative",
              backgroundColor: "#E6EBEE",
              width: "80px",
              height: "80px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "50%",
              boxs: "1px 1px 5px #4069E2",
            }}>
              <img id="avatar" src="https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl"></img>
            </div>

            <div id="stats">
              <div class="col">
                <p class="stat">108</p>
                <p class="label">Posts</p>
              </div>
              <div class="col">
                <p class="stat">457</p>
                <p class="label">Followers</p>
              </div>
              <div class="col">
                <p class="stat">229</p>
                <p class="label">Following</p>
              </div>
            </div>
            <div id="buttons">
              <button>Follow</button>
              <button id="msg">Message</button>
            </div>
          </div>

             
              <h5 style={{
                position: "absolute",
                left: "-20px",
                top: "10px",
                marginLeft: "20px",
                background: "radial-gradient(farthest-side ellipse at 10% 0, " + "#fdcb6e"
                  + " 20%, " + "#bf8415" + ")",
                textAlign: "center",
                borderRadius: "5px",
                color: "white",
                padding: "8px 6px 6px 6px",
                fontWeight: "600",
                fontSize: "18px}"
              }}>1st</h5>

            </div>

        </Container>











      </Carousel>




    </>
  );
}


export default WinnerSlider;
