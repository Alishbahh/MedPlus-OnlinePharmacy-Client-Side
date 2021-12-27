import * as React from 'react';
import {ScrollView,Image, TouchableOpacity, Text, View, StyleSheet,TextInput } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

function LoginScreen({navigation}){

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
              placeholder="Username"
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
          </View>
          <View>
            <Input
              containerStyle={styles.inputStyle}
              placeholder="Password"
              leftIcon={<Icon name="lock" size={18} color="black" />}
              secureTextEntry={true}
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
             // onPress={() => event(false)}
            />
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
    marginBottom:25,
    width:"80%",
    marginLeft:30,
    
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