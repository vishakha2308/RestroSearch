import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';

const ResultsDetails = ({result}) => {
    return (
        <View style = {styles.container}>
       <Image style ={styles.image} source ={{uri:result.thumb}}/>
       <Text styles = {styles.name}>{result.name}</Text>
       <Text>
           {result.user_rating.aggregate_rating} Stars, {result.all_reviews_count} Reviews
       </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    marginLeft:15
    },
    image:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5

    },
    name:{
        fontWeight: 'bold'
    }
})

export default ResultsDetails
