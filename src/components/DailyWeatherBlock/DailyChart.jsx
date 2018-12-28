import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis } from 'recharts';

DailyChart.propTypes = {
  currentDateTimeWeather: PropTypes.object.isRequired
}

function DailyChart({ selectedDateWeather }) {
  return (
    <div>
      <AreaChart 
        data={selectedDateWeather}
        height={120} 
        margin={{ top: 15 }}
        width={600} 
      >
        <XAxis
          axisLine={false}
          dataKey="hour"
          interval="preserveStartEnd"
          padding={{ left: 10, right: 10 }}
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
          dataKey='temp' 
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
