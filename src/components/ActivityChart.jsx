import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer

  } from "recharts";
import '../styles/css/ActivityChart.css';
import TooltipsActivity from "./TooltipsActivity";


function ActivityChart ({data}) {
    return (
        <>
        <div className="activityChart">
            <div className="activityChart__title">
                <h2>Activité quotidienne</h2>
                <div className="activityChart__title__legend">
                    <span className="activityChart__title__legend__colorBlack"></span><p>Poids (kg)</p>
                    <span className="activityChart__title__legend__colorRed"></span><p>Calories brûlées (kCal)</p>
                </div>
            </div>
            
            <BarChart width={900} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="day" tickFormatter={(_, index) => index + 1} axisLine={false}  tickLine={false} tickMargin={10}/>
            <YAxis orientation="right" axisLine={false}  tickLine={false} tickMargin={10}/>
            <Tooltip content={<TooltipsActivity />}           
            />
            <Bar dataKey="kilogram" fill="#dark" radius={[10, 10, 0, 0]}/>
            <Bar dataKey="calories" fill="#FF0000" radius={[10, 10, 0, 0]}/>
            </BarChart>
        </div>
        </>
    )
}

export default ActivityChart;