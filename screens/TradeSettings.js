/* eslint-disable */
import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  Switch,
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
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';

const TradeSettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  function renderHeader() {
    return (
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
                onPress={() => navigation.navigate('QuantitativeDetails')}>
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
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    marginLeft: SIZES.padding,
                    fontWeight: 'bold',
                  }}>
                    Trade Settings
                </Text>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    marginLeft: SIZES.padding,
                    fontWeight: 'bold',
                  }}>
                  Save
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }





  function renderQuantCardThree() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * 1,
        }}>
        <ImageBackground
          source={images.bannerw}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* {HeaderBar} */}

          <View
            style={{
              width: '90%',
              height: 50,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.0,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                First buy in amount
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                10 USDT
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
  function renderQuantCardFive() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * -3.5
        ,
        }}>
        <ImageBackground
          source={images.bannerw}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* {HeaderBar} */}

          <View
            style={{
              width: '90%',
              height: 50,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.0,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Opened Position Doubled
              </Text>
              <View style={styles.container}>
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
  function renderQuantCardSix() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * -3.5
        ,
        }}>
        <ImageBackground
          source={images.bannerw}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* {HeaderBar} */}

          <View
            style={{
              width: '90%',
              height:300,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.0,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                borderBottomColor:'#fff',
                borderBottomWidth:1
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                Margin Call Limit
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                7 Time
              </Text>
              
        
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                borderBottomColor:'#fff',
                borderBottomWidth:1
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                Whole Position take profit ratio
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                1.3 %
              </Text>
              
        
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                borderBottomColor:'#fff',
                borderBottomWidth:1
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                Whole Position take profit callback
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                0.3 %
              </Text>
            </View>

            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                borderBottomColor:'#fff',
                borderBottomWidth:1
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
               Margin Configuration
              </Text>
              <Image 
              source={icons.right_arrow}
              style={{
                width:20,
                height:20,
                paddingBottom:3
              }}
              />
            </View>

            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                borderBottomColor:'#fff',
                borderBottomWidth:1
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                Whole Position take profit callback
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                0.3 %
              </Text>
            </View>

            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                borderBottomColor:'#fff',
                borderBottomWidth:1
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                Whole Position take profit callback
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                0.3 %
              </Text>
            </View>

            
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,

                
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                Whole Position take profit callback
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15,paddingBottom:SIZES.base}}>
                0.3 %
              </Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }


  function renderQuantCardSeven() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop:SIZES.padding*7
        }}>
        <ImageBackground
          source={images.bannerw}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          {/* {HeaderBar} */}

          <View
            style={{
              width: '90%',
              height: 50,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.0,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Get Suggested Strategy
              </Text>
             
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }



  return (
    <ScrollView >
      <View style={{flex: 1}}>
        {renderHeader()}
        {renderQuantCardThree()}
        {renderQuantCardFive()}
        {renderQuantCardSix()}
        {renderQuantCardSeven()}

      </View>
      <View style={{flexDirection:'row'}}>
 
   

     
      </View>
    </ScrollView>

    

 
    
  );
};
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
 
    bottomView:{
 
      width: '100%', 
      height: 50, 
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 
    textStyle:{
 
      color: '#fff',
      fontSize:22
    }
});
export default TradeSettings;
