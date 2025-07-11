import React from "react";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Legend,
    PieChart,
    Pie,
    Cell
  } from "recharts";
import '../styles/css/Charts.css';
import TooltipsSessions from "./TooltipsSessions";


function Charts ({averageSessionData, performanceData, scoredata}) {
    const formatDayLabel = (day) => {
        const dayMap = {
            1: 'L',
            2: 'M', 
            3: 'M', 
            4: 'J',
            5: 'V', 
            6: 'S',
            7: 'D' 
        };
        return dayMap[day] || day;
    };

    const formattedData = performanceData.data.map((item) => ({
        subject: performanceData.kind[item.kind],
        value: item.value,
      }));
    
      const scorePercent = scoredata * 100;
      const pieData = [
          { name: "Score", value: scorePercent },
          { name: "Reste", value: 100 - scorePercent },
      ];

    return (
        <>
        <div className="charts">
            <div className="charts__averageSession">
                <h3 className="charts__averageSession__title">Durée moyenne des <br />sessions</h3>
                <LineChart width={300} height={210} data={averageSessionData.sessions}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="none" vertical={false} horizontal={false}/>
                <XAxis dataKey="day" axisLine={false} tickMargin={10} tickLine={false} tickFormatter={formatDayLabel} tick={{fill: 'white', opacity: 0.5}}/>
                <YAxis hide= {true} dot= {false} />
                <Tooltip content={<TooltipsSessions/>}/>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFF" />
                </LineChart>    
            </div>

            <div className="charts__performance">
                <RadarChart outerRadius={70} width={300} height={290} data={formattedData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{fill: 'white'}} />
                <Radar name="Performance" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
                </RadarChart>
            </div>

            <div className="charts__score">
                <h3 className="charts__score__title">Score</h3>
                <div className="charts__score__circle">
                    <PieChart width={300} height={250}>
                    <Pie 
                data={pieData} 
                dataKey="value" 
                nameKey="name" 
                cx="50%" 
                cy="50%" 
                outerRadius={80} 
                innerRadius={70} 
                startAngle={90} 
                endAngle={450}
                cornerRadius={10}
            >
                {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? "#FF0000" : "rgba(255, 255, 255, 0.1)"} />
                ))}
            </Pie>
                    </PieChart>
                    <div className="charts__score__percentage">
                        <p><span>{Math.round(scorePercent)}% </span><br />de votre <br /> objectif</p>
                    </div>
                </div>
               
            </div>
            
        </div>
        </>
    )
}

export default Charts;