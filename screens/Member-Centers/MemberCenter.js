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
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';

import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../../constants';



const MemberCenter = ({navigation}) => {


  
  const FirstRoute = () => (
    <SafeAreaView style={{justifyContent:'center',}}>
      <TouchableOpacity onPress={() => navigation.navigate('QuantitativeDetails')} style={{
      }}>
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          paddingHorizontal:SIZES.padding,
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
  {key: 'first', title: 'Binance'},
  {key: 'second', title: 'Huobi'},
]);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


  // const [history, setTransactionHistory] = React.useState(dummyData.transactionHistory)
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  function renderHeader() {
    const renderItem = ({item, index}) => (
      <TouchableOpacity
        style={{
          width: 350,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          marginLeft: index == 0 ? SIZES.padding : 0,
          marginRight: SIZES.radius,
          borderRadius: 10,
          backgroundColor: '#c2e9fb',
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
              source={icons.hb}
              resizeMode="cover"
              style={{
                marginTop: 5,
                width: 35,
                height: 35,
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
              r239926ICDB
            </Text>

         
              <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body6,
           
              }}>
              2021-11-23  Maturity <Text style={{color:COLORS.black}}>Turn on automatic renewal</Text>
            </Text>
              </View>
      
          </View>
      

        {/* {value} */}
        <View style={{     
            paddingTop:6,
            marginTop:6,
            justifyContent:'center'
           }}>
        <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body6,
                textAlign:'center'
              }}>
              Directly Push 3V1s and <Text style={{color:'blue'}}>20 team Members</Text>
          
            </Text>
            </View>
        <View
          style={{
            marginTop: SIZES.radius*2,
            backgroundColor:'#FF9800',
            borderRadius:5,
            justifyContent:'center',
       
           
          }}>
          <Text
            style={{
              ...FONTS.h3,
              padding:10,
              textAlign:'center',   
              
            }}>
            Renew
          </Text>

          {/* <Text
            style={{
              color: item.type == 'I' ? COLORS.green : COLORS.red,
              ...FONTS.h3,
            }}>
            {item.changes}
          </Text> */}
        </View>
      </TouchableOpacity>
    );
    return (
      <View
        style={{
          width: '100%',
          height: 290,
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
              marginTop: SIZES.padding * 1,
              width: '100%',
              alignItems: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
        
              }}
              onPress={() => navigation.navigate('Home')}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Goto Home</Text>
            </TouchableOpacity>
          </View>

          {/* {Balance} */}

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:14
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}>
              IntelliQ Member Center
            </Text>
            <Text
              style={{
                marginTop: SIZES.base,
                color: COLORS.white,
                ...FONTS.h1,
              }}>
              12719 
            </Text>

            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}>
                Members Joined
            </Text>
          </View>

          {/* {tRANDING} */}

          <View
            style={{
              position: 'absolute',
              bottom: '-25%',
              ...styles.shadow,
            }}>
            <Text
              style={{
                marginLeft: SIZES.padding,
                color: COLORS.white,
                ...FONTS.h2,
              }}>
              
            </Text>

            <FlatList
              contentContainerStyle={{
                marginTop: SIZES.base,
              }}
              data={trending}
              renderItem={renderItem}
              keyExtractor={item => `${item.id}`}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderBoxMenu() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 4.5,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          justifyContent: 'space-evenly',
          ...styles.shadow,
        }}>
      


        <View>
            <Text style={{textAlign:'center',fontWeight:'700',color:'#FF9800'}}>
                VIP membership rights
            </Text>
        </View>

        
        <View style={{paddingHorizontal:SIZES.padding,flexDirection:'row',marginTop:12,alignItems:'center'}}>
            <Image
            source={icons.moneybag}
            style={{
                width:30,
                height:30,
             
            }}
            >
            </Image>
            <View style={{flexDirection:'column',paddingHorizontal:SIZES.padding,}}>
                <Text style={{fontWeight:'bold'}}>
                    Direct recommend award
                </Text>
                <Text>
                    Robot activation direct push-30 -USDT
                </Text>
            </View>
        </View>

        <View style={{paddingHorizontal:SIZES.padding,flexDirection:'row',marginTop:12,alignItems:'center'}}>
            <Image
            source={icons.exch}
            style={{
                width:30,
                height:30,
             
            }}
            >
            </Image>
            <View style={{flexDirection:'column',paddingHorizontal:SIZES.padding,}}>
                <Text style={{fontWeight:'bold'}}>
                    Team Rewards
                </Text>
                <Text>
                    Profit Distribution Team/Reward ratio 20%
                </Text>
            </View>
        </View>
      </View>
    );
  }

  function renderTutMenu() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          ...styles.shadow,
        }}>
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#c2e9fb',
              width: 150,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.userguide}
              style={{
                resizeMode: 'cover',
                borderRadius: 10,
                width: 150,
                height: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{marginLeft: 3}}>User Guide</Text>
            <Image
              source={icons.right_arrow}
              style={{
                width: 15,
                height: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#c2e9fb',
              width: 150,
              height: 70,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={images.quant}
              style={{
                resizeMode: 'cover',
                borderRadius: 10,
                width: 150,
                height: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text>Quantitative Course</Text>
            <Image
              source={icons.right_arrow}
              style={{
                width: 15,
                height: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderNotice() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: 20,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.secondary,
          ...styles.shadow,
        }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
            textAlign:'center',
            // fontWeight:500
          }}>
          Member Use Rules
        </Text>

        <Text
          style={{
            color: COLORS.white,
            marginTop: SIZES.base,
            ...FONTS.body4,
            lineHeight: 18,
          }}>
          1. Its Very Difficult Time To An Investment , Especially When The Market.
         <Text>
         2. Is Violite ,Learn How To use dollar cost averaging to your advantage.
         </Text>
        </Text>

        <TouchableOpacity
          styles={{
            marginTop: SIZES.base,
            paddingTop: SIZES.base,
          }}
          onPress={() => console.log('Learn More')}>
          <Text
            style={{
              textDecorationLine: 'underline',
              marginTop: SIZES.base,
              color: COLORS.green,
              ...FONTS.h3,
            }}>
            Learn More
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderAlert() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          backgroundColor: 'white',
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}>
        <Image
          source={icons.notification_color}
          style={{
            width: 30,
            height: 30,
            marginRight: SIZES.padding,
          }}
        />
        <View>
          <Text style={{...FONTS.h3}}>Set Price Alert</Text>
          <Text style={{...FONTS.body4}}>
            Get Notified When your coins are moving{' '}
          </Text>
        </View>
        <Image
          source={icons.right_arrow}
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.gray,
          }}
        />
      </TouchableOpacity>
    );
  }

  function renderTransaction() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.radius,
          ...styles.shadow,
        }}>
        <Image
          source={icons.transaction}
          style={{
            width: 30,
            height: 30,
            marginRight: SIZES.padding,
          }}
        />
        <View>
          <Text style={{...FONTS.h3}}>Sold Ethereum</Text>
          <Text style={{...FONTS.body4}}>13/12/2021</Text>
        </View>
        {/* <Image
                  source={icons.right_arrow}
                  style={{
                      width:25,
                      height:25,
                      tintColor: COLORS.gray,
                      marginLeft:30
                  }}
              /> */}
      </TouchableOpacity>
    );
  }

  return (
    <ScrollView>
      <View style={{flex: 1, paddingBottom: 100}}>
        {renderHeader()}
        {renderBoxMenu()}
        {/* {renderTutMenu()} */}
        {/* <TabView style={{
          marginTop:10,
          backgroundColor:'transparent',
          padding:SIZES.padding*0.5,
          justifyContent:'center',
        }}
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
      /> */}
        {/* {renderAlert()} */}
        {renderNotice()}
        {/* {renderTransaction()} */}
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
});

export default MemberCenter;
