import React, {useState, useEffect} from "react";
import {UserData} from './data';
import {Line} from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
LineElement,
Title,
Legend,
Tooltip,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Legend,
    Tooltip,
);


function Chart() {

    const [UserData, setUserData] = useState({
          datasets:[],
    });

    const [userOptions, setUserOptions] = useState({});

    useEffect(() =>{
      setUserData({
          labels: ["x", "y"], 
        datasets: [{
            label: "G",
            data:  [10,15],
            backgroundColor: ["red"],
        },],
      });
      setUserOptions({});
    },
    []);


  return (
      <div className = "App"> 
        <div style = {{width: 700}}>
          <Line options = {userOptions}/>
         <Line data = {UserData}/>
         </div>
      </div>
  );
}

export default Chart;