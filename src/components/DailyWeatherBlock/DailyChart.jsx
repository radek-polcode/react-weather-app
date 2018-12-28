import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';

DailyChart.propTypes = {
  currentDayWeather: PropTypes.object.isRequired,
  currentDateTimeWeather: PropTypes.object.isRequired
}

function DailyChart({ currentDayWeather, selectedDateWeather }) {
  let chartObjects = []
  const hours2 = ["12AM", "3AM", "6AM", "9AM", "12PM", "3PM", "6PM", "9PM"]
  const temps = currentDayWeather['temperature']['hourly']
  hours2.forEach(function(key, index) {
    chartObjects.push({
      'hour': key,
      'temp_val': temps[index]
    })
  })

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
