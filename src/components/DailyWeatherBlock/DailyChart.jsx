import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis } from 'recharts';

DailyChart.propTypes = {
  activeButtonChart: PropTypes.string.isRequired,
  selectedDateWeather: PropTypes.array.isRequired,
}

function DailyChart({ selectedDateWeather, activeButtonChart }) {
  const setChartFillColor = () => {
    switch (activeButtonChart) {
      case 'temperatureButton':
        return {
          'fill': 'rgba(255, 204, 0, 0.2)',
          'stroke': '#ffcc00'
        }
      case 'pressureButton':
        return {
          'fill': 'rgba(0, 97, 255, 0.2)',
          'stroke': '#0092ff'
        }
      case 'windButton':
        return {
          'fill': 'rgba(138, 141, 146, 0.4)',
          'stroke': '#65696F'
        }
      default:
        return {
          'fill': 'rgba(255, 204, 0, 0.2)',
          'stroke': '#ffcc00'
        }
    }
  }
  
  return (
    <div>
      <AreaChart 
        data={selectedDateWeather}
        height={120} 
        margin={{ top: 25 }}
        width={600} 
      >
        <XAxis
          axisLine={false}
          dataKey="hour"
          interval="preserveStartEnd"
          padding={{ left: 25, right: 25 }}
          minTickGap={0}
          tickLine={false}
          tick={{
            stroke: '#bababa',
            fontSize: 10,
          }}
        />
        <Area
          animationDuration={500}
          animationEasing='ease-in'
          dataKey='value' 
          fill={setChartFillColor().fill}
          label={{ 
            fill: '#bababa',
            fontSize: '12',
            position: 'top'
          }}
          stroke={setChartFillColor().stroke} 
          strokeWidth='2' 
          type='monotone' 
        />
      </AreaChart>
    </div>
  )
}

export default DailyChart
