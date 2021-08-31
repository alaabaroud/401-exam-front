import React, { Component } from 'react'
import {Card, Button, Container, Row, Col, Modal, Form,} from 'react-bootstrap'

export class FavModal extends Component {
    render() {
        return (
            <div>
                <Modal show= {this.props.Showmodal} onHide= { this.props.close}>
  <Modal.Header closeButton>
    <Modal.Title>Update</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form onSubmit={(e) => this.props.UpdateFav(e)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>ail addressEm</Form.Label>
    <Form.Control type="text" name= "title" defaultValue={this.props.UpdateData.title} />
    <Form.Control type="text" name= "description" defaultValue={this.props.UpdateData.description} />
    <Form.Control type="text" name= "toUSD"defaultValue={this.props.UpdateData.toUSD} />
    <Form.Control type="img" name= "image_url" defaultValue={this.props.UpdateData.image_url} />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Button variant="primary">Save changes</Button>
  </Modal.Body>

</Modal>
            </div>
        )
    }
}

export default FavModal
