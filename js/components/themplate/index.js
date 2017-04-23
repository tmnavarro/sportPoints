
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {
  View,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import {
  Button,
  InputGroup,
  Input,
  Container,
  Content,
  Card,
  Thumbnail,
  Icon,
  CardItem,
  Col,
  Row,
  Header,
  Title,
  Grid,
} from 'native-base';

const { width, height } = Dimensions.get('window');

import { openDrawer } from '../../actions/drawer';

class Template extends Component {

  constructor(props) {
    super(props);
  }

  openDrawer() {

  }

  render() {
    return (
      <Container>
      <Header>
        <Button transparent>
          <Icon name='ios-arrow-back' />
        </Button>

        <Title>Header</Title>

        <Button transparent onPress={ () => this.props.dispatch(openDrawer()) }>
          <Icon name='ios-menu' />
        </Button>
      </Header>
      <Content>
        {this.props.content}
      </Content>
    </Container>
    );

  }
}

const mapStateToProps = state => ({
});

const mapDispatchProps = dispatch => ({
  dispatch,
});


export default connect(mapStateToProps, mapDispatchProps)(Template);
