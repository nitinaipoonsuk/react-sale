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

export class Create extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
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
                                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">LastName</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Tel.</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Address</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">Province</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </Input>
                                </Col>
                            </FormGroup>  <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">District</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </Input>
                                </Col>
                            </FormGroup>  <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="select">SubDistrict</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="select" name="select" id="select">
                                        <option value="0">Please select</option>
                                        <option value="1">Option #1</option>
                                        <option value="2">Option #2</option>
                                        <option value="3">Option #3</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5" align="right">
                                    <Label htmlFor="text-input">Zipcode</Label>
                                </Col>
                                <Col xs="12" md="3">
                                    <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col xs="12" md="6">
                                    <Button type="submit" color="success">Save changes</Button>{' '}
                                    <Button color="secondary">Cancel</Button>{' '}
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                    <CardFooter>
                        <BackButton />
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default Create
