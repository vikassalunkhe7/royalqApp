/* eslint-disable */

import React from 'react';


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import NewsScreen from './NewsScreen';
// import RevenueDetailsScreen from './RevenueDetailsScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const NewsStack = createStackNavigator();
const RevenueStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#5D2DFD',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Quantitative',
          tabBarColor: '#5D2DFD',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-sync" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarLabel: 'Calculator',
          tabBarColor: '#5D2DFD',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-calculator" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Coins',
          tabBarColor: '#5D2DFD',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-rocket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Circle',
          tabBarColor: '#5D2DFD',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />

   
   
  

    </Tab.Navigator> 
);



export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#5D2DFD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#5D2DFD" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#5D2DFD',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Crypto Coin Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#5D2DFD" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>

);


const ExploreStackScreen = ({navigation}) => (
  <ExploreStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5D2DFD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ExploreStack.Screen name="Circle" component={ExploreScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#5D2DFD" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </ExploreStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5D2DFD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <ExploreStack.Screen name="Quantitative" component={ProfileScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#5D2DFD" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </ProfileStack.Navigator>
);
  
const NewsStackScreen = ({navigation}) => (
  <NewsStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5D2DFD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <NewsStack.Screen name="Calculator" component={NewsScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#5D2DFD" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </NewsStack.Navigator>

  
  
  );

    
const RevenueStackScreen = ({navigation}) => (
  <RevenueStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#5D2DFD',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <RevenueStack.Screen name="Revenue" component={NewsScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#5D2DFD" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </RevenueStack.Navigator>

  
  
  );
  
  