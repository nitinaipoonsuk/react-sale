import React, { Component } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import BackButton from '../../Buttons/BackButton/BackButton';
import { From } from '../Form/Form';

export class EditCustomer extends Component {
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
                        <h4>Edit Customer</h4>
                    </CardHeader>
                    <CardBody>
                        <From />
                    </CardBody>
                    <CardFooter>
                        <BackButton pathname={location} />
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default EditCustomer
