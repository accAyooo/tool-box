import React from 'react';

// bootstrap btns
import {ButtonToolbar, Button} from 'react-bootstrap';

// bootstrap navbar
import {Navbar} from 'react-bootstrap';

class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Tools-box</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <ButtonToolbar>
                    <Button>primary</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Login;