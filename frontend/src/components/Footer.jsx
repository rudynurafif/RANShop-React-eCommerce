import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const currentDate = new Date()

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>Rudy Asa Nurafif &copy; {currentYear}.{currentDate.getMonth() + 1}.{currentDate.getDate()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
