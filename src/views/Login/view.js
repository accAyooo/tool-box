import React from 'react';
import {loginPanelStyle} from './style.js'

// bootstrap btns
import {ButtonToolbar, Button} from 'react-bootstrap';

// bootstrap navbar
import {Navbar, Nav, NavItem} from 'react-bootstrap';

// bootstrap form
import {FormGroup, InputGroup,FormControl, ControlLabel, Modal } from 'react-bootstrap';


class Login extends React.Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">Tools-box</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

                <div className="login-panel" style={loginPanelStyle }>
                    <Modal.Dialog style={{marginTop: "200px"}}>
                        <Modal.Header>
                            <Modal.Title>用户登录</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form action="">
                                <FormGroup>
                                    <ControlLabel>账号：</ControlLabel>
                                    <FormControl type="text" />
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>密码：</ControlLabel>
                                    <FormControl type="text" />
                                </FormGroup>
                            </form>

                        </Modal.Body>

                        <Modal.Footer>
                            <ButtonToolbar>
                                <Button style={{marginLeft: "20px"}}>&nbsp;登录&nbsp;</Button>
                            </ButtonToolbar>
                        </Modal.Footer>

                    </Modal.Dialog>

                </div>

            </div>
        )
    }
}

export default Login;