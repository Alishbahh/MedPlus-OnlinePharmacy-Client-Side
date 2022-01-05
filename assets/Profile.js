import * as React from 'react';
import {ScrollView,Image, TouchableOpacity, Text, View, StyleSheet,TextInput,Pressable} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input,Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
const firebase_endpoint="https://medplus-976c3-default-rtdb.asia-southeast1.firebasedatabase.app/";



function Profile({ navigation, route }) {
  const[getname,setname]=React.useState()
    const[getemail,setemail]=React.useState() 
    const userId=route.params.data.customerid; //logged in user
 const getData = async () => {
const response = await fetch(`${firebase_endpoint}/Users.json`)
 const data = await response.json();

  
  console.log("customer",userId)
   for (var obj in data) {
     console.log("inside loop")
      const id = obj; //from cart
      if (userId == id) {
          console.log("id",id);
          setname(data[obj].name);
          setemail(data[obj].email);

      }
    }
  };
  
    
  React.useEffect(() => {
    getData();
  },[]);


return(
  <View style={{backgroundColor:"white",width:'100%',height:'100%',flex:1, alignItems:'center',
        justifyContent:'center'}}>
  <View style={{justifyContent:"center",alignItems:"center",alignSelf:"center",alignContent:"center"}}>
   <Avatar
            size={164}
            rounded
            icon={{ name: 'user', type: 'font-awesome', color: '#00A651' }}
            containerStyle={{
              borderColor: '#00A651',
              borderStyle: 'solid',
              borderWidth: 2,
            }}
          />
  </View>
 
  <Text style={styles.txt}> {getname}</Text>


  <Text style={styles.txt}>{getemail}</Text>

  </View>

);
}
  const styles = StyleSheet.create({
    txt:{
        fontSize:22,
        color:"black",
        borderRadius:2,
        borderColor:'#00A651',
        borderWidth:2,
        borderStyle:'dotted',
        padding:5,
        margin:10,
    },
  })
export default Profile