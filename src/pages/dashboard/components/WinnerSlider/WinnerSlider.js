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

    <Carousel enableAutoPlay autoPlaySpeed={1500} itemsToShow={1}>



      <Container>
        <Row>

          <div style={{
            position: "relative",
            paddingTop: "20px",
            display: "inline-block",

          }}>
            <Row style={{
              padding: "10px",
              borderRadius:"10px",
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




          <Col>

            <Row>


            </Row>
          </Col>

        </Row>
      </Container>











      {/* <Container>
        <Row>

          <div style={{
            position: "relative",
            paddingTop: "20px",
            display: "inline-block",
            paddingRight:"20px"

          }}>
            <a href="#">

              <Row style={{
                marginLeft: "5px",
                background: "radial-gradient(farthest-side ellipse at 10% 0, " + "#fdcb6e"
                  + " 20%, " + "#bf8415" + ")", borderRadius: "10px 10px 10px 10px",
                paddingBottom: "8px",
                paddingTop: "20px",
              }}>
                <Col>
                  <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" style={{
                    height: 80,
                    width: 80,
                    objectFit: "cover",
                    borderRadius: "10px"
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
            </a>
          </div>




          <Col>

            <Row>
              {/* <h1>1st</h1>
            <h1>1st</h1> */}

      {/* 
            </Row>
          </Col>

        </Row>
      </Container> */}



    </Carousel>
  );
}


export default WinnerSlider;
