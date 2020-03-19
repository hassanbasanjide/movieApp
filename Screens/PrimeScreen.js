import React,{  } from 'react';
import { Text,View,StyleSheet } from 'react-native';


const PrimeScreen=props=>{
    

    return(
        <View style={styles.container}>
            <Text>prime screen</Text>
        </View>
    );
}

const styles=StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(75,205,121)'
    }
});

export default PrimeScreen;