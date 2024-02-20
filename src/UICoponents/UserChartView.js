import React from "react";
import './UserChartView.scss';
import userGraph from '../Images/Graph.png'

export default function UserChartView() {

	return (
		<img className="chart-image" src={userGraph} alt="user-chart"></img>
	);
}
