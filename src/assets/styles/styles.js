import React from 'react';
import {StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';

import {COLORS, FONT, FS, SIZES, SHADOWS} from '../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const globalStyles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBg,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    marginLeft: '15%',
    marginRight: '15%',
    justifyContent: 'space-between',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  justifyContentBetween: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mainLogo: {
    // width: windowWidth > 500 ? '50%' : '30%',
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  w40: {
    width: '40%',
  },
  mb4: {
    marginBottom: '5%',
  },
  mb5: {
    marginBottom: '10%',
  },
  loginImg: {
    width: Platform.OS === 'web' ? 500 : 100,
    height: Platform.OS === 'web' ? 650 : 100,
    resizeMode: 'contain',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // textAlign: 'left',
    alignSelf: 'flex-start',
  },
  inputStyle: {
    height: 40,
    width: '100%',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: '5%',
    padding: '2%',
    backgroundColor: COLORS.white,
  },
  label: {
    fontSize: 16,
    marginBottom: '2%',
  },
  btn: {
    width: '50%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    marginBottom: '5%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textCenter: {
    textAlign: 'center',
  },
  fs18: {
    fontSize: FS.fs18,
  },
  fs20: {
    fontSize: FS.fs20,
  },
  fs24: {
    fontSize: FS.fs24,
  },
  fs32: {
    fontSize: FS.fs32,
  },
  fw700: {
    fontWeight: '700',
  },
  textprimaryBlack: {
    color: COLORS.primaryBlack,
  },
  textWhite: {
    color: COLORS.white,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray,
    marginBottom: '8%',
    marginTop: '8%',
  },
  orText: {
    marginLeft: '5%',
    marginRight: '5%',
    textAlign: 'center',
    width: 50,
  },
  socialBtn: {
    width: '50%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2%',
    marginHorizontal: '1%',
  },
  socialText: {
    fontSize: FS.fs14,
    marginLeft: '5%',
    color: COLORS.primaryBlack,
  },
  termsText: {
    // marginTop: '5%',
    marginBottom: '5%',
    textAlign: 'center',
  },
  link: {
    color: COLORS.primary,
  },
  heading: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: '5%',
  },
  modal: {
    width: '100%',
    height: '80%',
    backgroundColor: COLORS.gray,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  // loader: {
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "white",
  //   position: "absolute"
  // },
  card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primaryBlack,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loadingDiv: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageLoader: {
    flex: 1,
    // backgroundColor: COLORS.white,
    // alignItems: 'center',
    // marginVertical: 'auto',
  },
  pageLoaderDiv: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginVertical: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
});
