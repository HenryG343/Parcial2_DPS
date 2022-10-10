import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PeliculaStack from '../screens/Pelicula';
import SerieStack from '../screens/Serie';
import ProximamenteStack from '../screens/Proximamente';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab=createBottomTabNavigator();

export default function Navigation(){
 return(
 <Tab.Navigator>
 <Tab.Screen name="pelicula" component={PeliculaStack} options={{title:'Peliculas',
 tabBarIcon: ({ color, size }) => (
        <Ionicons name="film" color={color} size={size} />
      ),
      }}/>
 <Tab.Screen name="serie" component={SerieStack} options={{title:'Series',
 tabBarIcon: ({ color, size }) => (
        <Ionicons name="play" color={color} size={size} />
      ),
      }}/>
 <Tab.Screen name="prox" component={ProximamenteStack} options={{title:'Próximamente',
 tabBarIcon: ({ color, size }) => (
        <Ionicons name="barcode-outline" color={color} size={size} />
      ),
      }} />
      
 </Tab.Navigator>
 );
}
