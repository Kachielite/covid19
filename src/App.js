import React,{useState, useEffect} from 'react';
import Cards from './Components/Cards';
import Chart from './Components/Chart';
import CountrySelector from './Components/CountrySelector';
import Loading from './Components/Loading';
import covid19 from './covid.png'
import axios from 'axios'
import './App.css';


function App(props) {

  const [data, setData] = useState();
  const [dailyData, setDailyData] = useState()
  const [countries, setCountries] = useState()
  const [country, setCountry] = useState('Global')

  const [loading,setLoading] = useState(true);

  const onChange = e =>{
    setCountry(e.target.value)
  }


  const url = 'https://covid19.mathdro.id/api'

  const fetchData = async()=>{

    let changeUrl = url

    if(country!=='Global'){
      changeUrl = `${url}/countries/${country}` 
    }
    
    try {
      const res = await axios.get(changeUrl)

      console.log(res)
      setData(res.data)

      const res2 = await axios.get(`${url}/daily`)
      setDailyData(res2.data)

      const res3 = await axios.get(`${url}/countries`)
      setCountries(res3.data)
 
      } catch (error) {
          console.log('Error message: ', error);

      } finally {
      setLoading(false)
      }
      
  }

  useEffect(()=>{
    fetchData()
  },[country])

  console.log(data)
  return (
    <>
    {loading?<Loading/>:<div className="App">
      <div style={{display:'flex', justifyContent:'center', margin:'10px'}}>
        <img src={covid19} alt="covid-19" style={{width:'35%'}}/>
      </div>
      {data && <Cards fetchedData={data}/>}
      {countries && <CountrySelector fetchedCountries={countries} onChange={onChange}/>}
      {dailyData && <Chart fetchedDailyData={dailyData} fetchedData={data} country={country}/>}
    </div>}
    </>
  );
}

export default App;
