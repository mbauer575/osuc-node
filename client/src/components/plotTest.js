import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'

function plotTest() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/testData')
      .then((response) => response.json())
      .then((data) => {
        const processedData = data.map((d) => {
          const date = new Date(d.Date);
          const time = new Date(d.Time);
          const dateTime = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), time.getUTCHours(), time.getUTCMinutes(), time.getUTCSeconds());
          return {
            ...d,
            DateTime: dateTime,
          };
        });
        setData(processedData);
      });
  }, []);

  return (
    <Plot
      data={[
        {
          x: data.map((d) => d.DateTime),
          y: data.map((d) => d.First_Floor),
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red', size: 6 },
        },
      ]}
      layout={{
        autosize: true,
        title: 'Server1 Meter1 Average Over Time',
        xaxis: { title: 'Date and Time' },
        yaxis: { title: 'Server1 Meter1 Average' },
        margin: { l: 50, r: 50, b: 50, t: 50, pad: 4 },
      }}
      useResizeHandler={true}
      style={{ width: "80%", height: "100%" }}
    />
  )
}

export default plotTest