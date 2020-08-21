import React, { useState } from 'react';
import {
  Media,
  Container,
  Row,
  Col
} from 'reactstrap';


import Widget from '../../../../components/Widget/Widget';



const Level = (props) => {


  let startClr = "#787777"
  let endClr = "#a8a8a8"

  if (props.isBought) {
    startClr = props.bgStartColor
    endClr = props.bgEndColor
  }






  return (

    <>

      <Col 
      
      onClick={()=>{
        props.onLevelClicked(props.levelNumber)
      }}
      
      style={{
        position: "relative",
        paddingTop: "20px",
        display: "inline-block",

      }}
        className="hoverItem">


        <Col style={{
          padding: "5px",
        }}>
          <Col style={{
            background: "radial-gradient(farthest-side ellipse at 10% 0, " + startClr
              + " 20%, " + endClr + ")",

            filter: props.isBought?null:" blur(2px)",
            WebkitFilter: props.isBought?null:"blur(2px)",
            borderRadius: "8px 8px 0px 0px",
            padding: "2px",
            textAlign: "center",
            alignContent: "center",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block"


          }}>
            <img src={props.icon} style={{
              // height: "200px",
              width: "100px",
              // borderRadius: "50%",
              objectFit: "cover",
            }} alt="" />


          </Col>

          <Col style={{
            background: "radial-gradient(farthest-side ellipse at 10% 0, " + startClr
              + " 20%, " + endClr + ")",
            borderRadius: "0px 0px 8px 8px",
            textAlign: "center",
            padding: 5

          }}>

            <h5 className="fw-semi-bold">0.25 ETH</h5>

          </Col>





        </Col>




        {props.isBought ? <h5 style={{
          position: "absolute",
          left: "-20px",
          top: "10px",
          marginLeft: "20px",
          background: "radial-gradient(farthest-side ellipse at 10% 0, " + startClr
            + " 20%, " + endClr + ")",
          textAlign: "center",
          borderRadius: "5px",
          color: "white",
          padding: "8px 6px 6px 6px",
          fontWeight: "600",
          fontSize: "18px}"
        }}>{props.levelPosition
          }</h5>

          : null}

      </Col>




    </>
  );
}


export default Level;
