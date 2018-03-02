import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';

export default class BackButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pathname: {}
        }
    }

    componentWillReceiveProps(nextProps) {    
        this.state.pathname = nextProps.pathname     
    }


    render() {
        return (
            <Row>
                <Link to={'this.state.pathname'} ><Button color="primary">Back To List</Button></Link>
            </Row>
        )
    }
}
