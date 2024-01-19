import React from 'react'
import Plot from 'react-plotly.js'

function ResTotals() {
    const trace1 = {
        x: ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Utilities'],
        y: [90, 40, 60, 70, 80],
        type: 'bar',
        name: 'Yesterday'
    };

    const trace2 = {
        x: ['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4', 'Utilities'],
        y: [10, 80, 45, 50, 60],
        type: 'bar',
        name: 'Today'
    };

    const data = [trace1, trace2];

    const layout = {
        title: 'Today Vs Yesterday',
        showlegend: true
    };

    const config = { displayModeBar: false };
    return (
        <div>

            <Plot
                data={data}
                layout={layout}
                config={config}
            />

        </div>
    )
}

export default ResTotals