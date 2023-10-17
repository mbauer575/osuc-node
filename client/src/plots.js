// Get a reference to the div where the graph will be displayed
const graphDiv = document.getElementById('graphdiv');




// Define the data for the graph
const data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 4, 2, 3, 5],
    type: 'scatter'
}];

// Define the layout for the graph
const layout = {
    title: 'My Plotly Graph'
};

// Create the graph using Plotly.newPlot()
Plotly.newPlot(graphDiv, data, layout);
