/* eslint-disable */
import React from 'react';
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
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../../constants';



const CircleDetailsOwner = ({navigation}) => {
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  function renderHeader() {
    const renderItem = ({item, index}) => (
      <TouchableOpacity
        style={{
          width: 180,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.white,
        }}
        onPress={() =>
          navigation.navigate('CryptoDetail', {
            currency: item,
          })
        }>
        {/* {currencies} */}

        <View
          style={{
            flexDirection: 'row',
          }}>
          <View>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{
                marginTop: 5,
                width: 25,
                height: 25,
              }}
            />
          </View>

          <View
            style={{
              marginLeft: SIZES.base,
            }}>
            <Text
              style={{
                ...FONTS.h2,
              }}>
              {item.currency}
            </Text>

            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body3,
              }}>
              {item.code}
            </Text>
          </View>
        </View>

        {/* {value} */}

    
      </TouchableOpacity>
    );
    return (


      
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection:'row'
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
                flexDirection:'row',
                justifyContent: 'center',
              }}
             >
            
            </TouchableOpacity>

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',}}>
            
            <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
            <Image
                source={icons.back_arrow}
                resizeMode="contain"
                style={{width:30,height:30}}
              />
               </TouchableOpacity>
              <Text style={{color:COLORS.white,fontSize:18,marginLeft:SIZES.padding,fontWeight:'bold'}}>Circle Owner Details</Text>
            </View>
           
           
          </View>

          <View style={{ 
                 width: '90%',
                 height: 60,
                 borderRadius:SIZES.radius,
                 backgroundColor:"#FFDD3C",
                 marginTop:SIZES.padding,
                 alignItems:'center',justifyContent:'center'
                 }}>
              <View style={{flexDirection:"row",justifyContent:'space-evenly',alignItems:'center'}}>
              <Text style={{color:'black',fontSize:16,fontWeight:'bold',}}>Cumulative Profit(USDT)</Text>
              <Text style={{color:'black',fontSize:16,marginLeft:SIZES.padding,fontWeight:'bold'}}>----</Text> 
              </View>
             
          </View>
          

     


      {/* back arrow */}
          

          {/* {Balance} */}

     

          {/* {tRANDING} */}

       <View style={{marginTop:30}}>
            <Image
                source={images.noFound}
                style={{
                    width:150,
                    height:150
                }}
            />
      </View>
        </ImageBackground>
      </View>
  
    );
  }
  return(
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 300}}>
        {renderHeader()}
      </View>
    </ScrollView>
 
  )
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
});
export default CircleDetailsOwner;
