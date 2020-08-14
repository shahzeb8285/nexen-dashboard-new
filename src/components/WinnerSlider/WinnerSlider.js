import React, { Component } from "react";
import Slider from "react-slick";
import Widget from "../Widget/Widget";
import { Row } from "reactstrap";

export default class WinnerSlider extends Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow:3,
          slidesToScroll: 1
        };
        return (
          <Row>
            <Slider {...settings}>
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />
            <Widget />

              
            </Slider>
          </Row>
        );
      }
}