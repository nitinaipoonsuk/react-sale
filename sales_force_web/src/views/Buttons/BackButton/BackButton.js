import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

export default class BackButton extends Component {

    componentDidMount() {
        console.log("componentDidMount")
        console.log(this.props.pathname)
    }

    componentWillReceiveProps(nextProps) {
        console.log("ComponentWillReceiveProps")
        console.log(nextProps)
    }


    render() {
        return (
            <Row>
                <Link to={'/customer/create'} ><Button color="primary">Back To List</Button></Link>
            </Row>
        )
    }
}
