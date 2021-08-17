import React from 'react';
import Plot from 'react-plotly.js';


const SurvivalRate = () => {
    return (
        <div>
            <Plot
            data={[
                {
                    x: [1, 2, 3],
                    y: [38.38383838383838, 12.2334455667789, 26.150392817059483],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'grey'},
                },
            ]}
            layout={ {width: 500, height: 450} }
            />
        </div>
    )
}

export default SurvivalRate;
