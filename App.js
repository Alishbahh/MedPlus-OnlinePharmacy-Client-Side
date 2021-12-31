import ConfirmOrder from  './assets/ConfirmOrder'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Pharmacy" component={Pharmacy} />
      <Stack.Screen name="Forgot Password" component={Forgotpass} />
       <Stack.Screen name="Cart" component={Cart}/>
          <Stack.Screen name="ConfirmOrder" component={ConfirmOrder}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}
const CustomerDrawer = () => {
  return(

      <Drawer.Navigator>
        <Drawer.Screen name="Cart"  />
        <Drawer.Screen name="Profile" />
      </Drawer.Navigator>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
