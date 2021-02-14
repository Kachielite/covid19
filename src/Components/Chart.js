import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Line, Bar} from 'react-chartjs-2';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display:'flex',
    justifyContent:'center',

  },
  chart: {
    width:'63%',
    '@media (max-width: 450px)' : {
      width: '100%',
      height:'100%'
    }

  },
  
}));


const Chart = ({fetchedDailyData, loading, fetchedData, country}) => {

  const classes = useStyles();

  const confirmed = fetchedDailyData.map((item)=>item.confirmed.total)
  const deaths = fetchedDailyData.map((item)=>item.deaths.total)
  const date = fetchedDailyData.map((item=>item.reportDate))

  const data = {
    labels: date,
    datasets:[{
      label: 'Infected',
      fill: true,
      borderColor: 'yellow',
      data: confirmed
    },{
      label: 'Deaths',
      fill: true,
      borderColor: 'red',
      data: deaths
    }]
  }

  const dataBar = {
    labels: ['Infected','Recovered','Death'],
    datasets:[{
      label: 'People',
      backgroundColor:['yellow','blue','red'],
      data: [fetchedData.confirmed.value, fetchedData.recovered.value, fetchedData.deaths.value]
    }],
  }

  const optionBar ={
    legend:{display:false},
    title:{display: true, text:`Current state in ${country}`},
  }
  
  console.log(loading)
    return (
      <div className={classes.root}>
      <div className={classes.chart} >
              {country!=='Global'?<Bar data={dataBar} options={optionBar}/>:<Line data={data} />}
      </div>
      </div>
    )
}

export default Chart

