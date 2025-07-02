import '../styles/css/TooltipsSessions.css';

const TooltipsSessions = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltipsSessions" >
                <p >{payload[0].value}min</p>
            </div>
        );
    }

    return null;
};


export default TooltipsSessions;