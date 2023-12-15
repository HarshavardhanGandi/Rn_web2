import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {globalStyles} from '../../src/assets/styles/styles';

const Loading = () => {
  return (
    <View style={globalStyles.pageLoaderDiv}>
      <ActivityIndicator
        style={globalStyles.pageLoader}
        size="large"></ActivityIndicator>
    </View>
  );
};

export default Loading;
