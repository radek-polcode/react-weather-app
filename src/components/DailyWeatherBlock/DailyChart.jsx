import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis } from 'recharts';

DailyChart.propTypes = {
  activeButtonChart: PropTypes.string.isRequired,
  selectedDateWeather: PropTypes.array.isRequired,
}

function DailyChart({ selectedDateWeather, activeButtonChart }) {
  const setChartFillColor = ({activeButtonChart}) => {
    switch (activeButtonChart) {
      case 'temperatureButton':
        return 'rgba(255, 204, 0, 0.2)'
      case 'pressureButton':
        return 'rgba(255, 204, 0, 0.2)'
      case 'windButton':
        return 'rgba(255, 204, 0, 0.2)'
      default:
        return 'rgba(255, 204, 0, 0.2)'
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
          fill='rgba(255, 204, 0, 0.2)'
          label={{ 
            fill: '#bababa',
            fontSize: '12',
            position: 'top'
          }}
          stroke='#ffcc00' 
          strokeWidth='2' 
          type='monotone' 
        />
      </AreaChart>
    </div>
  )
}

export default DailyChart
