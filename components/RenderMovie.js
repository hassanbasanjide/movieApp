import React,{ useEffect, useCallback } from 'react';
import { Text,View,StyleSheet, Button, Dimensions,FlatList} from 'react-native';
import { Image } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons' 




 const RenderMovie=props=>{


    let vote_Star_Array=[];
    const Vote_star_handler=useCallback((rate)=>{
        const star_number=Math.ceil(rate/2);
        for (let index = 0; index < star_number; index++) {
            
            vote_Star_Array.push(index.toString());

        }
     
        console.log(vote_Star_Array)
    })

    useEffect(()=>{
        Vote_star_handler(props.rate);
    },[Vote_star_handler]);



    return(
        <View>
             <View style={styles.imageContainer}>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${props.imageUrl}`}}
               style={styles.poster}
                />
            </View>
        <View style={styles.container}>
            <View style={{flexDirection:'column',marginVertical:8,marginLeft:170,borderWidth:1}}>
            <Text numberOfLines={2} style={{color:'white',fontSize:17,
            width:Dimensions.get('screen').width*0.3}}>{props.title}</Text>
            <Text numberOfLines={1} style={{color:'white',fontSize:14,
            width:Dimensions.get('screen').width*0.3}}>{props.release_date}</Text>
              
            <View style={{marginTop:7,borderWidth:1}}>
            <Text style={{color:'gold',fontSize:20,marginRight:5}}>{props.rate}</Text>
            </View>
            <View style={{marginTop:7,flexDirection:'row',borderWidth:1}}>
                <FlatList data={vote_Star_Array} horizontal={true} renderItem={itemData=>{
                    return(
                        <Ionicons name="ios-star" color="gold"/>
                    )
                }}/>
            </View>
         
            

           
            </View>
         
        </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
       backgroundColor:'rgba(172,0,172,0.1)',
        flexDirection:'row',
        height:Dimensions.get('screen').height*0.22,
        width:Dimensions.get('screen').width*0.9,
        marginVertical:25,
        shadowColor:'black',
        shadowRadius:20,
        elevation:2,
        borderRadius:10,
    
    
    },
    poster:{
        height:Dimensions.get('screen').height*0.25,
        width:Dimensions.get('screen').width*0.4,
        
        
    },
    imageContainer:{
       // borderWidth:1,
        borderColor:'white',
        height:Dimensions.get('screen').height*0.01,
        paddingLeft:15,
        marginTop:8
    
    }
})

export default RenderMovie;


