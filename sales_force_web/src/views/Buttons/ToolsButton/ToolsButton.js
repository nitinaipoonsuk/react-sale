import React, { Component } from 'react'
import { Button } from 'reactstrap'

export class ToolsButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Button type="submit" color="success">Save changes</Button>{' '}
                <Button type="button" color="secondary">Cancel</Button>{' '}
            </div>
        )
    }
}

export default ToolsButton
