import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row,
  Card,
  CardItem
} from "native-base";

import styles from "./styles"

import { BackHeader } from "../components"

var SignatureCapture = require('react-native-signature-capture');

class ReceiveGoods extends Component {

  render() {
      const { data } = this.props.navigation.state.params
    return (
      <Container style={styles.container}>
        <BackHeader navigation={this.props.navigation}>
          {data.JobName}
        </BackHeader>
        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Title>Details</Title>
            </CardItem>
            <CardItem>
              <SignatureCapture
                rotateClockwise={true}
                square={true}
                onSaveEvent={this._onSaveEvent} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }

}


export default ReceiveGoods;