import React from 'react'
import PropTypes from 'prop-types'
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

DailyChart.propTypes = {
  currentDayWeather: PropTypes.object.isRequired
}

function DailyChart({ currentDayWeather }) {
  const hours = {
    "12AM": '',
    "3AM": '',
    "6AM": '',
    "9AM": '',
    "12PM": '',
    "3PM": '',
    "6PM": '',
    "9PM": ''
  }
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
        data={chartObjects}
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
          dataKey='temp_val' 
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
