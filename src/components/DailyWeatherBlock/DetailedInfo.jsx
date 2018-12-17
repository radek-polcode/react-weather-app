import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col, Row } from 'reactstrap';

import { createImageUrl } from '../../utils/createImageUrl';

function DetailedInfo({ currentDayWeather }) {
  const dayDescription = currentDayWeather['description']
  return (
    <Row>
      <Col xs="6">
        <div 
          style={{float: 'left'}}
        >
          <img src={createImageUrl('64', dayDescription)}></img>
        </div>
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

