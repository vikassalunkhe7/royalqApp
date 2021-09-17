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



const CircleStrategy = ({navigation}) => {
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
      <TouchableOpacity onPress={() => navigation.navigate('QuantitativeDetails')}>
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
  


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Binance'},
    {key: 'second', title: 'Huobi'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  
  });

  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  function renderHeaderOne() {
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
            
            <TouchableOpacity  onPress={() => navigation.navigate('CircleDetails')}>
            <Image
                source={icons.back_arrow}
                resizeMode="contain"
                style={{width:30,height:30}}
              />
               </TouchableOpacity>
              <Text style={{color:COLORS.white,fontSize:18,marginLeft:SIZES.padding*5,fontWeight:'bold',textAlign:'center',justifyContent:'center'}}>Strategy</Text>
            </View>
           
           
          </View>

          <View style={{ 
                 width: '97%',
                 height: 145,
                 borderRadius:SIZES.radius,
                 backgroundColor:"#0C3BAA",
                 marginTop:SIZES.padding
                 }}>
              <View style={{flexDirection:"row",alignItems:'center', marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
              <View style={{paddingLeft:12,paddingRight:12,borderRadius:50}}>
              <Image
                source={images.two}
                resizeMode="contain"
                style={{width:40,height:40,}}
              />
              </View>
              <Text style={{color:'orange',fontSize:16,fontWeight:'bold',}}>TRADERKINGS</Text>          
           
              </View>

              <View style={{flexDirection:"row",justifyContent:'space-between', marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
              <Text style={{color:'white',fontSize:16,fontWeight:'bold',}}>Cumulative profit rate</Text>
              <Text style={{color:'white',fontSize:16,fontWeight:'bold',}}>197.6%</Text>
              <View style={{paddingLeft:12,paddingRight:12}}>
              <Image
                source={images.bitcoin}
                resizeMode="contain"
                style={{width:30,height:30}}
              />
              </View>

              
              </View>
                
                 <View style={{flexDirection:"row",justifyContent:'space-between', marginTop:SIZES.padding,paddingHorizontal:SIZES.padding}}>
             
                     
                 </View>
               
             
    
                
          </View>

          

   
        </ImageBackground>
      </View>
    );
  }
  return (
    <ScrollView>
          {renderHeaderOne()}
      <TabView
      style={{marginTop:85}}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
      />
         <View>
         <View
            style={{padding: 10, backgroundColor: '#0C3BAA', width: '100%'}}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Sync Strategy
            </Text>
          </View>
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
export default CircleStrategy;
