/* eslint-disable */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';
const {width} = Dimensions.get('window');
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const InviteScreen = ({navigation}) => {


  function renderHead() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View
          style={{
            width: '100%',
            height: 70,
            flexDirection: 'row',
          }}>
          <ImageBackground
            source={images.banner}
            resizeMode="cover"
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            {/* {HeaderBar} */}

            <View
              style={{
                width: '100%',
                alignItems: 'flex-start',
                paddingHorizontal: SIZES.padding,
              }}>
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
                onPress={() => navigation.navigate('Home')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}>
                  <Image
                    source={icons.back_arrow}
                    resizeMode="contain"
                    style={{width: 30, height: 30}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      justifyContent: 'center',
                      flexDirection: 'row',
                      marginLeft: SIZES.padding * 4,
                    }}>
                    <Text
                      style={{
                        color: COLORS.white,
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Share And Earn
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }

  function renderHeader() {
    return (
        <View>
            <Image 
                source={require('../assets/bcBanner.png')}
                resizeMode="cover"
                style={{
                    flex: 2,
                    width:415,
                    height:659,
                    resizeMode: 'stretch', // or 'stretch'
                }}
            />
        </View>
    );
  }





  return (
    <ScrollView>
     
      <View style={{}}>
        {renderHead()}
        {renderHeader()}
        {/* {renderQuantCardOne()}
        {renderQuantCardTwo()}
        {renderQuantCardThree()}
        {renderQuantCardFour()} */}
      </View>
  
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonCustom: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 0.6,
  },
  filterContainer:{
    marginBottom:'25%'
  },
  item: {
    marginVertical: 8,
    width: 200,
    marginHorizontal: 16,
  },
  btnCustom:{
    width:100,
    fontWeight:'bold',
  },
  title: {
    fontSize: 15,
  },
  customStyle:{
    paddingHorizontal:SIZES.padding,
    color:COLORS.black,
    paddingTop:SIZES.padding*1,
    fontWeight:'700',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  btnCustom1:{
    width: 170,
  },

  modalView: {
    position: 'absolute',
   justifyContent: 'center',
    top: '30%',
    left: '40%',
    margin:0,
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 600,
    width: width * 1,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
});
export default InviteScreen;
