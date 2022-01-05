import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar } from 'react-native-elements';
const firebase_endpoint =
  'https://medplus-976c3-default-rtdb.asia-southeast1.firebasedatabase.app/';

function Pharmacy({ navigation, route }) {
  const [prod, setprod] = React.useState([]);
  const [getFiltered, setFiltered] = React.useState([]);
  const [getSearch,setSearch]=React.useState("");


const SearchItem=(text)=>{
  if(text!=""){
    const searched=prod.filter((item)=>{
      const datachange=item.toLowerCase();
      const textchange= text.toLowerCase();
      return datachange.startsWith(textchange);
    });
    setFiltered(searched);
    setSearch(text)
  }
  else{
    setFiltered(prod);
    setSearch(text);
  }
}

  const addToCart = (item) => {
    var requestOptions = {
      method: 'POST',
      body: JSON.stringify({
        customerid: route.params.data.id,
        customeremail: route.params.data.email,
        name: item.name,
        price: item.price,
        image: item.image,
        pID: item.pID,
      }),
    };

    fetch(`${firebase_endpoint}/CART.json`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        alert('Sucessfully added in cart');
      })
      .catch((error) => console.log('error', error));
  };

  React.useEffect(() => {
    getData();
  },[]);
  const getData = async () => {
    const response = await fetch(`${firebase_endpoint}/Product.json`);
    const data = await response.json();
    let arr = Object.entries(data).map((item) => ({
      ...item[1],
      key: item[0],
    }));
    setprod(arr);
    setFiltered(arr);
    console.log(arr);
    console.log(prod);
  };

  return (
    <View>
    <View style={{flexDirection:'row',justifyContent:"space-evenly",backgroundColor:"white",padding:10,marging:20}}>
    
      <TouchableOpacity
        style={styles.topbutton}
        onPress={() =>
          navigation.navigate('Cart', {
            data: {
              customerid: route.params.data.id,
              customeremail: route.params.data.email,
            },
          })
        }>
 

        <Text style={styles.buttonText}> Cart </Text>
      </TouchableOpacity>
      
       <TouchableOpacity
        style={styles.topbutton}
        onPress={() =>
          navigation.navigate('Profile', {
            data: {
              customerid: route.params.data.id,
              customeremail: route.params.data.email,
            },
          })
        }>
        <Text  style={styles.buttonText}> Profile </Text>
      </TouchableOpacity>

</View>
     

      <FlatList
        data={prod}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text
              style={{
                marginTop: 20,
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#C4DFD2',
              }}>
              Name: {item.name}{' '}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#C4DFD2',
              }}>
              {' '}
              Description: {item.description}{' '}
            </Text>
       
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#C4DFD2',
              }}>
              {' '}
              Price: {item.price}{' '}
            </Text>
            <TouchableOpacity
              style={styles.cartbutton}
              onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}> Add to cart </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  cartbutton: {
    backgroundColor: '#00A651',
    width: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,

    borderRadius: 20,
  },

  topbutton:{
 backgroundColor: '#00A651',
  height: 40,
  width:140,
   borderRadius:20,
   border:"1px solid white"
  },
  buttonText:{
color:'white',
fontWeight: 'bold',
textAlign:"center",
fontSize:18,
paddingTop:5
  },

  image: {
    width: '93%',
    height: 200,
    marginLeft: 10,
  },
});

export default Pharmacy;
