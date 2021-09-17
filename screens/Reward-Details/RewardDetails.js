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
  useWindowDimensions ,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../../constants';

const imagesOne = [
  'https://www.linkpicture.com/q/Quantitative-2.png',
  'https://www.linkpicture.com/q/Quantitative.png',
  'https://www.linkpicture.com/q/Quantitative-1.png',
]


const RewardDetails = ({navigation}) => {

  const FirstRoute = () => (
    <SafeAreaView style={styles.container}>
  
    <View >
        <TextInput
           style={styles.textInputStyle}
           underlineColorAndroid="transparent"
           placeholder="Search Here"
         />
     </View>
  
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
      >
  
      {
        imagesOne.map ((e,index) => 
        <Image  
                         source={{uri:e}}
                          style={styles.wrap}
                          resizeMode="stretch"
  
        />
        )
      }
      </ScrollView>
      <View>
        <View style={{borderRadius:SIZES.radius,marginHorizontal: SIZES.padding*0.4,marginTop:12,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',...styles.shadow,padding:20}}>
          <Text>
            Discover Circle
          </Text>
          <Text>
            English
          </Text>
      
        </View>
      </View>
     
      <TouchableOpacity  onPress={() => navigation.navigate('CircleDetails')}>
      <View
      style={{
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        height: 130,
        padding: 5,
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        ...styles.shadow,
      }}>
      <View
        style={{
          // paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
           marginHorizontal: SIZES.padding,
          marginTop: 9,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',}}>
       
          <Text 
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 3,
            }}>  
            09-11 | 2021
          </Text>
    
      
        </View>
        <View style={{ alignItems:'center',
              justifyContent:'center'}}>
          <View
            style={{
              backgroundColor: '#ff6262',
              padding: 6,
              width: 100,
              borderRadius: 5,
              textAlign: 'center',
              marginLeft: 10,
              
            }}>
            <Text style={{color: COLORS.white, textAlign: 'center',fontWeight:'bold'}}>
              View
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: SIZES.padding,ustifyContent:'center',}}>
        <View style={{flexDirection: 'row', marginTop: 10,textAlign: 'center',ustifyContent:'center',}}>
          <Text style={{textAlign: 'center',fontSize: 14, color: 'red',justifyContent:'center',alignItems:'center'}}>PROFIT</Text>
        </View>
      </View>
  
  
      <View style={{marginHorizontal: SIZES.padding,backgroundColor:'gray',marginTop:12,borderRadius:SIZES.radius,padding:2}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>0.1168 USDT </Text>
      </View>
      <View>
        <View/>
      </View>
      <View/>
    </View>
   
  
  
  
  
      <View
      style={{
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        height: 130,
        padding: 5,
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        ...styles.shadow,
      }}>
      <View
        style={{
          // paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
           marginHorizontal: SIZES.padding,
          marginTop: 9,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',}}>
       
          <Text 
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 3,
            }}>  
            09-11 | 2021
          </Text>
    
      
        </View>
        <View style={{ alignItems:'center',
              justifyContent:'center'}}>
          <View
            style={{
              backgroundColor: '#ff6262',
              padding: 6,
              width: 100,
              borderRadius: 5,
              textAlign: 'center',
              marginLeft: 10,
              
            }}>
            <Text style={{color: COLORS.white, textAlign: 'center',fontWeight:'bold'}}>
              View
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: SIZES.padding,ustifyContent:'center',}}>
        <View style={{flexDirection: 'row', marginTop: 10,textAlign: 'center',ustifyContent:'center',}}>
          <Text style={{textAlign: 'center',fontSize: 14, color: 'red',justifyContent:'center',alignItems:'center'}}>PROFIT</Text>
        </View>
      </View>
  
  
      <View style={{marginHorizontal: SIZES.padding,backgroundColor:'green',marginTop:12,borderRadius:SIZES.radius,padding:2}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>0.112862862 USDT </Text>
      </View>
      <View>
        <View/>
      </View>
      <View/>
    </View>



          <View
      style={{
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        height: 130,
        padding: 5,
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        ...styles.shadow,
      }}>
      <View
        style={{
          // paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
           marginHorizontal: SIZES.padding,
          marginTop: 9,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',}}>
       
          <Text 
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 3,
            }}>  
            09-11 | 2021
          </Text>
    
      
        </View>
        <View style={{ alignItems:'center',
              justifyContent:'center'}}>
          <View
            style={{
              backgroundColor: '#ff6262',
              padding: 6,
              width: 100,
              borderRadius: 5,
              textAlign: 'center',
              marginLeft: 10,
              
            }}>
            <Text style={{color: COLORS.white, textAlign: 'center',fontWeight:'bold'}}>
              View
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: SIZES.padding,ustifyContent:'center',}}>
        <View style={{flexDirection: 'row', marginTop: 10,textAlign: 'center',ustifyContent:'center',}}>
          <Text style={{textAlign: 'center',fontSize: 14, color: 'red',justifyContent:'center',alignItems:'center'}}>PROFIT</Text>
        </View>
      </View>
  
  
      <View style={{marginHorizontal: SIZES.padding,backgroundColor:'gray',marginTop:12,borderRadius:SIZES.radius,padding:2}}>
          <Text style={{color:'white',textAlign:'center',fontWeight:'bold'}}>0.13936779 USDT </Text>
      </View>
      <View>
        <View/>
      </View>
      <View/>
    </View>
    </TouchableOpacity>
      </SafeAreaView>
  );
  
  const SecondRoute = () => (
    <SafeAreaView style={styles.container}>
  
    <View >
        <TextInput
           style={styles.textInputStyle}
           underlineColorAndroid="transparent"
           placeholder="Search Here"
         />
     </View>
  
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.wrap}
      >
  
      {
        imagesOne.map ((e,index) => 
        <Image  
                         source={{uri:e}}
                          style={styles.wrap}
                          resizeMode="stretch"
  
        />
        )
      }
      </ScrollView>
      <View>
        <View style={{borderRadius:SIZES.radius,marginHorizontal: SIZES.padding*0.4,marginTop:12,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',...styles.shadow,padding:20}}>
          <Text>
            Discover Circle
          </Text>
          <Text>
            English
          </Text>
      
        </View>
      </View>
      <View
      style={{
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        height: 140,
        padding: 5,
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        ...styles.shadow,
      }}>
      <View
        style={{
          // paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 9,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',}}>
          <Image
            source={images.three}
            resizeMode="cover"
            style={{
              marginTop: 5,
              borderRadius: 5,
              width: 50,
              height: 50,
            }}
          />
          <Text 
            style={{
              paddingLeft: 8,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 3,
            }}>  
            TRADER<Text >KING</Text>
          </Text>
          <View
            style={{
              paddingLeft: 10,
              width: 60,
              height: 20,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: COLORS.white,
                backgroundColor: COLORS.secondary,
                textAlign: 'center',
                borderRadius: 5,
              }}>
              Free
            </Text>
          </View>
        </View>
        <View style={{ alignItems:'center',
              justifyContent:'center'}}>
          <View
            style={{
              backgroundColor: '#ff6262',
              padding: 6,
              width: 100,
              borderRadius: 5,
              textAlign: 'center',
              marginLeft: 10,
             
              
            }}>
            <Text style={{color: COLORS.white, textAlign: 'center',fontWeight:'bold'}}>
              View
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: SIZES.padding,ustifyContent:'center',}}>
        <View style={{flexDirection: 'row', marginTop: 10,textAlign: 'center',ustifyContent:'center',}}>
          <Text style={{textAlign: 'center',fontSize: 14, color: 'red',justifyContent:'center',alignItems:'center'}}>Sync Strategy Is Turned On</Text>
        </View>
      </View>
  
  
      <View style={{marginHorizontal: SIZES.padding,backgroundColor:'black',marginTop:6,borderRadius:SIZES.radius,padding:2}}>
          <Text style={{color:'white',textAlign:'center',}}>🔥🔥AGGRESSIVE HIGH RETURN 🔥🔥 </Text>
      </View>
      <View>
        <View/>
      </View>
      <View/>
    </View>
   
  
    <View
      style={{
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        height: 140,
        padding: 5,
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        ...styles.shadow,
      }}>
      <View
        style={{
          // paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 9,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',}}>
          <Image
            source={images.two}
            resizeMode="cover"
            style={{
              marginTop: 5,
              borderRadius: 5,
              width: 50,
              height: 50,
            }}
          />
          <Text 
            style={{
              paddingLeft: 8,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 3,
            }}>  
            TRADER<Text >KING</Text>
          </Text>
          <View
            style={{
              paddingLeft: 10,
              width: 60,
              height: 20,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: COLORS.white,
                backgroundColor: COLORS.secondary,
                textAlign: 'center',
                borderRadius: 5,
              }}>
              Free
            </Text>
          </View>
        </View>
        <View style={{ alignItems:'center',
              justifyContent:'center'}}>
          <View
            style={{
              backgroundColor: '#ff6262',
              padding: 6,
              width: 100,
              borderRadius: 5,
              textAlign: 'center',
              marginLeft: 10,
             
              
            }}>
            <Text style={{color: COLORS.white, textAlign: 'center',fontWeight:'bold'}}>
              View
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: SIZES.padding,ustifyContent:'center',}}>
        <View style={{flexDirection: 'row', marginTop: 10,textAlign: 'center',ustifyContent:'center',}}>
          <Text style={{textAlign: 'center',fontSize: 14, color: 'red',justifyContent:'center',alignItems:'center'}}>Sync Strategy Is Turned On</Text>
        </View>
      </View>
  
  
      <View style={{marginHorizontal: SIZES.padding,backgroundColor:'black',marginTop:6,borderRadius:SIZES.radius,padding:2}}>
          <Text style={{color:'white',textAlign:'center',}}>🔥🔥DIVERSITY IS KEY OF MORE VARITEY 🔥 </Text>
      </View>
      <View>
        <View/>
      </View>
      <View/>
    </View>
    <View
      style={{
        marginTop: SIZES.padding * 1.5,
        marginHorizontal: SIZES.padding,
        height: 140,
        padding: 5,
        borderRadius: SIZES.radius,
        backgroundColor: 'white',
        ...styles.shadow,
      }}>
      <View
        style={{
          // paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 9,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',}}>
          <Image
            source={images.four}
            resizeMode="cover"
            style={{
              marginTop: 5,
              borderRadius: 5,
              width: 50,
              height: 50,
            }}
          />
          <Text 
            style={{
              paddingLeft: 8,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 3,
            }}>  
            TRADER<Text >KING</Text>
          </Text>
          <View
            style={{
              paddingLeft: 10,
              width: 60,
              height: 20,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 13,
                color: COLORS.white,
                backgroundColor: COLORS.secondary,
                textAlign: 'center',
                borderRadius: 5,
              }}>
              Free
            </Text>
          </View>
        </View>
        <View style={{ alignItems:'center',
              justifyContent:'center'}}>
          <View
            style={{
              backgroundColor: '#ff6262',
              padding: 6,
              width: 100,
              borderRadius: 5,
              textAlign: 'center',
              marginLeft: 10,
             
              
            }}>
            <Text style={{color: COLORS.white, textAlign: 'center',fontWeight:'bold'}}>
              View
            </Text>
          </View>
        </View>
      </View>
      <View style={{marginHorizontal: SIZES.padding,ustifyContent:'center',}}>
        <View style={{flexDirection: 'row', marginTop: 10,textAlign: 'center',ustifyContent:'center',}}>
          <Text style={{textAlign: 'center',fontSize: 14, color: 'red',justifyContent:'center',alignItems:'center'}}>Sync Strategy Is Turned On</Text>
        </View>
      </View>
  
  
      <View style={{marginHorizontal: SIZES.padding,backgroundColor:'black',marginTop:6,borderRadius:SIZES.radius,padding:2}}>
          <Text style={{color:'white',textAlign:'center',}}>🔥🔥CIRCLE IN INTELLIQ 🔥🔥 </Text>
      </View>
      <View>
        <View/>
      </View>
      <View/>
    </View>
      </SafeAreaView>
  );
  
  const ThirdRoute = () => (
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

    const FourthRoute = () => (
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
  
  
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Active' },
    { key: 'third', title: 'Direct' },
    { key: 'fourth', title: 'Team qu..' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
    fourth:FourthRoute
  });

  


  


  return (
    
    <ScrollView>

    <View style={{flex: 1, paddingBottom: 130}}>
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
                  Reward Details
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

            <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third:ThirdRoute,
            fourth:FourthRoute
        })}
        />
    
      {/* {renderSlider()}
      {filterSectionView()}
      {renderBoxMenu()}
      {renderBoxMenuone()}
      {renderBoxMenuthird()}
      {renderBoxMenufour()} */}
      
    </View>
  </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height*0.25,
    
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

export default RewardDetails;
