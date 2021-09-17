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
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';



const CircleDetails = ({navigation}) => {
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
            
            <TouchableOpacity  onPress={() => navigation.navigate('Explore')}>
            <Image
                source={icons.back_arrow}
                resizeMode="contain"
                style={{width:30,height:30}}
              />
               </TouchableOpacity>
              <Text style={{color:COLORS.white,fontSize:18,marginLeft:SIZES.padding*4,fontWeight:'bold',textAlign:'center',justifyContent:'center'}}>TRADERKINGS</Text>
            </View>
           
           
          </View>

          <View style={{ 
                 width: '97%',
                 height: 175,
                 borderRadius:SIZES.radius,
                 backgroundColor:"#0C3BAA",
                 marginTop:SIZES.padding
                 }}>
              <View style={{flexDirection:"row",justifyContent:'space-between', marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
              <Text style={{color:'orange',fontSize:16,fontWeight:'bold',}}>TRADERKINGS</Text>
              <View style={{backgroundColor:'#FF9800',borderRadius:SIZES.radius*1,paddingLeft:12,paddingRight:12}}>
              <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Share</Text> 
              </View>
              </View>
              <Text style={{color:COLORS.white,fontSize:14,fontWeight:'bold',paddingHorizontal:SIZES.padding,paddingTop:2}}>🔥🔥CIRCLE IN INTELLIQ 🔥🔥🔥🔥CIRC.. 🔥🔥</Text>
                
                 <View style={{flexDirection:"row",justifyContent:'space-between', marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
                     <View style={{justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>
                             1
                         </Text>
                         <Text style={{fontWeight:'bold',color:'#FF9800',fontSize:14}}>
                             Title
                         </Text>
                     </View>
                     <View style={{justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>
                             199982
                         </Text>
                         <Text style={{fontWeight:'bold',color:'#FF9800',fontSize:14}}>
                             Member
                         </Text>
                     </View>
                     <View style={{justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>
                             23121
                         </Text>
                         <Text style={{fontWeight:'bold',color:'#FF9800',fontSize:14}}>
                             Liked
                         </Text>
                     </View>
                     <View style={{justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>
                             14
                         </Text>
                         <Text style={{fontWeight:'bold',color:'#FF9800',fontSize:14}}>
                             Essence
                         </Text>
                     </View>
                 </View>
                 <View
            style={{
              width: '100%',
              height: 50,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.4,
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('CircleStrategy')}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.4,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                TRADERKINGS   Strategy
              </Text>

              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                79.480940%
              </Text>
              <Image
                source={icons.right_arrow}
                resizeMode="cover"
                style={{
                  width: 30,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
            </View>
            </TouchableOpacity>
      
          </View>
              
    
                
          </View>

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

     


      {/* back arrow */}
          

          {/* {Balance} */}

     

          {/* {tRANDING} */}

   
        </ImageBackground>
      </View>
    );
  }
  return(
    <ScrollView>
      <View style={{flex: 1, paddingBottom:400}}>
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
export default CircleDetails;
