import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

export default class BackButton extends Component {
    render() {
        return (
            <Row>
                <Link to={'/customer'} ><Button color="primary">Back To List</Button></Link>
            </Row>
        )
    }
}
