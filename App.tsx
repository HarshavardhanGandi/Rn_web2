import {View, Text} from 'react-native';
import React from 'react';
import Todoscreen from './src/screen/Todoscreen';
import RootNavigation from './src/navigation/RootNavigation';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <View style={{flex: 1}}>
        <RootNavigation />
      </View>
    </AuthProvider>
  );
};

export default App;
