/* eslint-disable */
import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  useWindowDimensions,
  Dimensions
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { TabView, SceneMap } from 'react-native-tab-view';

import {useTheme} from '@react-navigation/native';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../../constants';

const imagesOne = [
  'https://www.linkpicture.com/q/Quantitative-2.png',
  'https://www.linkpicture.com/q/Quantitative.png',
  'https://www.linkpicture.com/q/Quantitative-1.png',
]
const FirstRoute = () => (
 
    <SafeAreaView>
    <View style={{alignItems: 'center', justifyContent: 'center',marginTop:100}}>
      <Image
        source={images.noFound}
        style={{
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
        }}
      />
    </View>
    </SafeAreaView>
      // 2nd box
);

const SecondRoute = () => (
     <SafeAreaView>
    <View style={{alignItems: 'center', justifyContent: 'center',marginTop:100}}>
      <Image
        source={images.noFound}
        style={{
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
        }}
      />
    </View>
    </SafeAreaView>
);



const SyncStrategy = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Binance' },
    { key: 'second', title: 'Huobi' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  
  function topSearchBar () {
    return(
      <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    )

  }

  
  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 170}}>
       <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              paddingHorizontal: SIZES.padding*0.2,
              backgroundColor:'#5D2DFD',
              paddingBottom:15
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
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginLeft: SIZES.padding * 4,
                }}>
    
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    marginLeft: SIZES.padding*0.2,
                    fontWeight: 'bold',
                  }}>
                  My Sync Strategy
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        {topSearchBar()}
        
 
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textInputStyle: {
    marginTop: 17,
height: 40,
borderWidth: 1,
paddingLeft: 20,
margin: 5,
borderRadius: 20,
borderColor: '#5D2DFD',
backgroundColor: '#FFFFFF',
},
});
export default SyncStrategy;
