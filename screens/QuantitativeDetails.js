/* eslint-disable */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../constants';
const {width} = Dimensions.get('window');
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Whole Warehouse Mode',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sub-bin Mode',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sub-bin Mode Real-time settlement',
  },
];
const QuantitativeDetails = ({navigation}) => {
  const renderItem = ({item}) => <Item title={item.title} />;
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);



   // This is to manage Modal State Second Modal
   const [isModalVisibleOne, setModalVisibleOne] = useState(false);

   // This is to manage TextInput State
   const [inputValueOne, setInputValueOne] = useState('');
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalVisibilityOne = () => {
     setModalVisibleOne(!isModalVisibleOne);
   };


  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState('');

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  
  function renderHeader() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
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
                onPress={() => navigation.navigate('Profile')}>
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
                  Log
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('TransactionRecord')}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    marginLeft: SIZES.padding,
                    fontWeight: 'bold',
                  }}>
                  Transaction Record
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View
            style={{
              width: '90%',
              height: 205,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                paddingHorizontal: SIZES.padding,
              }}>
              <Image
                source={images.bitcoin}
                resizeMode="cover"
                style={{
                  borderRadius: 5,
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{
                  color: 'orange',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
                Bitcoin/USDT
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.5,
                paddingHorizontal: SIZES.padding,
              }}>
              <View
                style={{
                  padding: 1,
                  backgroundColor: 'orange',
                  borderRadius: SIZES.radius,
                }}>
                <Text
                  style={{
                    color: 'white',
                    paddingHorizontal: SIZES.padding * 0.5,
                    fontSize: 11,
                    fontWeight: 'bold',
                  }}>
                  One-shot
                </Text>
              </View>
              <View
                style={{
                  padding: 1,
                  backgroundColor: '#5D2DFD',
                  borderRadius: SIZES.radius,
                  marginLeft: SIZES.padding * 0.5,
                }}>
                <Text
                  style={{
                    color: 'white',
                    paddingHorizontal: SIZES.padding * 0.5,
                    fontSize: 11,
                    fontWeight: 'bold',
                  }}>
                  Whole Warehouse Mode
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 0.5,
                paddingHorizontal: SIZES.padding,
              }}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                0.000
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                0.000
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                0.000
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 0.1,
                paddingHorizontal: SIZES.padding,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 11,
                  fontWeight: 'bold',
                  paddingHorizontal: SIZES.padding * 0.5,
                }}>
                Pos Amt (USDT)
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 11,
                  fontWeight: 'bold',
                }}>
                Avg Price
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 11,
                  fontWeight: 'bold',
                }}>
                No.of Call Margin
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 0.5,
                paddingHorizontal: SIZES.padding,
              }}>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                0.000
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                0.000
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                0.000
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: SIZES.padding * 0.1,
                paddingHorizontal: SIZES.padding,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 11,
                  fontWeight: 'bold',
                  paddingHorizontal: SIZES.padding * 0.5,
                }}>
                Pos Quantity (BTX)
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 11,
                  fontWeight: 'bold',
                }}>
                Current Price
              </Text>
              <Text
                style={{
                  color: 'white',
                  paddingHorizontal: SIZES.padding * 0.5,
                  fontSize: 11,
                  fontWeight: 'bold',
                }}>
                Return Rate
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderQuantCardOne() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * 4,
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
                onPress={() => navigation.navigate('Quantitative')}
              />
            </View>
          </View>

          <View
            style={{
              width: '90%',
              height: 165,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding,
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
        </ImageBackground>
      </View>
    );
  }

  function renderQuantCardTwo() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * 2,
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
              height: 165,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding,
              paddingHorizontal: SIZES.padding,
            }}>
            <View>
              <Text
                style={{
                  marginTop: SIZES.padding,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                Operation Reminder
              </Text>
              <Text style={{marginTop: SIZES.padding * 0.3, color: 'white'}}>
                The IntelliQ Blockchain is open-source technology which offers
                an alternative to the traditional intermediary for transfers of
                the crypto-currency Bitcoin. The intermediary is replaced by the
                collective verification of the ecosystem offering a huge degree
                of traceability, security and speed.
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderQuantCardFour() {
    return (
      <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * -3.7,
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
              height: 175,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={{paddingHorizontal: SIZES.padding}}>
              <View
                style={{
                  marginTop: SIZES.padding,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
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
                    color: '#fff',
                    marginLeft: SIZES.base,
                    fontWeight: 'bold',
                  }}>
                  First Buy Amnt 10
                </Text>

                <Image
                  source={icons.exch}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: SIZES.padding,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: SIZES.base,
                    fontWeight: 'bold',
                  }}>
                  Margin Call Limit 7
                </Text>
              </View>
            </View>

            <View>
              <View
                style={{
                  marginTop: SIZES.padding,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: SIZES.base,
                    fontWeight: 'bold',
                  }}>
                  Take Profit ratio 1.3%
                </Text>
                <Image
                  source={icons.moneybag}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: SIZES.padding,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: SIZES.base,
                    fontWeight: 'bold',
                  }}>
                  Earnings Call 0.3%
                </Text>
              </View>

              <View
                style={{
                  marginTop: SIZES.padding,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: SIZES.base,
                    fontWeight: 'bold',
                  }}>
                  Margin Call drop 5.3%
                </Text>
                <Image
                  source={icons.star}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: SIZES.padding,
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    marginLeft: SIZES.base,
                    fontWeight: 'bold',
                  }}>
                  Buyin Call 1.3%
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View>
          <Image source={images.exch} style={{width: '100%', height: 150}} />
          {/* <Icon name="md-close" 
          style={{
                position: 'absolute',
                right: 5,
                top: 5,
          }} /> */}
        </View>
      </View>
    );
  }

  function renderQuantCardThree() {
    return (
      <TouchableOpacity onPress={toggleModalVisibilityOne}>
   <View
        style={{
          width: '100%',
          height: 150,
          flexDirection: 'row',
          marginTop: SIZES.padding * 2,
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
                marginTop: SIZES.padding * 0.4,
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                First present buy in price
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
          </View>
        </ImageBackground>
      </View>
      </TouchableOpacity>
   
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.screen}>
        <StatusBar style="auto" />

        {/**  We are going to create a Modal with Text Input. */}

        {/** This is our modal component containing textinput and a button */}
        <Modal 
        style={{
            backgroundColor: '#5D2DFD',
          }}
        animationType="slide" 
                   transparent visible={isModalVisibleOne} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibilityOne}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalViewOne}>
                    <Text style={{paddingBottom:SIZES.padding,marginTop:SIZES.padding*0.4,fontSize:16}}>First present buy in price</Text>
                        <TextInput placeholder="Please enter first present  USDT" 
                                   value={inputValueOne} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Cancel" onPress={toggleModalVisibilityOne} />
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


              {/* Second Modal */}
        <Modal
          style={{
            backgroundColor: '#5D2DFD',
          }}
          animationType="fade"
          transparent
          visible={isModalVisible}
          presentationStyle="overFullScreen"
          onDismiss={toggleModalVisibility}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <View
                style={{
                  justifyContent: 'center',
                  paddingBottom: SIZES.padding,
                }}>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: SIZES.padding * 0.2,
                  }}>
                  Strategy Mode
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  Please Select Strategy Mode
                </Text>
              </View>
              <FlatList
                style={{
                  backgroundColor: '#FF9800',
                  borderRadius: SIZES.radius,
                  color: COLORS.white,
                }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
              {/** This button is responsible to close the modal */}
              <View style={styles.buttonCustom}>
                <Button title="Cancel" onPress={toggleModalVisibility} />
                <Text
                  style={{
                    marginLeft: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  Save
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <View style={{flex: 1, paddingBottom: 130}}>
        {renderHeader()}
        {renderQuantCardOne()}
        {renderQuantCardTwo()}
        {renderQuantCardThree()}
        {renderQuantCardFour()}
      </View>
      <View style={{justifyContent: 'center', textAlign: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TradeSettings')}
          style={{
            justifyContent: 'center',
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View
            style={{padding: 10, backgroundColor: '#0C3BAA', width: '100%'}}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Trade Settings
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('RevenueDetailsScreen')}
          style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{padding: 10, backgroundColor: '#0C3BAA', width: '100%'}}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              Start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
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
  title: {
    fontSize: 15,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  viewWrapperOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
  },
  modalViewOne: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 180,
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
},
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 270,
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
});
export default QuantitativeDetails;
