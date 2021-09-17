/* eslint-disable */
import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Modal,
  ImageBackground,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';


const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

const SimpleModal = () => {
    return(
        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>

            </View>
        </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        height:HEIGHT_MODAL,
        width:WIDTH -80,
        padding:10,
        backgroundColor:'white',
        borderRadius:SIZES.radius
    }
})

export {SimpleModal}