import '../styles/css/TooltipsActivity.css';

const TooltipsActivity = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltipsActivity" >
                <p >{payload[0].value}kg</p>
                <p>{payload[1].value}kCal</p>
            </div>
        );
    }

    return null;
};


export default TooltipsActivity;