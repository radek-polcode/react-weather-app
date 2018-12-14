import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';

function DetailedInfo(props) {
  return (
    <Row>
      <Col xs="6">
        <div style={{float: 'left'}}>Image</div>
        <div style={{float: 'right'}}>Temperature</div>
      </Col>
      <Col xs="6">
        <p>Precipitation</p>
        <p>Humidity</p>
        <p>Wind</p>
        <ButtonGroup>
          <Button size="sm">Temperature</Button>
          <Button size="sm">Precipitation</Button>
          <Button size="sm">Wind</Button>
        </ButtonGroup>
      </Col>
    </Row>
  )
}

DetailedInfo.propTypes = {

}

export default DetailedInfo

