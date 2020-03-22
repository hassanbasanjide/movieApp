import React,{ useEffect } from 'react';
import { Text,View,StyleSheet,BackHandler, Alert, Button} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { give_movie_data } from '../store/actions/login';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import  RenderMovie from '../components/RenderMovie';


const PrimeScreen=props=>{
    const Dispatch=useDispatch();

    // useFocusEffect(()=>{
    //      const onBackPress=()=>{return false}

    //      BackHandler.addEventListener('hardwareBackPress', onBackPress);

     

    // },[])
    
//hhijokohbjbbibi
    const Recived_Data=useCallback(async()=>{

        try{
            await Dispatch(give_movie_data())
             }catch (err){
                 Alert.alert(err.message,"check your network please",[{text:'ok'}])
             }

    },[Dispatch])

    useEffect(()=>{
        Recived_Data();
    },[Recived_Data]);


    const movieData=useSelector(state=>state.store2.data);
  

    return(
        <View style={styles.container}>
           <FlatList data={movieData}  renderItem={itemData=>{
               
               return(
               <RenderMovie title={itemData.item.title} 
                imageUrl={itemData.item.poster_path}
                release_date={itemData.item.release_date}
                rate={itemData.item.vote_average}
               />
               )
           }}/>
          
        </View>
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'hsl(290, 20%, 20%)',
       // padding:10
    }
});

export default PrimeScreen;