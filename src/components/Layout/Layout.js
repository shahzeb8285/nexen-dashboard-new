import PropTypes from 'prop-types';
import Hammer from 'rc-hammerjs';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Col, Container, Row } from 'reactstrap';
import { closeSidebar, openSidebar } from '../../actions/navigation';
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
import WinnerSlider from "../../components/WinnerSlider/WinnerSlider";
import BlockchainManager from '../../utils/BlockchainManager';


class Layout extends React.Component {
   constructor(props) {
    super(props);
    this.state=({
      contractAddress:"0x",
      ethereumWallet:"0x"
    })
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  async componentDidMount(){
    const instance = await BlockchainManager.getInstance();
<<<<<<< HEAD
    const data = await instance.data;
    console.log(data);
    const contractaddress = await data.contractAddress;
    this.setState({
      contractAddress : contractaddress
=======
    // console.log(instance);
    // const data = instance.data;
    // console.log("=====================",data);
    // const contractaddress = data.contractAddress;
    // console.log(contractaddress);
    // console.log(typeof contractaddress,"contractaddresstype");
    // this.setState({
    //   contractAddress : contractaddress
    // })


    instance.getUserBlockChainDetails((data)=>{
      console.log("JSON",data);
      this.setState({contractAddress:data.contractAddress,ethereumWallet:data.ethereumWallet})
>>>>>>> 0847d31ba69e95d6e972f24f5694c2a1b38485b9
    })
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
          <Header />
          {/* <Chat chatOpen={this.state.chatOpen} /> */}
          {/* <Helper /> */}


          <Sidebar />



          <Container>

            <Row>
        
              <Col lg={3} xs={6}>
                <Widget
                  title={<h5> Affiliate Link </h5>}
                >

                  <p style={{
                    backgroundColor: "#2c2f46",
                    borderRadius: "5px",
                    display: "block", paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                  }}>
                    <span style={{
                      flex: "1",
                      paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                    }} className="fw-semi-bold">{33322323233233}</span>

                    {/* <small><span className="circle bg-default text-white"><i className="fa fa-chevron-down" /></span></small> */}

                  </p>
                </Widget>

              </Col>

              <Col lg={3} xs={6}>
                <Widget
                  title={<h5> Smart Contract Address </h5>}
                >

                  <p style={{
                    backgroundColor: "#2c2f46",
                    borderRadius: "5px",
                    display: "block", paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                  }}>
                    <span style={{
                      flex: "1",
                      paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                    }} className="fw-semi-bold">{this.state.contractAddress}</span>

                    {/* <small><span className="circle bg-default text-white"><i className="fa fa-chevron-down" /></span></small> */}

                  </p>
                </Widget>

              </Col>





              <Col lg={3} xs={4}>
                <Widget
                  title={<h5> Etherium Wallet </h5>}
                >

                  <p style={{
                    backgroundColor: "#2c2f46",
                    borderRadius: "5px",
                    display: "block", paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                  }}>
                    <span style={{
                      flex: "1",
                      paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                    }} className="fw-semi-bold">{this.state.ethereumWallet}</span>

                    {/* <small><span className="circle bg-default text-white"><i className="fa fa-chevron-down" /></span></small> */}

                  </p>
                </Widget>
              </Col>
        
              <Col lg={3} xs={3}>
                <Widget
                  title={<h5> Etherium Wallet </h5>}
                >

                  <p style={{
                    backgroundColor: "#2c2f46",
                    borderRadius: "5px",
                    display: "block", paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                  }}>
                    <span style={{
                      flex: "1",
                      paddingTop: "4px", paddingBottom: "4px", paddingLeft: "10px"
                    }} className="fw-semi-bold">33322323233233</span>

                    {/* <small><span className="circle bg-default text-white"><i className="fa fa-chevron-down" /></span></small> */}

                  </p>
                </Widget>
              </Col>
        

      
              {/* <Col lg={1} xs={6}/> */}
               
        
              
        
        
        
        
            </Row>




        

          </Container>








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
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
