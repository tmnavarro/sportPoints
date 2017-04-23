
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  Text,
  Icon,
  List,
  ListItem,
  Content,
  Thumbnail,
  Badge,
  Button,
  View
} from 'native-base';

import styles from './style';


class SideBar extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Content style={{ backgroundColor: '#FFF' }} >
        <List foregroundColor={'#46685d'} style={styles.listMenu}>
          <ListItem onPress={() => { console.log('clickado'); }} style={styles.links}>
            <Text style={styles.itemPrincipal}>Notificações</Text>
          </ListItem>

        </List>
      </Content>
    );
  }
}

React.propTypes = {
  dispatch: React.PropTypes.funct,
  navigation: React.PropTypes.shape({
    key: React.PropTypes.string,
    routes: React.PropTypes.array,
  }),
};

const mapDispatchProps = dispatch => ({
  dispatch,
});

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});


export default connect(mapStateToProps, mapDispatchProps)(SideBar);
