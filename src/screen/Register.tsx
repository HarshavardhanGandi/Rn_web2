import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {createRef, useContext, useEffect, useState} from 'react';
import {globalStyles} from '../../assets/styles/styles';
import W3Image from '../assets/img/login.png';
import offerxLogo from '../../assets/img/offerx-logo.png';
import MicrosoftImg from '../../assets/img/Microsoft.png';
import GoogleImg from '../../assets/img/Google.png';
import companyIcon from '../../assets/img/Employer.png';
import candidateIcon from '../../assets/img/CandidateIcon.png';
import {Link} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationParamList} from '../navigation/RootNavigation';
import {AppWriteContext} from '../appwrite/AppWriteContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';
import Home from './Home';

type SignUpScreenprops = NativeStackScreenProps<
  RootNavigationParamList,
  'Register'
>;

const Register = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userCPassword, setUserCPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [userData, setUserData] = useState({});
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [goNext, setGoNext] = useState(false);

  const handleSubmitPress = async () => {
    setErrortext('');

    if (!userName) {
      console.log('Please fill Name');
      return;
    }
    if (!userEmail) {
      console.log('Please fill Email');
      return;
    }
    if (!userPassword) {
      console.log('Please fill Password');
      return;
    }
    if (!userCPassword) {
      console.log('Please fill Confirm Password');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'http://restapi.adequateshop.com/api/authaccount/registration',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
            password: userPassword,
          }),
        },
      );

      const responseJson = await response.json();

      if (responseJson.message === 'success') {
        await AsyncStorage.setItem(
          'user_id',
          JSON.stringify(responseJson.data),
        );
        setIsRegisterSuccess(true);
        setLoading(false);
        setUserData(responseJson.data);
      } else {
        setErrortext(
          responseJson.msg || 'Please check your email id or password',
        );
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      {loading && <Loading />}
      {isRegisterSuccess ? (
        <Home />
      ) : (
        <SafeAreaView style={globalStyles.safeContainer}>
          <StatusBar barStyle="dark-content" />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={globalStyles.container}>
              <View style={globalStyles.justifyContentBetween}>
                <Image source={W3Image} style={globalStyles.loginImg} />
                <View style={globalStyles.w40}>
                  <Image style={globalStyles.mainLogo} source={offerxLogo} />
                  <View>
                    {!showRegisterForm ? (
                      <View style={globalStyles.card}>
                        <Text style={[globalStyles.fs32, globalStyles.fw700]}>
                          Let's Get Started
                        </Text>
                        <Text style={globalStyles.fs16}>
                          Select Your Account Type
                        </Text>
                        <TouchableOpacity
                          onPress={() => setGoNext(true)}
                          style={
                            !goNext
                              ? [
                                  globalStyles.accountCard,
                                  globalStyles.flexDirectionRow,
                                  globalStyles.alignItemsCenter,
                                ]
                              : [
                                  globalStyles.accountCardHighlight,
                                  globalStyles.flexDirectionRow,
                                  globalStyles.alignItemsCenter,
                                ]
                          }>
                          <Image
                            style={globalStyles.selectAccount}
                            source={companyIcon}
                          />
                          <Text style={[globalStyles.ms3, globalStyles.fs16]}>
                            Company
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            globalStyles.accountCard,
                            globalStyles.flexDirectionRow,
                            globalStyles.alignItemsCenter,
                          ]}>
                          <Image
                            style={globalStyles.selectAccount}
                            source={candidateIcon}
                          />
                          <Text style={[globalStyles.ms3, globalStyles.fs16]}>
                            Candidate
                          </Text>
                        </TouchableOpacity>
                        <Pressable
                          style={
                            goNext
                              ? globalStyles.nextBtn
                              : globalStyles.disabledBtn
                          }
                          disabled={!goNext}
                          onPress={() => setShowRegisterForm(true)}>
                          <Text style={globalStyles.textWhite}>Next</Text>
                        </Pressable>
                        <Text
                          style={[globalStyles.termsText, globalStyles.mt3]}>
                          Already have an account?
                          <Link
                            to="/home"
                            style={[globalStyles.link, globalStyles.ms1]}>
                            <Text>Login</Text>
                          </Link>
                        </Text>
                      </View>
                    ) : (
                      <View style={globalStyles.card}>
                        <Text
                          style={[
                            globalStyles.fs32,
                            globalStyles.fw700,
                            globalStyles.mb4,
                          ]}>
                          Sign Up
                        </Text>
                        <Text style={globalStyles.label}>
                          Name<Text style={globalStyles.errorText}>*</Text>
                        </Text>
                        <TextInput
                          style={globalStyles.inputStyle}
                          placeholder="Enter Name"
                          value={userName}
                          onChangeText={UserName => setUserName(UserName)}
                        />
                        <Text style={globalStyles.label}>
                          Email<Text style={globalStyles.errorText}>*</Text>
                        </Text>
                        <TextInput
                          style={globalStyles.inputStyle}
                          placeholder="Enter Email"
                          value={userEmail}
                          onChangeText={UserEmail => setUserEmail(UserEmail)}
                        />

                        <Text style={globalStyles.label}>
                          Password<Text style={globalStyles.errorText}>*</Text>
                        </Text>
                        <TextInput
                          style={globalStyles.inputStyle}
                          placeholder="Enter Password"
                          secureTextEntry
                          value={String(userPassword)}
                          onChangeText={UserPassword => {
                            const numericPassword = Number(UserPassword);

                            if (!isNaN(numericPassword)) {
                              setUserPassword(numericPassword);
                            } else {
                              console.error('Invalid numeric password');
                            }
                          }}
                        />
                        <Text style={globalStyles.label}>
                          Confirm Password
                          <Text style={globalStyles.errorText}>*</Text>
                        </Text>
                        <TextInput
                          style={globalStyles.inputStyle}
                          placeholder="Enter Confirm Password"
                          value={String(userCPassword)}
                          secureTextEntry
                          onChangeText={UserCPassword =>
                            setUserCPassword(UserCPassword)
                          }
                        />
                        {errortext != '' ? (
                          <Text style={globalStyles.errorText}>
                            {errortext}
                          </Text>
                        ) : null}
                        <TouchableOpacity style={globalStyles.btn}>
                          {/* <Link to="/joboffers"> */}
                          <Text
                            onPress={handleSubmitPress}
                            style={[
                              globalStyles.textCenter,
                              globalStyles.fs18,
                              globalStyles.textWhite,
                            ]}>
                            Register
                          </Text>
                          {/* </Link> */}
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default Register;
