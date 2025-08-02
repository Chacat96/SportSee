import React from "react";
import { Rectangle } from "recharts";

/**
 * Curseur personnalisé pour LineChart : fond rouge semi-transparent
 */
const CursorLineChart = (props) => {
  
    const { points, width, height } = props;
    
    if (!points || points.length === 0) return null;
  
    const { x } = points[0];
    
    const chartHeight = 510;
    const rectangleWidth = width - x;
    return (
        <Rectangle
            fill="rgba(0, 0, 0, 0.1)"
            x={x} 
            y={0}
            width={rectangleWidth}
            height={chartHeight}
        />
    );
}

export default CursorLineChart;