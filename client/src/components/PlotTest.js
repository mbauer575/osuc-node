import React, { useState, useEffect } from 'react'
import Plot from 'react-plotly.js'
import '../styles/plots.css'
function PlotTest({ Floor_Name }) {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState('week');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/ResHall/last${timeRange}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length === 0) {
          throw new Error('No data available');
        }
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [timeRange]);

  const handleButtonClick = (range) => {
    setTimeRange(range);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <div className='timeSelect'>
        <button onClick={() => handleButtonClick('day')}>Day</button>
        <button onClick={() => handleButtonClick('week')}>Week</button>
        <button onClick={() => handleButtonClick('month')}>Month</button>
        <button onClick={() => handleButtonClick('year')}>Year</button>
      </div>
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
          title: 'Energy Usage',
          xaxis: { title: 'Date and Time' },
          yaxis: { title: 'Energy Usage' },
          margin: { l: 50, r: 50, b: 50, t: 50, pad: 4 },
        }}
        useResizeHandler={true}
        style={{ width: '80%', height: '100%' }}
      />
    </div>
  );
}

export default PlotTest;