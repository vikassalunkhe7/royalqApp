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
const ApiBinding = ({navigation}) => {
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
          height: 73,
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
                onPress={() => navigation.navigate('Home')}>
                <Image
                  source={icons.back_arrow}
                  resizeMode="contain"
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginLeft: SIZES.padding * 4,
                  }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 18,
                      fontWeight: 'bold',
                      textAlign:'center'
                    }}>
                    Api Binding
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
          height: 100,
          flexDirection: 'row',
          marginTop: SIZES.padding *0,
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
              height: 115,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              justifyContent:'center',
              alignItems:'center',
              marginTop: SIZES.padding*1,
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={{flexDirection:'row', alignItems: 'center',justifyContent:'space-between', paddingHorizontal: SIZES.padding*0}}>
            <Image
              source={icons.bnb}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
              <Text style={{color:COLORS.white,fontSize:17,paddingHorizontal: SIZES.padding*1}}>Binance</Text>
              <View style={{backgroundColor:'#FF9800',borderRadius:5,padding:3,paddingHorizontal: SIZES.padding}}>
                <Text style={{color:COLORS.white}}>Unbound</Text>
              </View>
            <TouchableOpacity  onPress={() => navigation.navigate('BinanceBinding')}>
              <Image
              source={icons.right_arrow}
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft:SIZES.padding*3
              }}
            />
            </TouchableOpacity>
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
          height: 100,
          flexDirection: 'row',
          marginTop: SIZES.padding *0,
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
              height: 115,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              justifyContent:'center',
              alignItems:'center',
              marginTop: SIZES.padding*2,
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={{flexDirection:'row', alignItems: 'center',justifyContent:'space-between', paddingHorizontal: SIZES.padding*0}}>
            <Image
              source={icons.hb}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
              <Text style={{color:COLORS.white,fontSize:17,paddingHorizontal: SIZES.padding*1}}>Huobi</Text>
              <View style={{backgroundColor:'#FF9800',borderRadius:5,padding:3,paddingHorizontal: SIZES.padding}}>
                <Text style={{color:COLORS.white}}>Unbound</Text>
              </View>
              <Image
              source={icons.right_arrow}
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft:SIZES.padding*3
              }}
            />
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
          height: 100,
          flexDirection: 'row',
          marginTop: SIZES.padding *0,
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
              height: 115,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              justifyContent:'center',
              alignItems:'center',
              marginTop: SIZES.padding*3,
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={{flexDirection:'row', alignItems: 'center',justifyContent:'space-between', paddingHorizontal: SIZES.padding*0}}>
            <Image
              source={icons.cb}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
              <Text style={{color:COLORS.white,fontSize:17,paddingHorizontal: SIZES.padding*1}}>Coinbase</Text>
              <View style={{backgroundColor:'#FF9800',borderRadius:5,padding:3,paddingHorizontal: SIZES.padding}}>
                <Text style={{color:COLORS.white}}>Unbound</Text>
              </View>
              <Image
              source={icons.right_arrow}
              style={{
                width: 20,
                height: 20,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft:SIZES.padding*3
              }}
            />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.screen}>
        <StatusBar style="auto" />
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
              <View style={styles.filterContainer}>
                <View style={styles.customStyle}>
                  <Text
                    style={{
                      fontWeight: '700',
                      paddingHorizontal: SIZES.padding * 0.7,
                      paddingBottom: SIZES.base,
                    }}>
                    Order Status
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="All"
                        color="#0C3BAA"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Buy"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Sell"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>
                  </View>
                </View>

                {/* exchange */}

                <View style={styles.customStyle}>
                  <Text
                    style={{
                      fontWeight: '700',
                      paddingHorizontal: SIZES.padding * 0.7,
                      paddingBottom: SIZES.base,
                    }}>
                    Exchange
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Binance"
                        color="#0C3BAA"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Huobi"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Coinbase"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.customStyle}>
                  <Text
                    style={{
                      fontWeight: '700',
                      paddingHorizontal: SIZES.padding * 0.7,
                      paddingBottom: SIZES.base,
                    }}>
                    Symbol
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      paddingBottom: SIZES.base,
                    }}>
                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="BTC/USDT"
                        color="#0C3BAA"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="BCH/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="BAT/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      paddingBottom: SIZES.base,
                    }}>
                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="ALGO/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="ADA/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="AAVE/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="AIO/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="ANT/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="AKRO/USDT"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>
                  </View>
                </View>

                {/* Date /Time */}

                <View style={styles.customStyle}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      marginTop: SIZES.padding * 4,
                    }}>
                    <View style={styles.btnCustom1}>
                      <Button
                        onPress={toggleModalVisibility}
                        title="Cancel"
                        color="gray"
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>

                    <View style={styles.btnCustom1}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Confirm"
                        color=""
                        accessibilityLabel="Learn more about this purple button"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <View style={{flex: 1, paddingBottom: 200}}>
        {renderHeader()}
        {renderQuantCardTwo()}
        {/* {renderQuantCardTwo()} */}
        {renderQuantCardThree()}
        {renderQuantCardFour()}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonCustom: {
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 0.6,
  },
  filterContainer: {
    marginBottom: '25%',
  },
  item: {
    marginVertical: 8,
    width: 200,
    marginHorizontal: 16,
  },
  btnCustom: {
    width: 100,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 15,
  },
  customStyle: {
    paddingHorizontal: SIZES.padding,
    color: COLORS.black,
    paddingTop: SIZES.padding * 1,
    fontWeight: '700',
  },
  screen: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewWrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  btnCustom1: {
    width: 170,
  },

  //   textInput: {
  //     width: "80%",
  //     borderRadius: 5,
  //     paddingVertical: 8,
  //     paddingHorizontal: 16,
  //     borderColor: "rgba(0, 0, 0, 0.2)",
  //     borderWidth: 1,
  //     marginBottom: 8,
  // },
  modalView: {
    position: 'absolute',
    justifyContent: 'center',
    top: '30%',
    left: '40%',
    margin: 0,
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 600,
    width: width * 1,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
});
export default ApiBinding;
