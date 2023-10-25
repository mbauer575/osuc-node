import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Toggle, RadioGroup, Radio } from 'rsuite';
import '../styles/plots.css';


function PlotTest() {
  const [data, setData] = useState([]);
  const [timeRange, setTimeRange] = useState('day');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedData, setSelectedData] = useState({
    First_Floor: true,
    Second_Floor: true,
    Third_Floor: true,
    Fourth_Floor: true,
  });

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

  const handleTimeRangeChange = (value) => {
    setTimeRange(value);
  };

  const handleToggleChange = (floor) => {
    setSelectedData((prevState) => ({
      ...prevState,
      [floor]: !prevState[floor],
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const selectedTrace = Object.entries(selectedData)
    .filter(([_, value]) => value)
    .map(([key, _]) => ({
      x: data.map((d) => d.dateTime),
      y: data.map((d) => d[key]),
      type: 'scatter',
      mode: 'lines',
      name: key,
      marker: { color: 'red', size: 8 },
    }));

  return (
    <div>
      <div className='timeSelect'>
      <RadioGroup
          inline
          value={timeRange}
          onChange={handleTimeRangeChange}
        >
          <Radio value='day'>Day</Radio>
          <Radio value='week'>Week</Radio>
          <Radio value='month'>Month</Radio>
          <Radio value='year'>Year</Radio>
        </RadioGroup>
      </div>
      <div className='floorSelect'>
        <label>
          <Toggle
            checked={selectedData.First_Floor}
            onChange={() => handleToggleChange('First_Floor')}
          />
          First Floor
        </label>
        <label>
          <Toggle
            checked={selectedData.Second_Floor}
            onChange={() => handleToggleChange('Second_Floor')}
          />
          Second Floor
        </label>
        <label>
          <Toggle
            checked={selectedData.Third_Floor}
            onChange={() => handleToggleChange('Third_Floor')}
          />
          Third Floor
        </label>
        <label>
          <Toggle
            checked={selectedData.Fourth_Floor}
            onChange={() => handleToggleChange('Fourth_Floor')}
          />
          Fourth Floor
        </label>
        <label>
            <Toggle
                checked={selectedData.Utilities}
                onChange={() => handleToggleChange('Utilities')}
            />
            Utilities
        </label>
      </div>
      <Plot
        data={selectedTrace}
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