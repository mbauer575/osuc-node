import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'

function PlotTest({Floor_Name}) {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/ResHall/last24Hours')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <Plot
      data={[
        {
          x: data.map((d) => d.dateTime),
          y: data.map((d) => d[Floor_Name]),
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'red', size: 8 },
        },
      ]}
      layout={{
        autosize: true,
        title: '${Floor_Name} Energy Usage',
        xaxis: { title: 'Date and Time' },
        yaxis: { title: 'First Floor (watts)' },
        margin: { l: 50, r: 50, b: 50, t: 50, pad: 4 },
      }}
      useResizeHandler={true}
      style={{ width: "80%", height: "100%" }}
    />
  )
}

export default PlotTest