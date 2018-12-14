import React from 'react'
import PropTypes from 'prop-types'

import { Col, Row } from 'reactstrap';

function OverallInfo(props) {
  return (
    <Row>
      <Col>
        <h2>Barcelona, Spain</h2>
        <p>Friday</p>
        <p>Partly Cloudy</p>
      </Col>
    </Row>
  )
}

OverallInfo.propTypes = {

}

export default OverallInfo

