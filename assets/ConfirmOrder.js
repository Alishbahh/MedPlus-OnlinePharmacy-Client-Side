import * as React from 'react';
import {ScrollView,Image, TouchableOpacity, Text, View, StyleSheet,TextInput,Pressable} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
const firebase_endpoint="https://medplus-976c3-default-rtdb.asia-southeast1.firebasedatabase.app/";

function ConfirmOrder({navigation,route}){
  const[getaddress,setaddress]=React.useState();
  const[getNum,setNum]=React.useState();
  const[getcart,setcart]=React.useState();
  const[getprice,setprice]=React.useState();
  const[getpID,setpID]=React.useState();
  const[getemail,setemail]=React.useState();
  const[getname,setname]=React.useState();
  const[getimage,setimage]=React.useState();
  const getData = async () => {
  const response = await fetch(`${firebase_endpoint}/CART.json`)
 const data = await response.json();

  const userId=route.params.data.customerid; //logged in user
   for (var obj in data){

     const id= data[obj].customerid 
    if(userId==id){
      setname(data[obj].name)
      setprice(data[obj].price);
      setpID(data[obj].pID);
      setimage(data[obj].image)
    } 
  }
  };
    
  React.useEffect(() => {
    getData();
  },[]);




const handlepass=()=>{
 var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        customeremail: route.params.data.customeremail,
        customerid: route.params.data.customerid,
        address: getaddress,
        phoneNo: getNum,
        pID:getpID,
        name:getname,
        price:getprice,
        image:getimage
      }),
    };

    fetch(`${firebase_endpoint}/Orders.json`, requestOptions)
      .then((response) => response.json())
      .then((result) =>{ alert("order placed")
      navigation.navigate('Pharmacy')
      })
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
         placeholder="Phone No"
         value={getNum}
          onChangeText={val=>setNum(val)}
          />
         
          <TextInput style={styles.textinput}
         placeholder="Address"
         value={getaddress}
              onChangeText={val=>setaddress(val)}
          />
          <Button
              icon={<Icon name="check" size={15} color="white" />}
              title="Confirm Order"
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

export default ConfirmOrder