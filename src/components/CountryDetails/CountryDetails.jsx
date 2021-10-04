import { useParams,useHistory } from "react-router";
import { Typography, Box, Stack, Button, Paper, CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useState } from "react";
import axios from 'axios'
const CountryDetails = () => {
    const history = useHistory()
    const {name} = useParams()
    const [countryDetails, setCountryDetails] = useState([])
    const [loading,setIsLoading] = useState(false)
    
    
    let currencies
    let borderCountries
    let languages
    let countryPage
    useEffect(()=> {
        setIsLoading(true)
        axios.get(`https://restcountries.com/v2/name/${name}`)
        .then(res=>{
            setCountryDetails(res.data[0])
            setIsLoading(false)
            
        })
        .catch(err =>{
            console.log('catching error', err)
            window.location.replace('/rest-countries-api')
        })
    },[name,history])
    
    if (countryDetails.currencies) {
        currencies = countryDetails.currencies.map((currency) => <span key={currency.name}>{currency.name},</span>)
    }
    if (countryDetails.borders) {
        borderCountries = countryDetails.borders.map(border=>(
        <Paper
            key={border} 
            variant="elevation" 
            component="span" 
            sx={{
                margin:'5px',
                padding: '5px 10px',
            }}
        >
            {border}
        </Paper>
    ))
    }
    
    if (countryDetails.languages){
        languages = countryDetails.languages
        .map((language) => 
        <span key={language.name}>{language.name},</span>)
    }
    

    
    countryPage = (
    <Box sx={{
        padding: '30px 8%',
        height: '80vh'
    }}>
        <Button variant="contained" onClick={()=> history.push("/rest-countries-api")} startIcon={<ArrowBackIcon/>}>
            go back
        </Button>
    
        <Stack
            mt={10}
            spacing={10} 
            direction={{xs:"column",sm:"row"}}
            justifyContent="center"
            alignItems="center"
        >   
        <Box>
            <img src={countryDetails.flag} alt="" style={{
                width:'100%'
            }}/>
        </Box>

        
        <Box
            sx={{
                width:'100%'
            }}
        >
            
                <Typography variant="h5">
                    {countryDetails.name}
                </Typography>
                <Stack
                    sx={{width:'80%'}}
                    direction={{xs:"column", md:"row"}}  
                    justifyContent={{md:"space-between"}}    
                    alignItems={{md:'flex-start'}}
                >

                <Box>
                    
                    <Typography variant="subtitle2">
                        <b>Native Name:</b> {countryDetails.nativeName}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>Population:</b> {countryDetails.population}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>Region:</b> {countryDetails.region}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>Subregion:</b> {countryDetails.subregion}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>Capital:</b> {countryDetails.capital}
                    </Typography>
                </Box>
    
                <Box sx={{marginTop: 5,marginBottom: 5}}>
                    <Typography variant="subtitle2">
                        <b>Top Level Domain:</b> {countryDetails.topLevelDomain}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>Currencies:</b> {currencies}
                    </Typography>
                    <Typography variant="subtitle2">
                        <b>Languages:</b> {languages}
                    </Typography>
                </Box>
            </Stack>
            
            {borderCountries ? (
            <Box>
                <Typography variant="h5">
                    Border Countries:
                </Typography>
                <Stack direction="row" flexWrap="wrap">
                    {borderCountries}
                </Stack>
            </Box>
            ) : null}
        </Box>
        
    </Stack>
    </Box>
    );
    
    
     if (loading) {
        countryPage = (
            <div style={{
                display: loading ? 'flex' :'none',
                width: '100%',
                height: '80vh',
                justifyContent:"center",
                alignItems:'center'
            }}>
                {loading && <CircularProgress/>}
            </div>
        )
    }
    return countryPage
}
 
export default CountryDetails;