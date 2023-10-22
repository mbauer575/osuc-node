import React from 'react'
import Plot from 'react-plotly.js'

function plotTest() {

  const [data ,setData] = useState([]);

  useEffect(() => {
    fetch('/api/testData')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  return (
    <Plot
        data={[
          {
            x: data.map((d)=> d.Time),
            y: data.map((d) => d.Server1_meter1_avg),
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },  
        ]}
        layout={{width: 320, height: 240, title: 'Test data'}}
      />
  )
}

export default plotTest