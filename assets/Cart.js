import * as React from 'react';
import {
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import Pharmacy from './Customer';
import { Button, Input, ListItem, Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
const firebase_endpoint =
  'https://medplus-976c3-default-rtdb.asia-southeast1.firebasedatabase.app/';

function Cart({ navigation, route }) {
  const [getcart, setcart] = React.useState([]);
  const [getdel, setdel] = React.useState();
  var arr;
  const getData = async () => {
    const response = await fetch(`${firebase_endpoint}/CART.json`);
    const data = await response.json();

    const userId = route.params.data.customerid; //logged in user
    for (var obj in data) {
      const name = data[obj].name;
      const id = data[obj].customerid; //from cart

      if (userId == id) {
        setcart((prev) => [
          ...prev,
          {
            name: data[obj].name,
            price: data[obj].price,
            image: data[obj].image,
            pID: data[obj].pID,
            itemId: obj,
          },
        ]);
        
      }
    }
  };

  const Del = (item) => {
   const id = item;
   console.log(id);
    var requestOptions = {
      method: 'DELETE',
    };

    fetch(`${firebase_endpoint}/CART/${id}.json`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
      setcart(getcart.filter(item => item.itemId != id))
  
  };

  React.useEffect(() => {
    getData();
  }, [setcart]);

  if (getcart !== undefined) {
    return (
      <View style={styles.container}>
       <ImageBackground source={{
    uri:'https://image.freepik.com/free-vector/modern-green-wave-background_1035-9107.jpg'
  }} 

  style={{width: '100%', height: '100%',flex:1}}
  
  >
        <View>
          <FlatList
            data={getcart}
            renderItem={({ item }) => (
              <View style={styles.listContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={styles.image} source={{ uri: item.image }} />
                  <Text
                    style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 5 }}>
                    {item.name}{' '}
                  </Text>
                </View>
                <Text style={{ fontSize: 18, marginLeft: 70, marginTop: -25 }}>
                  Price: {item.price}{' '}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#00A651',
                    height: 35,
                    width: 35,
                    borderRadius: 15,
                    justifyContent: 'center',
                    marginLeft: 250,
                  }}
                  onPress={() => Del(item.itemId)}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    {' '}
                    X{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#00A651',
            height: 40,
            width: 150,
            marginTop: 20,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={() =>
            navigation.navigate('ConfirmOrder', {
              data: {
                customerid: route.params.data.customerid,
                customeremail: route.params.data.customeremail,
              },
            })
          }>
          <Text style={{ color: 'white', textAlign: 'center' }}> Proceed </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  } else {
    return <View></View>;
  }
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

  image: {
    width: 60,
    height: 60,
    borderColor: 'green',
    borderWidth: 2,
  },
  listContainer: {
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
});

export default Cart;
