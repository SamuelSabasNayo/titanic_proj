import React from 'react';
import Plotly from 'react-plotly.js';

const SexGraph = () => {
    var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
    }];
    
    var layout = {
        height: 400,
        width: 500
    };

    // return (
        // <div>
        //     <Plot
        //     data={[
        //         {
        //         x: [1, 2, 3],
        //         y: [2, 6, 3],
        //         type: 'scatter',
        //         mode: 'lines+markers',
        //         marker: {color: 'red'},
        //         },
        //         {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        //     ]}
        //     layout={ {width: 320, height: 240, title: 'SEX GRAPH'} }
        // />
        // </div>


        Plotly.newPlot('myDiv', data, layout);
    // )
}

export default SexGraph;
