import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign:'center',
      padding: theme.spacing(2),
      margin: 'auto',
    },
    cardRoot: {
        minWidth: 30,
        maxWidth:210,
        height:140,
        margin: '10px  20px',
        textAlign:'center',
        '@media (max-width: 450px)' : {
            maxWidth:130,
            height:100,
            fontSize:'0.5rem',
          }
    },
    title:{
        '@media (max-width: 450px)' : {
            fontSize:'0.9rem',
          }
    },
    figure:{
        '@media (max-width: 450px)' : {
            fontSize:'1.2rem',
          }
    }

  }));
  

const Cards = ({fetchedData, loading}) => {

    const classes = useStyles();


    return (
        <React.Fragment >
        <div className={classes.root}>
                <Grid container spacing={3} justify="center">
                        <Grid  item xs={12} md={12} spacing={3}>
                                    <Typography   gutterBottom className={classes.title}>
                                        Last Update: {fetchedData.lastUpdate = new Date(Date.now()).toLocaleString()}
                                    </Typography>
                        </Grid>
                </Grid>  
            <Grid container spacing={3} justify="center">
                <Grid  item xs={12} md={4} component={Card} className={classes.cardRoot} style={{borderBottom:'10px solid yellow'}}>
                            <Typography variant='h6'  gutterBottom className={classes.title}>
                                Infected
                            </Typography>
                            <Typography variant='h4'  gutterBottom className={classes.figure}>
                                <CountUp
                                    end={fetchedData.confirmed.value}
                                    duration={2}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant='p'  gutterBottom className={classes.title}>
                                People
                            </Typography>
                </Grid>
                <Grid  item xs={12} md={4} component={Card} className={classes.cardRoot} style={{borderBottom:'10px solid blue'}}>
                            <Typography variant='h6'  gutterBottom className={classes.title}>
                                Recovered
                            </Typography>
                            <Typography variant='h4'  gutterBottom className={classes.figure}>
                                <CountUp
                                    end={fetchedData.recovered.value}
                                    duration={2}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant='p'  gutterBottom className={classes.title}>
                                People
                            </Typography>
                </Grid>
                <Grid  item xs={12} md={4} component={Card} className={classes.cardRoot} style={{borderBottom:'10px solid red'}}>
                            <Typography variant='h6'  gutterBottom className={classes.title}>
                                Death
                            </Typography>
                            <Typography variant='h4'  gutterBottom className={classes.figure}>
                                <CountUp
                                    end={fetchedData.deaths.value}
                                    duration={2}
                                    separator=','
                                />
                            </Typography>
                            <Typography variant='p'  gutterBottom className={classes.title}>
                                People
                            </Typography>
                </Grid>
            </Grid>      
        </div>
        </React.Fragment>
    )
}

export default Cards
