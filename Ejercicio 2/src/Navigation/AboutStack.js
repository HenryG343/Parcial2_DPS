import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/Serie';
const Stack= createStackNavigator();
export default function HAboutStack(){
 return(
 <Stack.Navigator>
 <Stack.Screen name="about" component={About}
options={{title:'About'}}/>
 </Stack.Navigator>
 );
}