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
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';

const imagesOne = [
  'https://www.linkpicture.com/q/Quantitative-2.png',
  'https://www.linkpicture.com/q/Quantitative.png',
  'https://www.linkpicture.com/q/Quantitative-1.png',
]


const HomeScreen = ({navigation}) => {

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
  
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Circle' },
    { key: 'second', title: 'Dynamic' },
    { key: 'third', title: 'Manage' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
  });

  


  


  return (
    
    <ScrollView>

    <View style={{flex: 1, paddingBottom: 130}}>

    <TabView
  navigationState={{ index, routes }}
  onIndexChange={setIndex}
  renderScene={SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute
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

export default HomeScreen;
