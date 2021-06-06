import React,{useState} from 'react'
import {Text,ScrollView} from 'react-native';

import SearchBar from "../components/SearchBar";
import useResults from '../hook/useResult';
import ResultList from '../components/ResultList'


const SearchScreen =() => {
    const [term,setTerm] = useState('');
    const [searchApi,errorMessage,results] = useResults();

    const filterResultsByPrice =(price) =>{
      return results.filter(result =>{
          return result.restaurant.price_range === price
      })
    }
    return (
        <>
        <SearchBar term = {term} 
        onTermChange ={setTerm}
        onTermSubmit ={()=> searchApi(term)} 
        />
         {errorMessage ?<Text>(errorMessage</Text> :null}
         <ScrollView>
         <ResultList results = {filterResultsByPrice(2)} title='Cost Effective'/>
         <ResultList  results = {filterResultsByPrice(3)} title='Bit Pricier' />
         <ResultList results = {filterResultsByPrice(4)} title='Big Spender '/>
         </ScrollView>
        </>
    )
}

export default SearchScreen
