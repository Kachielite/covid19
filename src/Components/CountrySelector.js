import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NativeSelect, FormControl} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

  },
  select: {
      display:'flex',
      justifyContent:'center',
      width:'38%'
  },
}));

const CountrySelector = ({fetchedCountries,onChange}) => {

  const classes = useStyles();
  const countries = fetchedCountries.countries.map((item)=> item.name)

  console.log(countries)

    return (
        <>
          <FormControl className={classes.root}>
            <NativeSelect className={classes.select} defaultValue='Global' onChange={onChange}>
              <option value="Global">Global</option>
              {countries.map((item)=><option value={item}>{item}</option>)}
            </NativeSelect>
          </FormControl>  
        </>
    )
}

export default CountrySelector
