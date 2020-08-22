import PropTypes from 'prop-types';
import Hammer from 'rc-hammerjs';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Col, Container, Row } from 'reactstrap';
import { closeSidebar, openSidebar } from '../../actions/navigation';
import { incomeFetched, userFetched } from '../../actions/web3Actions';
import WinnerSlider from '../../pages/dashboard/components/WinnerSlider/WinnerSlider';

import Widget from '../../components/Widget';
import Charts from '../../pages/components/charts/Charts';
import UIIcons from '../../pages/components/icons';
import MapsGoogle from '../../pages/components/maps/google';
import Dashboard from '../../pages/dashboard';
import UINotifications from '../../pages/notifications';
import TablesStatic from '../../pages/tables/static';
import CoreTypography from '../../pages/typography';
import Header from '../Header';
import Sidebar from '../Sidebar';
import s from './Layout.module.scss';
import { toast } from 'react-toastify';
import WinnerTile from '../../pages/dashboard/components/WinnerSlider/WinnerTile'
// import BlockchainManager from '../../utils/BlockchainManager';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      contractAddress: "0x",
      ethereumWallet: "0x"
    })
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  async componentDidMount() {

    console.log("fffffffffff", this.props)
    // const instance = await BlockchainManager.getInstance();
    // console.log(instance);
    // const data = instance.data;
    // console.log("=====================",data);
    // const contractaddress = data.contractAddress;
    // console.log(contractaddress);
    // console.log(typeof contractaddress,"contractaddresstype");
    // this.setState({
    //   contractAddress : contractaddress
    // })


    // instance.getUserBlockChainDetails((data)=>{
    //   console.log("JSON",data);
    //   this.setState({contractAddress:data.contractAddress,ethereumWallet:data.ethereumWallet})
    // })
  }
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };


  copyToClipboard = (name, data) => {
    // const el =document.createElement('txtps');
    // el.value = data;
    // document.body.appendChild(el);
    // el.querySelectorAll(0,111111111);
    // document.execCommand("copy");
    // document.body.removeChild(el);

    navigator.clipboard.writeText(data).then(() => {
      toast.success(name + " copied successfully", {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
      });
    }).catch((err) => {
      toast.success(err, {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
      });
    })

  }
  handleSwipe(e) {
    if ('ontouchstart' in window) {
      if (e.direction === 4 && !this.state.chatOpen) {
        this.props.dispatch(openSidebar());
        return;
      }

      if (e.direction === 2 && this.props.sidebarOpened) {
        this.props.dispatch(closeSidebar());
        return;
      }

      this.setState({ chatOpen: e.direction === 2 });
    }
  }

  render() {
    return (
      <div
        className={[
          s.root,
          'sidebar-' + this.props.sidebarPosition,
          'sidebar-' + this.props.sidebarVisibility,
        ].join(' ')}
      >
        <div className={s.wrap}>
          {/* <Header /> */}
          {/* <Chat chatOpen={this.state.chatOpen} /> */}
          {/* <Helper /> */}


          <Sidebar />





          <Row>
            <Col lg={7} xs={12} style={{ paddingTop: 5, marginTop: "15px" }}>
              {/* <h3>Today's <span className="fw-semi-bold">Winners</span></h3> */}
              {/* <WinnerSlider /> */}
              <Widget

                title={<h4>Today's <span className="fw-semi-bold">Winners</span></h4>
                }
              >
                <div className="row">

                  <Row>
                    <WinnerTile
                      className="col"
                      rank="1st"
                      user={{ avatar: "https://images.pexels.com/photos/20787/pexels-photo.jpg", name: "Rachna" }}
                      startColor={"#fdcb6e"}
                      endColor={"#bf8415"}
                    /></Row>

                  <Row>
                    <WinnerTile rank="2nd"
                      className="col"

                      user={{ avatar: "https://images.pexels.com/photos/20787/pexels-photo.jpg", name: "Mossajjid" }}
                      startColor={"#BEC0C2"}
                      endColor={"#70706F"}
                    /></Row>
                  <Row>
                    <WinnerTile rank="3rd"
                      className="col"

                      user={{ avatar: "https://images.pexels.com/photos/20787/pexels-photo.jpg", name: "Neha" }}
                      startColor={"#c31432"}
                      endColor={"#240b36"}
                    />

                  </Row>


                </div>

              </Widget>


            </Col>


            <Col lg={4} xs={12} style={{ paddingTop: 5, marginTop: "15px" }}>
              <Widget

                title={<h4>Our <span className="fw-semi-bold">Acheivements</span></h4>
                }

              >






              

                <Col>
                
                <Row>

                  <h5 style={{color:"yellow", fontWeight:"600" }}>All Participants</h5>
                  <h5 style={{color:"#72dd97",fontSize:"x-large" }}>123455</h5>
                </Row>


                <Row>

                  <h5 style={{color:"white", fontWeight:"600" }}>Joined in 24 Hours</h5>
                  <h5 style={{color:"#ff1616",fontSize:"x-large" }}>123455</h5>
                </Row>
                
                
                
                <Row>

                  <h5 style={{color:"yellow", fontWeight:"600" }}>Participants have earned ETH</h5>
                  <h5 style={{color:"#b2ecef",fontSize:"x-large" }}>123455</h5>
                </Row>



                <Row>

                  <h5 style={{color:"#10f171", fontWeight:"600" }}>Participants have earned USD</h5>
                  <h5 style={{color:"#f6c362",fontSize:"x-large" }}>123455</h5>
                </Row>
</Col>
              </Widget>
            </Col>

          </Row>





          <Hammer onSwipe={this.handleSwipe}>
            <main className={s.content}>
              {/* <BreadcrumbHistory url={this.props.location.pathname} /> */}

              <TransitionGroup>
                <CSSTransition
                  key={this.props.location.key}
                  classNames="fade"
                  timeout={200}
                >
                  <Switch>
                    <Route path="/app/main" exact render={() => <Redirect to="/app/main/dashboard" />} />
                    <Route path="/app/main/dashboard" exact component={Dashboard} />
                    <Route path="/app/icons" exact component={UIIcons} />
                    <Route path="/app/notifications" exact component={UINotifications} />
                    <Route path="/app/charts" exact component={Charts} />
                    <Route path="/app/tables" exact component={TablesStatic} />
                    <Route path="/app/maps" exact component={MapsGoogle} />
                    <Route path="/app/typography" exact component={CoreTypography} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <footer className={s.contentFooter}>
              </footer>
            </main>
          </Hammer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarPosition: store.navigation.sidebarPosition,
    sidebarVisibility: store.navigation.sidebarVisibility,
    user: store.Web3Reducer.user
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
