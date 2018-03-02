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

export class EditDriver extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pathname: {}
        }
    }

    componentDidMount() {
        this.state.pathname = this.props.location
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <h4>Edit driver</h4>
                    </CardHeader>
                    <CardBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" >
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input" >Fistname</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Lastname</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Tel.</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Address</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">Vehicle driver type</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Private car</option>
                                        <option value="2">Truck</option>
                                        <option value="3">Rickshaw</option>
                                        <option value="3">Dangerous goods transport car</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">No</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Expired date</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">Subscribe</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">1 Year</option>
                                        <option value="2">2 Year</option>
                                        <option value="3">Life time</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Note</Label>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input type="text" id="text-input" name="text-input"/>
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
                        <BackButton pathname={this.state.pathname} />
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default EditDriver
