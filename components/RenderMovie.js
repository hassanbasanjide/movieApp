import React,{ useEffect, useCallback, version } from 'react';
import { Text,View,StyleSheet, Button, Dimensions,FlatList,TouchableOpacity,TouchableWithoutFeedback,Platform} from 'react-native';
import { Image } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons' 
import Star from './Star';




 const RenderMovie=props=>{

    let TouchComponenets;
if(Platform.OS==='android'&& version>21){
    TouchComponenets=TouchableOpacity;
}else{
    TouchComponenets=TouchableWithoutFeedback;
}


  
    
    

    return(
       

       
        <View>
             <View style={styles.imageContainer}>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${props.imageUrl}`}}
               style={styles.poster}
                />
            </View>
            <TouchComponenets onPress={props.detailFunc}>
        <View style={styles.container}>
            <View style={{flexDirection:'column',marginVertical:8,marginLeft:170}}>
            <Text numberOfLines={2} style={{color:'white',fontSize:17,
            width:Dimensions.get('screen').width*0.3}}>{props.title}</Text>
            <Text numberOfLines={1} style={{color:'white',fontSize:14,
            width:Dimensions.get('screen').width*0.3}}>{props.release_date}</Text>
              
            <View style={{marginTop:7}}>
            <Text style={{color:'gold',fontSize:24,marginRight:5}}>{props.rate}</Text>
            </View>
            <View style={{marginTop:7,flexDirection:'row'}}>

                <Star popularity={props.rate} size={25}/>
            </View>
            
            

           
            </View>
         
        </View>
        </TouchComponenets>
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
       
        height:Dimensions.get('screen').height*0.01,
        paddingLeft:15,
        marginTop:8
    
    },
    star:{
        
        justifyContent:'center',
        marginLeft:3
    }
})

export default RenderMovie;


