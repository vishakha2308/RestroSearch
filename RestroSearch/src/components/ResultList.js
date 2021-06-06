import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import {withNavigation} from 'react-navigation'

const ResultList = ({title,results,navigation}) => {
    if(!results.length){
        return null;
    }
    return (
        <View styles ={styles.container}>
        <Text style = {styles.title}>{title}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator ={false}
        data= {results}
        keyExtractor ={result =>result.restaurant.id}
        renderItem ={({item}) =>{
            return(
                <TouchableOpacity 
                onPress ={() => navigation.navigate('ResultShow',{id:item.restaurant.id})} >
                <ResultsDetails  result ={item.restaurant}/>
                </TouchableOpacity>
            )
        }}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
})

export default withNavigation(ResultList)
