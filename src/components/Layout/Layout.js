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



class Layout extends React.Component {
  static propTypes = {
    sidebarStatic: PropTypes.bool,
    sidebarOpened: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    sidebarStatic: false,
    sidebarOpened: false,
  };
  constructor(props) {
    super(props);

    this.handleSwipe = this.handleSwipe.bind(this);
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
          <Header />
          {/* <Chat chatOpen={this.state.chatOpen} /> */}
          {/* <Helper /> */}


          <Sidebar />



          <Container>

            <Row


              style={{
                display: "flex",
                width: "100%"
              }}>

              <Col lg={3} xs={12} style={{
                flex: 1

              }}>
                <Widget
                  title={"Affiliate Link"}
                >

                  <p
                    className="fw-semi-bold"
                    style={{
                      backgroundColor: "#2c2f46",
                      borderRadius: "5px",
                      display: "block", paddingTop: "4px",
                      paddingBottom: "4px", paddingLeft: "4px",
                      flex: "1", overflow: "hidden"
                    }}>
                    33322323233233
                  </p>
                </Widget>

              </Col>



              <Col lg={3} xs={12} style={{
                flex: 1

              }}>
                <Widget
                  title={"Smart Contract Address"}
                >

                  <p
                    className="fw-semi-bold"
                    style={{
                      backgroundColor: "#2c2f46",
                      borderRadius: "5px",
                      display: "block", paddingTop: "4px",
                      paddingBottom: "4px", paddingLeft: "4px",
                      flex: "1", overflow: "hidden"
                    }}>
                    33322323233233
                  </p>
                </Widget>

              </Col>








              <Col lg={3} xs={12} style={{
                flex: 1

              }}>
                <Widget
                  title={"Etherium Wallet"}
                >

                  <p
                    className="fw-semi-bold"
                    style={{
                      backgroundColor: "#2c2f46",
                      borderRadius: "5px",
                      display: "block", paddingTop: "4px",
                      paddingBottom: "4px", paddingLeft: "4px",
                      flex: "1", overflow: "hidden"
                    }}>
                    33322323233233
                  </p>
                </Widget>

              </Col>



              {/* <Col lg={3} xs={6} style={{
                flex: 1

              }} />
 */}






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
