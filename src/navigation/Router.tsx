import {View, Text} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

import {AppWriteContext} from '../appwrite/AppWriteContext';
import Loading from '../components/Loading';
import RootNavigation from './RootNavigation';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native';

const Router = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppWriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUser()
      .then(response => {
        setIsLoading(false);
        if (response) {
          setIsLoggedIn(true);
        }
      })
      .catch(_ => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <RootNavigation />}
    </NavigationContainer>
  );
};

export default Router;
