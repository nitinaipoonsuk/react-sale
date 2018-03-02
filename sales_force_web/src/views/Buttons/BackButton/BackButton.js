import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

export default class BackButton extends Component {

    componentDidMount(){
        console.log("ComponentWillReceiveProps")
        console.log(this.props.pathname)
    }

    render() {
        return (
            <Row>
                <Link to={this.props.pathname} ><Button color="primary">Back To List</Button></Link>
            </Row>
        )
    }
}
