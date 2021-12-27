import * as React from 'react';
import { Text, View, StyleSheet,TextInput } from 'react-native';
import Constants from 'expo-constants';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignupScreen({navigation}){

    return (
        <View style={styles.container}>
         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Icon name="plus" size={66} color='#00A651'/>
            </View>
            <Text style={styles.mediPlus}>
            MediPlus
            </Text>
         <Text style={{textAlign:"center",fontWeight:"bold",marginBottom:40}}>Where your health comes first!</Text>
         <TextInput style={styles.textinput}
         placeholder="Name"
        // value={}
         //onChangeText={} 
          />
          <TextInput style={styles.textinput}
         placeholder="Email"
        // value={}
         //onChangeText={} 
          />
          <TextInput style={styles.textinput}
         placeholder="Password"
        // value={}
         //onChangeText={} 
          />
          <Button
              icon={<Icon name="check" size={15} color="white" />}
              title="Sign Up"
              buttonStyle={styles.buttonStyle}
             // onPress={() => event(false)}
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
            width: 100,
                justifyContent: 'center',
                backgroundColor: '#00A651',
                alignSelf:"center",
                alignContent: 'center',
     },
    });
export default SignupScreen;    