import * as React from 'react';
import {ScrollView,Image, TouchableOpacity, Text, View, StyleSheet,TextInput,Pressable } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
const firebase_endpoint="https://medplus-976c3-default-rtdb.asia-southeast1.firebasedatabase.app/";


function LoginScreen({navigation}){
const [email,setemail]=React.useState('');
const [password,setpassword]=React.useState('');
const [loggedin,setLoggedin]=React.useState('false');
const handleLogin=async()=>{
 const response = await fetch(`${firebase_endpoint}/Users.json`);
    const data = await response.json();
    for (var obj in data){ //iterating through all the objects
     // console.log(data[obj].email);  //getting email of each object
      var dbemail=data[obj].email.toLowerCase();
     // console.log(dbemail)
      var dbpass=data[obj].password.toLowerCase();
   //   console.log(dbpass)
   if(dbemail==email.toLowerCase() && dbpass==password.toLowerCase()){
        // alert("User Logged in successfully")   
         if(email.toLowerCase()==="admin@gmail.com"){
           console.log("Show admin Screen")
        
         }
         else{
           console.log("show user screen")
           navigation.navigate('Customer',{data:{id:obj, name:data[obj].name, email: email, password: password}
         }
    // console.log("User Logged in successfully")
  //  alert("User Logged in successfully")
   }
   else{
    console.log("Incorrect email or password.Try again")
   //  alert("Incorrect email")
     setemail('');
     setpassword('')
   }
}
}
    return (
        <View style={styles.container}>
         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name="plus" size={66} color='#00A651'/>
            </View>
            <Text style={styles.mediPlus}>
            MediPlus
            </Text>
         <Text style={{textAlign:"center",fontWeight:"bold"}}>Where your health comes first!</Text>
          <Text style={{textAlign:"center",marginBottom:40,marginTop:30}}>For all your prescription needs and more!</Text>
          <View>
    
            <Input
              containerStyle={styles.inputStyle}
              placeholder="Email"
              leftIcon={<Icon name="user" size={24} color="black" 
              />}
              value={email}
              onChangeText={val=>setemail(val)}

            />
            
          </View>
          <View>
            <Input
              containerStyle={styles.inputStyle}
              placeholder="Password"
              leftIcon={<Icon name="lock" size={18} color="black" />}
              secureTextEntry={true}
              value={password}
              onChangeText={val=>setpassword(val)}
            />
          </View>
       
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
              icon={<Icon name="check" size={15} color="white" />}
              title="Login"
              buttonStyle={{
                width: 100,
                justifyContent: 'center',
                backgroundColor: '#00A651',
                alignContent: 'center',
              }}
              onPress={() => handleLogin()}
            />
          <Button
              icon={<Icon name="check" size={15} color="white" />}
              title="Sign Up"
              buttonStyle={{
                width: 100,
                justifyContent: 'center',
                marginTop: 20,
                backgroundColor: '#00A651',
                alignContent: 'center',
              }}
              onPress={() => navigation.navigate('Signup')}
            />
            <Pressable style={{backgroundColor:"grey",color:"white",width:120,marginTop:10}} onPress={()=> navigation.navigate('Forgot Password')}>
  <Text> Forgot password </Text>
</Pressable>
          </View>

      </View>
      );
    }
    
    const styles = StyleSheet.create({
      //color:'#00A651'
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 8,
      },
     
    inputStyle:{
    //border:"1px solid green",
    borderWidth:2,
    borderColor:'#00A651',
    marginBottom:20,
    width:"80%",
    marginLeft:30,
    height:50,
    //alignSelf:"center",
    
    //width:174,
    },
      mediPlus:{
          color: "black",
          textAlign:"center",
          justifyContent:"center",
          fontSize:34,
          fontWeight:"bold"
    
      },
    });

export default LoginScreen;