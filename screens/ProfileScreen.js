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
  ImageBackground,
  Modal,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';
const {width} = Dimensions.get('window');
import { RadioButton } from 'react-native-paper';

const ProfileScreen = ({navigation}) => {

    // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState('');

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };
 const [checked, setChecked] = React.useState('first');


  const layout = useWindowDimensions();
  const FirstRoute = () => (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      </View>
      <TouchableOpacity
      onPress={toggleModalVisibility}
      >
       <Text style={{textAlign:'right',paddingHorizontal:SIZES.padding,  marginTop: SIZES.padding * 0.2,  textDecorationLine: 'underline',
              color: 'blue',
              ...FONTS.h3,}}>
       Batch Settings
      </Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={() => navigation.navigate('QuantitativeDetails')}>
      <View
        style={{
          marginTop: SIZES.padding * 0.7,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.bitcoin}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              BTC/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
      
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.ethereum}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              ETH/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
  
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.litecoin}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              LTC/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.ripple}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              RPL/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
  
  const SecondRoute = () => (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
      </View>
  
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.bitcoin}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              BTC/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
  
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.ethereum}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              ETH/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
  
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.litecoin}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              LTC/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
      </View>
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          height: 110,
          padding: 5,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          ...styles.shadow,
        }}>
        <View
          style={{
            paddingLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 9,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={images.ripple}
              resizeMode="cover"
              style={{
                marginTop: 5,
                borderRadius: 5,
                width: 20,
                height: 20,
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
              RPL/<Text style={{fontSize: 10}}>USDT</Text>
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
                Cycle
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#ff6262',
                padding: 6,
                width: 100,
                borderRadius: 5,
                textAlign: 'center',
                marginLeft: 80,
              }}>
              <Text style={{color: COLORS.white, textAlign: 'center'}}>
                0.00%
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Quantity</Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>+0.0</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Floating Profit
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5}}>0.00%</Text>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.padding}}>
          <View style={{flexDirection: 'row', marginTop: 2}}>
            <Text style={{fontSize: 13, color: COLORS.black}}>Price</Text>
            <Text style={{color: COLORS.black, marginLeft: 8}}>3.3333</Text>
            <Text style={{fontSize: 13, color: COLORS.black, marginLeft: 20}}>
              Increase
            </Text>
            <Text style={{color: COLORS.black, marginLeft: 5, color: 'red'}}>
              0.00%
            </Text>
          </View>
        </View>
        <View>
          <View />
        </View>
        <View />
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

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All'},
    {key: 'second', title: 'Cycle'},
    {key: 'third', title: 'One-shot'},
    {key: 'four', title: 'Stop'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourthRoute,
  });

  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);

  return (
    <ScrollView>
            <Modal 
        style={{
            backgroundColor: '#5D2DFD',
          }}
        animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingBottom:SIZES.padding,marginTop:2}}>
                        <Text style={{fontSize:16,}}>Operated Only For Selected Coin</Text>
                    
                    <RadioButton
                        value="second"
                        status={ checked === 'second' ? 'checked' : 'unchecked' }
                        onPress={() => setChecked('second')}
                      />
                    </View>
                
                      <View
            style={{
              width: '98%',
              height: 165,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                marginTop: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.exch}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />

                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.white,
                    marginTop: 3,
                    fontWeight: 'bold',
                  }}>
                  Cycle
                </Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={icons.chain}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />

                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.white,
                    marginTop: 3,
                    fontWeight: 'bold',
                  }}>
                  Sell
                </Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Image
                  source={icons.moneybag}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />

                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.white,
                    marginTop: 3,
                    fontWeight: 'bold',
                  }}>
                  Buy
                </Text>
              </View>
            </View>

            <View
              style={{
                marginTop: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingHorizontal: SIZES.padding,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Image
                  source={icons.trans}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />

                <Text style={{fontSize: 15, color: COLORS.white, marginTop: 3}}>
                  Stop Margin Call
                </Text>
              </View>
              <TouchableOpacity onPress={toggleModalVisibility}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={icons.star}
                    style={{
                      width: 30,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />

                  <Text
                    style={{fontSize: 15, color: COLORS.white, marginTop: 3}}>
                    Strategy Mode
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Cancel" onPress={toggleModalVisibility} />
                <Text
                  style={{
                    marginLeft: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  Confirm
                </Text>
              </View>
                        
                    </View>
                </View>
            </Modal>
      <TabView
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
          third: ThirdRoute,
          four: FourthRoute,
        })}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 300,
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 7,
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
    buttonCustom: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 0.6,
  },
  item: {
    marginVertical: 8,
    width: 200,
    marginHorizontal: 16,
  },
   viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: 15,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default ProfileScreen;
