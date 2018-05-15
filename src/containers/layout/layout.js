import React, { Component, Fragment } from 'react';
import classes from './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  };
  render() {
    return (
      <Fragment>
        <Toolbar sideDrawerToggler={this.sideDrawerToggler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}
export default Layout;
