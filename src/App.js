import React, { useState, useEffect } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import './App.css';
import { fetchData } from './api';
import covid from './images/covid.png'

function App(){ 
        const [data, setData] = useState('');
        const [country, setCountry] = useState('');

        const handleCountry = async(country) => {
            const fetchedData = await fetchData(country);
            setCountry(country);
            setData(fetchedData)
        }

        useEffect(() => {
            const fetchAPI = async() => {
                setData(await fetchData());
            }
            fetchAPI()
        }, []);// be careful while using async inside useEffect

        return(
            <div className='container'>
                <img src={covid} alt="corona virus" className='corona' />
                <Cards data={data}/>
                <CountryPicker handleCountry={handleCountry}/>
                <Chart data={data} country={country}/>
            </div>
        )
    
 }

 export default App;