import React, { Component } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'


export class ApiCards extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row md = {3}>
                        {this.props.ApiData.map((i, n) => (
                            <Col key= {n}> 
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {i.image_url} />
  <Card.Body>
    <Card.Title>{i.title}</Card.Title>
    <Card.Text>
      {i.description}
    </Card.Text>
    <Button variant="primary" onClick = { () => this.props.addFav(i)}>add to favorite </Button>
  </Card.Body>
</Card>
</Col>
        ))}
                        
</Row> 
</Container>
            </div>
        )
    }
}

export default ApiCards
