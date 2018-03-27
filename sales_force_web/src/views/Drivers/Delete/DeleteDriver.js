import React, { Component } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Form,
    FormGroup,
    FormText,
    abel,
    Input,
    Label,
} from 'reactstrap';
import BackButton from '../../Buttons/BackButton/BackButton';

export class DeleteDriver extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pathname: {}
        }
    }

    render() {

        const location = {
            pathname: '/deletedriver',
            state: { fromDashboard: true }
        }

        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <h4>Delete driver</h4>
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" >
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input" >Fistname</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Fistname</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Lastname</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Lastname</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Tel.</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Tel.</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Address</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Address</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">Vehicle driver type</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Vehicle driver type</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">No</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">No</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Expired date</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Expired date</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">Subscribe</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Subscribe</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Note</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <p className="form-control-static">Note</p>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs="12" md="6">
                                    <Button type="submit" color="success">Save</Button>{' '}
                                    <Button color="secondary">Cancel</Button>{' '}
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

export default DeleteDriver
