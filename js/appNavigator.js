/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Drawer } from 'native-base';
import { StatusBar } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';

// Importação de Actions
import { closeDrawer } from './actions/drawer';

// Importação de telas da aplicação

import MapPoints from './components/mapPoints';
import SideBar from './components/sideBar';

class AppNavigator extends Component {

  componentDidUpdate(nextProps) {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <Drawer
          acceptPan
          content={<SideBar navigator={this._navigator} />}
          disabled={this.props.drawerDisabled}
          negotiatePan
          onClose={() => this.closeDrawer()}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          ref={(ref) => { this._drawer = ref; }}
          side={'right'}
          styles={{
            drawer: {
              shadowColor: '#000000',
              shadowOpacity: 0.8,
              shadowRadius: 3,
              flexDirection: 'column-reverse',
            },
          }}
          tapToClose
          tweenDuration={150}
          type="overlay"
          tweenHandler={(ratio) => {  //eslint-disable-line
            return {
              drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
              main: {
                opacity: (2 - ratio) / 2,
              },
            };
          }}
      >
        <StatusBar
            barStyle="light-content"
        />
        <Router>
          <Scene
              component={MapPoints}
              hideNavBar
              key="mapPoints"
          />
        </Router>
      </Drawer>
    );
  }
}

AppNavigator.propTypes = {
  drawerState: React.PropTypes.string,
  drawerDisabled: React.PropTypes.bool,
  closeDrawer: React.PropTypes.func,
  navigation: React.PropTypes.shape({
    key: React.PropTypes.string,
    routes: React.PropTypes.array,
  }),
  popRoute: React.PropTypes.func,
  dispatch: React.PropTypes.func,
};

const mapDispatchProps = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  dispatch,
});

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  drawerDisabled: state.drawer.drawerDisabled,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, mapDispatchProps)(AppNavigator);
