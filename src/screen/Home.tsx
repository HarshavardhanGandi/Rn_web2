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
  Alert,
} from 'react-native';
import React, {
  createRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {globalStyles} from '../../assets/styles/styles';
import W3Image from '../assets/img/login.png';
import offerxLogo from '../../assets/img/offerx-logo.png';
import MicrosoftImg from '../../assets/img/Microsoft.png';
import GoogleImg from '../../assets/img/Google.png';
import {Link} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';

import Snackbar from 'react-native-snackbar';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationParamList} from '../navigation/RootNavigation';
import {AppWriteContext} from '../appwrite/AppWriteContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../components/Loading';
import JobOffers from './JobOffers';

import {Formik} from 'formik';
import * as Yup from 'yup';
import {authorize} from 'react-native-app-auth';

type LoginScreenprops = NativeStackScreenProps<
  RootNavigationParamList,
  'Register'
>;

const configData = {
  client_id: '8cf1faa8-1a7e-4292-9fd8-6337a0e4443b',
  authorization_user_agent: 'DEFAULT',
  redirect_uri: 'msauth://com.todo/f8lqD%2BwteA3ADLUuemKOYk%2FJ7yU%3D',
  authorities: [
    {
      type: 'AAD',
      audience: {
        type: 'AzureADMyOrg',
        tenant_id: '6de5354b-f23a-492c-b7cb-d04a716bcbc1',
      },
    },
  ],
};

const HomeSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Home = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [userData, setUserData] = useState({});

  const passwordInputRef = createRef();
  const navigation = useNavigation();

  const configs: any = {
    microsoft: {
      issuer:
        'https://login.microsoftonline.com/6de5354b-f23a-492c-b7cb-d04a716bcbc1/v2.0',
      client_id: '8cf1faa8-1a7e-4292-9fd8-6337a0e4443b',
      redirect_uri: 'msauth://com.todo/f8lqD%2BwteA3ADLUuemKOYk%2FJ7yU%3D',
      scopes: ['openid', 'User.Read', 'User.ReadBasic.All', 'User.ReadWrite'],
    },
  };

  const handleFormSubmit = async (values: any) => {
    // setErrortext('');

    console.log(values, 'values');
    setLoading(true);

    try {
      const response = await fetch(
        'http://restapi.adequateshop.com/api/authaccount/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add additional headers if needed (e.g., Authorization)
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        },
      );

      const responseJson = await response.json();

      if (responseJson.message === 'success') {
        await AsyncStorage.setItem(
          'user_id',
          JSON.stringify(responseJson.data),
        );
        setIsLoginSuccess(true);
        setLoading(false);
        setUserData(responseJson.data);
      } else {
        setErrortext(
          responseJson.msg || 'Please check your email id or password',
        );
        Alert.alert('Please check your email id or password');
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      Alert.alert('Please check your email id or password');
    }
  };
  // const {login}: AuthContextType = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    if (isLoginSuccess) {
      const getUserInfo = async () => {
        try {
          const userExist = await AsyncStorage.getItem('user_id');

          if (userExist) {
            const parsedData = JSON.parse(userExist!);
            setUserData(parsedData);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getUserInfo();
    }
  }, [isLoginSuccess]);

  const handleAuthorize = useCallback(async (provider: string) => {
    console.log('clicked');
    try {
      const config = configs[provider];
      const newAuthState = await authorize({
        ...config,
        connectionTimeoutSeconds: 5,
        iosPrefersEphemeralSession: true,
        extraParams: {max_age: 86400},
      });
      console.log(newAuthState, 'newAuthState');
    } catch (error: any) {
      Alert.alert('Failed to log in', error.message);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {isLoginSuccess ? (
            <JobOffers
              userData={userData}
              setUserData={setUserData}
              setIsLoginSuccess={setIsLoginSuccess}
            />
          ) : (
            <>
              <SafeAreaView style={globalStyles.safeContainer}>
                <StatusBar barStyle="dark-content" />
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                  <View style={globalStyles.container}>
                    <View style={globalStyles.justifyContentBetween}>
                      <Image source={W3Image} style={globalStyles.loginImg} />
                      <View style={globalStyles.w40}>
                        <Image
                          style={globalStyles.mainLogo}
                          source={offerxLogo}
                        />
                        <View>
                          <View style={globalStyles.card}>
                            <View style={globalStyles.mb4}>
                              <Text
                                style={[globalStyles.fs32, globalStyles.fw700]}>
                                Login
                              </Text>
                              <Text style={globalStyles.fs16}>
                                Don't Have An Account Yet?{' '}
                                <Text style={globalStyles.link}>Sign Up</Text>
                              </Text>
                            </View>
                            <Formik
                              initialValues={{email: '', password: ''}}
                              validationSchema={HomeSchema}
                              onSubmit={handleFormSubmit}>
                              {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                              }) => (
                                <>
                                  <Text style={globalStyles.label}>
                                    Email
                                    <Text style={globalStyles.errorText}>
                                      *
                                    </Text>
                                  </Text>
                                  <TextInput
                                    style={globalStyles.inputStyle}
                                    placeholder="Enter Email"
                                    // onChangeText={UserEmail => setUserEmail(UserEmail)}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                  />
                                  {touched.email && errors.email && (
                                    <Text style={globalStyles.errorText}>
                                      {errors.email}
                                    </Text>
                                  )}
                                  <Text style={globalStyles.label}>
                                    Password
                                    <Text style={globalStyles.errorText}>
                                      *
                                    </Text>
                                  </Text>
                                  <TextInput
                                    style={globalStyles.inputStyle}
                                    placeholder="Enter Password"
                                    secureTextEntry
                                    // onChangeText={UserPassword =>
                                    //   setUserPassword(UserPassword)
                                    // }
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                  />
                                  {touched.password && errors.password && (
                                    <Text style={globalStyles.errorText}>
                                      {errors.password}
                                    </Text>
                                  )}
                                  <TouchableOpacity
                                    style={globalStyles.btn}
                                    onPress={handleSubmit as any}>
                                    {/* <Link to="/joboffers"> */}
                                    <Text
                                      style={[
                                        globalStyles.textCenter,
                                        globalStyles.fs18,
                                        globalStyles.textWhite,
                                      ]}>
                                      Login
                                    </Text>
                                    {/* </Link> */}
                                  </TouchableOpacity>
                                </>
                              )}
                            </Formik>
                            <Text
                              style={[
                                globalStyles.link,
                                globalStyles.textCenter,
                              ]}>
                              Forgot Password?
                            </Text>
                          </View>
                          {/* {errortext != '' ? (
                            <Text style={globalStyles.errorText}>{errortext}</Text>
                          ) : null} */}

                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <View style={globalStyles.orLine} />
                            <View>
                              <Text style={globalStyles.orText}>OR</Text>
                            </View>
                            <View style={globalStyles.orLine} />
                          </View>
                          <View style={globalStyles.justifyContentBetween}>
                            <Pressable
                              style={globalStyles.socialBtn}
                              onPress={() => handleAuthorize('microsoft')}>
                              <Image
                                source={MicrosoftImg}
                                style={{width: 20, height: 20}}
                              />
                              <Text style={globalStyles.socialText}>
                                Sign in with Microsoft
                              </Text>
                            </Pressable>
                            <Pressable
                              style={globalStyles.socialBtn}
                              onPress={() => console.log('Pressed!')}>
                              <Image
                                source={GoogleImg}
                                style={{width: 20, height: 20}}
                              />
                              <Text style={globalStyles.socialText}>
                                Sign in with Google
                              </Text>
                            </Pressable>
                          </View>

                          <Text style={globalStyles.termsText}>
                            By clicking sign in, you agree to the OfferX{'\n'}
                            <Pressable>
                              <Text style={globalStyles.link}>
                                Terms & Conditions,{' '}
                              </Text>
                            </Pressable>
                            <Pressable>
                              <Text style={globalStyles.link}>Privacy </Text>
                            </Pressable>
                            <Pressable>
                              <Text style={globalStyles.link}>
                                and Cookies policies.
                              </Text>
                            </Pressable>
                          </Text>

                          <Pressable
                            style={globalStyles.registerBtn}
                            onPress={() => console.log('Pressed!')}>
                            <Link to="/register">
                              <Text style={globalStyles.registerText}>
                                Don't have account? Register
                              </Text>
                            </Link>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </SafeAreaView>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;
