import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    Button, 
    KeyboardAvoidingView, 
    Dimensions, 
    Alert,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import {Input} from 'react-native-elements' 
import {Ionicons} from '@expo/vector-icons' 
import { transformd_entered_data } from '../store/actions/login';
import {  } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@react-navigation/native';

const Login=props=>{

    const [username,setusername]=useState();
    const [password,setpassword]=useState();
    const Dispatch=useDispatch();
    //const test=useSelector(state=>state.store1);
    //console.log(test)

    const userNameChangeHandler = inputText => {
        setusername(inputText.replace(/ /g, ''))
    }
    
   const passwordChangeHandler = inputText => {
       setpassword(inputText.replace(/ /g, ''))
   }
  
    

    const submit= async(usename,pass)=>{
      
        try{
        await Dispatch(transformd_entered_data(usename,pass));
        props.navigation.navigate('primeScreen');
   
        }catch(error) {
            Alert.alert("Some thing is Wrong",'Please Enter Correctly.',[{text:'okay'}])
        }
        
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" keyboardVerticalOffset={10}>
            <View style={styles.container}>
            <Input 
                    containerStyle={styles.input} 
                    value={username}  
                    onChangeText={userNameChangeHandler} 
                    placeholder=" UserName"
                    inputStyle={styles.inputText}
                    leftIcon={
                        <Ionicons name='ios-person' color="white" size={24} />
                    }
                    label="Enter your user name"
                />
            <Input  
                    containerStyle={styles.input} 
                    value={password}  
                    onChangeText={passwordChangeHandler}  
                    placeholder=" Password"
                    inputStyle={styles.inputText}
                    leftIcon={
                        <Ionicons name='ios-lock' color="white" size={24} />
                    }
                    label="Enter Password"
                    secureTextEntry={true}
                    blurOnSubmit

                />
                <View style={styles.button}>
                    <Button  title="Login" color="#ff4d4d"  onPress={submit.bind(this,username,password)}/>
                </View>
            </View>
            </KeyboardAvoidingView>
       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'hsl(290, 20%, 20%)',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input:{
        height:Dimensions.get('screen').height*0.06,
        width:'90%',
        margin:20
    },
    button: {
        width: '85%',
        marginTop: 20
    },
    inputText: {
        color: 'white',
        marginLeft: 7
    }
  });

  export default Login;
  