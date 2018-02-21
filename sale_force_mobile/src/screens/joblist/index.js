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
                rightOpenValue={-300}
                right={
                  <Grid style={{
                    backgroundColor: "#ff8838"
                  }}>
                    <Row>
                      <Text note style={{color: '#fff'}}>
                        License:
                    </Text>
                      <Text note style={{color: '#fff'}}>
                        {data.License}
                      </Text>
                    </Row>
                    <Row>
                      <Text note style={{color: '#fff'}}>
                        Source date:
                    </Text>
                      <Text note style={{color: '#fff'}}>
                        {moment(data.SourceDate).format('DD/MM/YYYY HH:mm')}
                      </Text>
                    </Row>
                    <Row>
                      <Text note style={{color: '#fff'}}>
                        Source station:
                          </Text>
                      <Text note style={{color: '#fff'}}>
                        {data.SourceStationName}
                      </Text>
                    </Row>

                    <Row>
                      <Text note style={{color: '#fff'}}>
                        Dest date:
                        </Text>
                      <Text note style={{color: '#fff'}}>
                        {moment(data.DestDate).format('DD/MM/YYYY HH:mm')}
                      </Text>
                    </Row>
                    <Row>
                      <Text note style={{color: '#fff'}}>
                        Dest station:
                    </Text>
                      <Text note style={{color: '#fff'}}>
                        {data.DestStationName}
                      </Text>
                    </Row>
                  </Grid>
                }
                body={
                  <Grid>
                    <Row>
                      <Col>
                        <Row>
                          <Text>
                            Job name
                    </Text>
                          <Left>
                            <Text note>
                              {data.JobName}
                            </Text>
                          </Left>
                        </Row>
                        <Row>
                          <Text note>
                            Code
                          </Text>
                          <Left>
                            <Text note>
                              {data.JobCode}
                            </Text>
                          </Left>
                        </Row>
                      </Col>
                      <Col>
                        <Row>
                          <Text note>
                            Customer
                        </Text>
                          <Left>
                            <Text note>
                              {data.CustomerName}
                            </Text>
                          </Left>
                        </Row>
                        <Row>
                          <Text note>
                            Dest station
                    </Text>
                          <Left>
                            <Text note>
                              {data.DestStationName}
                            </Text>
                          </Left>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Body />
                      <Button iconLeft transparent primary>
                        <Icon name='md-clipboard' />
                        <Text>Sign, receive goods</Text>
                      </Button>
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
