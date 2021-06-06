import React,{useEffect,useState} from 'react';
import zomato from '../api/zomato'




export default () =>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async (searchTerm) =>{
        try{
            const response = await zomato.get(`/search?entity_id=4&entity_type=city&q=${searchTerm}`);
            setResults(response.data.restaurants);
            console.log(results)

        }catch(err){
            setErrorMessage('something went wrong')
        }
    }


useEffect(()=>{
    searchApi('pasta')
},[])

return [searchApi,errorMessage,results]
}