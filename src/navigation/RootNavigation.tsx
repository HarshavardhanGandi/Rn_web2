import React, {useContext, useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {ActivityIndicator, Linking, Text, View} from 'react-native';
import Todoscreen from '../screen/Todoscreen';
import Home from '../screen/Home';
import JobOffers from '../screen/JobOffers';
import {AuthContext} from '../context/AuthContext';
import Register from '../screen/Register';

export type RootNavigationParamList = {
  Home: undefined;
  Register: undefined;
  JobOffers: undefined;
  Todoscreen: undefined;
};
const linking = {
  prefixes: [
    'http://localhost:8081/',
    'http://localhost:8081',
    'localhost:8081',
  ],
  config: {
    screens: {
      Todoscreen: 'todoscreen',
      JobOffers: 'joboffers',
      Home: 'home',
      Register: 'register',
      NotFound: '*',
    },
  },
} as const;

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootNavigationParamList>();
  const navigationRef = useRef<NavigationContainerRef<typeof linking>>(null);
  // const {isLoading, userToken}: any = useContext(AuthContext);

  useEffect(() => {
    Linking.getInitialURL()
      .then(url => {
        console.log('initial url ran');
        if (!url) {
          return;
        }

        console.warn(`initial_url ${url}}`);

        if (navigationRef.current?.isReady()) {
          console.warn(`navigation is ready, navigating to ${url}}!`);
          // if (url.replace('http://localhost:8081', '') === 'todoscr') {
          // navigationRef.current.navigate('Home');
          // }
        }
      })
      .catch(e => {
        console.error('Get initial url error', e);
      });
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="JobOffers" component={JobOffers} />
        <Stack.Screen name="Todoscreen" component={Todoscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
