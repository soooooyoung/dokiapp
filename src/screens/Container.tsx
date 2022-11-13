import React, { useState } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { PastelColors } from '../constants/colors';
import { Sizes } from '../constants/layout';
import HomeScreen from './home';
import DayScreen from './day';
import AlbumScreen from './album';

const Tab = createMaterialBottomTabNavigator();
const Container = () => {
  const [isLogginedIn, setLoggedIn] = useState(true);

  return (
    <>
      {isLogginedIn ? (
        <Tab.Navigator
          barStyle={{
            backgroundColor: '#ffffff',
            paddingTop: 8,
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}
          activeColor={PastelColors.tulipPink}
          inactiveColor={PastelColors.peachYogurt}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <EntypoIcon
                  name={focused ? 'heart' : 'heart-outlined'}
                  size={Sizes.icon}
                  color={color}
                />
              ),
              // tabBarColor: PastelColors.peachYogurt,
            }}
          />
          <Tab.Screen
            name="Album"
            component={AlbumScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <EntypoIcon
                  name={focused ? 'image-inverted' : 'image'}
                  size={Sizes.icon}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={AlbumScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <EntypoIcon name="chat" size={Sizes.icon} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={DayScreen}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <Icon
                  name={focused ? 'flower' : 'flower-outline'}
                  size={Sizes.icon}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <></>
      )}
    </>
  );
};

export default Container;
