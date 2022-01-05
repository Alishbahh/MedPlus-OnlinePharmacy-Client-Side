import * as React from 'react';
import {ScrollView,Image, TouchableOpacity, Text, View, StyleSheet,TextInput } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
const firebase_endpoint="https://medplus-976c3-default-rtdb.asia-southeast1.firebasedatabase.app/";

function Forgotpass({navigation}){
  const [email,setemail]=React.useState('');
  const [newpassword,setnewpassword]=React.useState('');
  var dbemail; //User enters email,if email exists,password reset
  var dbname;

  const handlepass=async()=>{ //VeriFies whether email exists
      const response = await fetch(`${firebase_endpoint}/Users.json`);
     const data = await response.json();
     for (var obj in data){
         var dbemail=data[obj].email.toLowerCase();
         if(dbemail==email.toLowerCase()){
              console.log("email exists");
              dbname=data[obj].name;
           
              var val=obj;
              resetpass(val); //passing id
         }
         else{
         //  console.log("user doesn't exist")
         }
     }
  }

  const resetpass=(val)=>{
    const id = val;
    var requestOptions = {
      method: 'PATCH',
      body: JSON.stringify({
         name: dbname,
        email: email,
       password: newpassword,
      }),
    };

    fetch(`${firebase_endpoint}/Users/${id}.json`, requestOptions)
      .then((response) => response.json())
      .then((result) =>{ console.log(result)
      alert("password updated")
      setemail(''),
      setnewpassword('')
      }
      )
      .catch((error) => console.log('error', error));
  };
  
  return(
  <View style={styles.container}>
         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name="plus" size={66} color='#00A651'/>
            </View>
            <Text style={styles.mediPlus}>
            MediPlus
            </Text>
         <Text style={{textAlign:"center",fontWeight:"bold",marginBottom:40}}>Where your  health comes first!</Text>
         <TextInput style={styles.textinput}
         placeholder="Email"
         value={email}
          onChangeText={val=>setemail(val)}
          />
         
          <TextInput style={styles.textinput}
         placeholder="new Password"
         value={newpassword}
              onChangeText={val=>setnewpassword(val)}
          />
          <Button
              icon={<Icon name="check" size={15} color="white" />}
              title="Update Password"
              buttonStyle={styles.buttonStyle}
              onPress={() => handlepass()}
            />
        </View>
      );

}

     const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
        mediPlus:{
          color: "black",
          textAlign:"center",
          justifyContent:"center",
          fontSize:34,
          fontWeight:"bold"
    

    
      },
      textinput:{
        borderWidth:2,
        borderColor:'#00A651',
        width:250,
        heigth:70,
        margin:10,
        alignSelf:"center",
        padding:10
      },
     buttonStyle:{
            width: 140,
                justifyContent: 'center',
                backgroundColor: '#00A651',
                alignSelf:"center",
                alignContent: 'center',
     },
    });

      export default Forgotpass