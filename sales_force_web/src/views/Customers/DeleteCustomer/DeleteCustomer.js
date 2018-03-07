import React, { Component } from 'react'
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    FormText,
    abel,
    Input,
    Label,
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from 'reactstrap';
import BackButton from '../../Buttons/BackButton/BackButton';

export class DeleteCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const location = {
            pathname: '/customer',
            state: { fromDashboard: true }
        }

        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <h4>Create Customer</h4>
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" >
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input" >FistName</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input" >FistName</Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">LastName</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">LastName</Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Tel.</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">Tel.</Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Address</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">Address</Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">Province</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">Province</Label>
                                </Col>
                            </FormGroup>  <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">District</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">District</Label>
                                </Col>
                            </FormGroup>  <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">SubDistrict</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">SubDistrict</Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Zipcode</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Label htmlFor="text-input">Zipcode</Label>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs="12" md="6">
                                    <Button color="danger">Delete</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <BackButton pathname={location} />
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default DeleteCustomer
