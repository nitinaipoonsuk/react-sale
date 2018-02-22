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
  SwipeRow,
  View
} from "native-base";

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
                  <ListItem onPress={() => this.props.navigation.navigate("ReceiveGoods", { data: data })}>
                    <Body>
                      <Row>
                        <Text>
                          Job name
                        </Text>
                        <Text>
                          {data.JobName}
                        </Text>
                        <Text>
                          Code
                      </Text>
                        <Text>
                          {data.JobCode}
                        </Text>
                      </Row>
                      <Row>
                        <Text note>
                          Customer
                        </Text>
                        <Text note>
                          {data.CustomerName}
                        </Text>
                      </Row>
                    </Body>
                    <Left>

                    </Left>

                  </ListItem>
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
