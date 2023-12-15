import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';

import {globalStyles} from '../../assets/styles/styles';
import offerxLogo from '../../assets/img/offerx-logo.png';
import Snackbar from 'react-native-snackbar';
import {AppWriteContext} from '../appwrite/AppWriteContext';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Link} from '@react-navigation/native';

type UserObj = {
  name: string;
  email: string;
};

interface ItemType {
  id: number;
  username: string;
  age: number;
}

// interface AuthContextType {
//   logout: () => void;
// }

const data: ItemType[] = [
  {
    id: 1,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 2,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 3,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 4,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 5,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 6,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 7,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 8,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 9,
    username: 'sjashajsh',
    age: 25,
  },
  {
    id: 10,
    username: 'sjashajsh',
    age: 25,
  },
];

const JobOffers = ({userData, setUserData, setIsLoginSuccess}: any) => {
  const renderItem = ({item}: {item: ItemType}) => (
    <View style={globalStyles.tr}>
      <Text style={globalStyles.td}>{item.id}</Text>
      <Text style={globalStyles.td}>{item.username}</Text>
      <Text style={globalStyles.td}>{item.age}</Text>
    </View>
  );

  console.log(userData, 'userdata');
  // const {logout}: AuthContextType = useContext(AuthContext) as AuthContextType;

  // const [userData, setUserData] = useState<UserObj>();
  // const {appwrite, setIsLoggedIn} = useContext(AppWriteContext);

  const handleLogout = () => {
    AsyncStorage.removeItem('user_id');
    setUserData({});
    setIsLoginSuccess(false);
  };

  // useEffect(() => {
  //   appwrite.getCurrentUser().then(response => {
  //     if (response) {
  //       const user: UserObj = {
  //         name: response.name,
  //         email: response.email,
  //       };
  //       setUserData(user);
  //     }
  //   });
  // }, [appwrite]);

  const Tab = createMaterialTopTabNavigator();
  function HomeScreen() {
    return (
      <View style={globalStyles.table}>
        <View style={globalStyles.thead}>
          <Text style={globalStyles.th}>Name</Text>
          <Text style={globalStyles.th}>Username</Text>
          <Text style={globalStyles.th}>Age</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index} key`}
          renderItem={renderItem}
        />
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Settings!</Text>
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={globalStyles.flex1}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={globalStyles.mainHeader}>
            <Image style={globalStyles.headerLogo} source={offerxLogo} />
            <TouchableOpacity onPress={handleLogout}>
              <Text style={[globalStyles.link, globalStyles.mr2]}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={[globalStyles.flexDirectionRow, globalStyles.flex1]}>
            <View style={globalStyles.sidebar}>
              <ScrollView>
                <Link to="/joboffers" style={globalStyles.sidebarItem}>
                  <Text>Job Offers</Text>
                </Link>
                <Link to="/todoscreen" style={globalStyles.sidebarItem}>
                  <Text>Dashboard</Text>
                </Link>
                <Link to="/todoscreen" style={globalStyles.sidebarItem}>
                  <Text>Candidate Invitations</Text>
                </Link>
                <Link to="/todoscreen" style={globalStyles.sidebarItem}>
                  <Text>Manage Employees</Text>
                </Link>
              </ScrollView>
            </View>
            <View style={globalStyles.mainContent}>
              <Text style={globalStyles.commonHeading}>Job Offers</Text>
              <Tab.Navigator
                screenOptions={{
                  tabBarLabelStyle: {fontSize: 12},
                  tabBarItemStyle: {width: 100},
                }}>
                <Tab.Screen name="pending" component={HomeScreen} />
                <Tab.Screen name="accepted" component={SettingsScreen} />
              </Tab.Navigator>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default JobOffers;
