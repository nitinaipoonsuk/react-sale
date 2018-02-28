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
  SwipeRow,
  View,
  CardItem,
  Card
} from "native-base";

import { Col, Row, Grid } from 'react-native-easy-grid';

import moment from 'moment'

import styles from "./styles"
import { MenuHeader } from "../components"
import Store from "../store/job"



class JobList extends Component {

  componentWillMount() {
    Store.getDatas()
  }

  render() {
    const { datas } = Store
    return (
      <Container style={styles.container}>
        <MenuHeader navigation={this.props.navigation}>
          Job list
        </MenuHeader>
        <Content>
          <List
            button
            dataArray={datas}
            renderRow={data =>

              <SwipeRow

                rightOpenValue={-75}
                right={
                  <Button style={styles.bsup}
                    full onPress={() => this.props.navigation.navigate("JobDetails", { data: data })}>
                    <Icon active name="information-circle" />
                  </Button>
                }
                disableRightSwipe
                body={
                  <Grid
                    onPress={() => this.props.navigation.navigate("ReceiveGoods", { data: data })}>
                    <Row>
                      <Col style={{ width: '50%' }}>
                        <Text>
                          Job name: {data.JobName}
                        </Text>
                        <Text note>
                        Customer: {data.CustomerName}
                        </Text>
                      </Col>
                      <Col style={{ width: '50%' }}>
                        <Text>
                          Code: {data.JobCode}
                      </Text>
                      </Col>
                    </Row>
                  </Grid>
                }
              />

            }

          />
        </Content>

      </Container>
    );
  }
}

export default JobList;
