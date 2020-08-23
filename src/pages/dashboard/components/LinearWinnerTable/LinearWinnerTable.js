import React, { useState } from 'react';
import {
  Media,
  Container,
  Row,
  Col
} from 'reactstrap';
import defaultAvatar from "../../../../../src/images/avatar.png"

const LinearWinnerTable = (props) => {




  return (

    <>
      <div>



        <div className="row">

          <img src={defaultAvatar} style={{ height: 50, width: 50, borderRadius: "50%", border: "3px  solid white" }} />
          <div style={{ marginLeft: 10 }}>
            <h5 className='fw-semi-bold'>Shahzeb Ahmed Khan</h5>
            <h6 className='fw-semi-bold'>ID : 235</h6>

            <div class="progress progress-striped">
              <div class="progress-bar">
              </div>
            </div>

          </div>

          <img src={defaultAvatar} style={{ height: 50, width: 50, borderRadius: "50%", border: "3px  solid white", marginLeft: 20 }} />

        </div>
      </div>


    </>
  );
}


export default LinearWinnerTable;
