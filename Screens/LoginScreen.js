import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput, Button, KeyboardAvoidingView, Dimensions, Alert} from 'react-native';
import { transformd_entered_data } from '../store/actions/login';
import {  } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

const Login=props=>{

    const [username,setusername]=useState();
    const [password,setpassword]=useState();
    const Dispatch=useDispatch();
    const test=useSelector(state=>state.store1);
    console.log(test)
    
   
  
    

    const submit= async(usename,pass)=>{
      
        try{
        await Dispatch(transformd_entered_data(usename,pass));
        props.navigation.navigate('primeScreen');
   
        }catch(error) {
            Alert.alert("Some thing is Wrong",'Please Enter Correctly.',[{text:'okay'}])
        }
        
    }


    return(
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={10}>

       
        <View style={styles.container}>
            
           <TextInput style={styles.input} value={username}  onChangeText={username=>setusername(username)} placeholder=" UserName"/>
           <TextInput  style={styles.input} value={password}  onChangeText={password=>setpassword(password)}  placeholder=" Password"/>
           <Button  title="Login" color="darkgreen" onPress={submit.bind(this,username,password)}/>
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(192,192,192,0.4)',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input:{
        height:Dimensions.get('screen').height*0.06,
        width:'90%',
        borderWidth:1,
        margin:10
    }
  });

  export default Login;
  