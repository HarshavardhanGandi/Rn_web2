import React from 'react';
import {StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';

import {COLORS, FONT, FS, SIZES, SHADOWS} from '../../constants';

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
  mainHeader: {
    backgroundColor: COLORS.white,
    borderColor: '#ededed',
    borderWidth: 1,
    elevation: 5,
    shadowColor: '#0000001a',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'relative',
    top: 0,
    zIndex: 1001,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLogo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    marginLeft: '15%',
    marginRight: '15%',
    justifyContent: 'space-between',
  },
  flexDirectionRow: {
    flexDirection: 'row',
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
  mr2: {
    marginRight: 20,
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
  nextBtn: {
    width: '50%',
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    marginTop: '3%',
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
  fs14: {
    fontSize: FS.fs14,
  },
  fs16: {
    fontSize: FS.fs16,
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
  registerBtn: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: '2%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: '2%',
    marginHorizontal: '1%',
  },
  registerText: {
    color: COLORS.primary,
    fontWeight: '600',
    marginHorizontal: 'auto',
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
  commonHeading: {
    fontSize: FS.fs32,
    color: COLORS.primaryBlack,
    fontWeight: '700',
    marginVertical: 20,
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
    borderColor: COLORS.gray,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 30,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  accountCard: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: '3%',
  },
  accountCardHighlight: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: '3%',
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
  table: {
    borderColor: COLORS.gray,
    borderWidth: 1,
    backgroundColor: COLORS.white,
  },
  thead: {
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
    // marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  th: {
    flex: 1,
    fontSize: FS.fs16,
    fontWeight: '700',
  },
  tr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 3,
    borderColor: COLORS.white,
    padding: 10,
    backgroundColor: COLORS.white,
    borderBottomColor: COLORS.border,
    borderWidth: 1,
  },
  td: {
    fontSize: FS.fs14,
    textAlign: 'left',
    flex: 1,
  },
  w20: {
    width: 100,
  },
  h20: {
    height: 100,
  },
  pageLoader: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  sidebar: {
    width: 200,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRightWidth: 1,
    borderColor: '#ccc',
    height: 'calc(100vh)',
  },
  sidebarItem: {
    padding: 10,
    fontSize: FS.fs14,
  },
  mainContent: {
    flex: 1,
    marginHorizontal: '2%',
  },
  flex1: {
    flex: 1,
  },
  selectAccount: {
    width: 40,
    height: 36,
  },
  ms1: {
    marginStart: '1%',
  },
  ms2: {
    marginStart: '2%',
  },
  ms3: {
    marginStart: '3%',
  },
  my3: {
    marginVertical: '3%',
  },
  mt3: {
    marginVertical: '3%',
  },
  disabledBtn: {
    backgroundColor: COLORS.gray,
    opacity: 0.5,
    width: '50%',
    borderRadius: 4,
    marginTop: '5%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
