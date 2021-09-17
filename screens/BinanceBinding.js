/* eslint-disable */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  CheckBox,
  Dimensions,
  StatusBar,
  Modal,
  ScrollView,
  FlatList,
  TextInput
} from 'react-native';
// import { TextInput } from 'react-native-paper';
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
const BinanceBinding = ({navigation}) => {
  const renderItem = ({item}) => <Item title={item.title} />;
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);
  // This is to manage Modal State Second Modal
  const [isModalVisibleOne, setModalVisibleOne] = useState(false);
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
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
  const [isSelected, setSelection] = useState(false);

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };
  function renderHeader() {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ApiBinding')}>
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
                onPress={() => navigation.navigate('ApiBinding')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ApiBinding')}>
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
                        textAlign: 'center',
                      }}>
                      Binance Binding
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }

  function renderQuantCardTwo() {
    return (
      <View
        style={{
          width: '100%',
          height: 100,
          flexDirection: 'row',
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
              height: 130,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.4,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding * 0,
                marginTop: SIZES.padding * 0.3,
              }}>
              <Text
                style={{color: COLORS.white, fontSize: 15, fontWeight: 'bold'}}>
                Notice
              </Text>
              <Text
                style={{
                  alignItems: 'center',
                  color: '#FF9800',
                  fontWeight: 'bold',
                }}>
                See the instructions
              </Text>
            </View>
            <View style={{marginTop: SIZES.padding * 0.4}}>
              <Text style={{color: '#fff'}}>
                1. Please Confirm that API permission has checked "Enabled Spot
                Margin & Trading".
              </Text>
            </View>
            <View style={{marginTop: SIZES.padding * 0.4}}>
              <Text style={{color: '#fff'}}>
                2. Please Enter Correct API,please don't enter speacial
                characters".
              </Text>
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
              height: 150,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 1.9,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.padding * 0,
                marginTop: SIZES.padding * 0.3,
              }}>
              <Text
                style={{color: COLORS.white, fontSize: 15, fontWeight: 'bold'}}>
                IP group binding
              </Text>
            </View>
            <View style={{marginTop: SIZES.padding * 0.4}}>
              <Text style={{color: '#fff'}}>
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
          height: 100,
          flexDirection: 'row',
          marginTop: SIZES.padding * 0,
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
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: SIZES.padding *4.2,
              paddingHorizontal: SIZES.padding,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text
                style={{
                  color: '#FFf',
                }}>
                47.241.125.12 47.241.125.12 47.241
              </Text>

              <Text
                style={{
                  color: '#FF9800',
                  marginLeft:SIZES.padding*2
                }}>
                Copy
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
          height: 100,
          flexDirection: 'row',
          marginTop: SIZES.padding * 0,
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
              height: 160,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 2.3,
            }}>
                <SafeAreaView>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:SIZES.padding}}>
                <Text style={{color:'#FF9800',fontWeight:'bold'}}>
                    Api Key
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Please Enter An API"
                    placeholderTextColor="#fff" 
                
                />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:SIZES.padding}}>
                <Text style={{color:'#FF9800',fontWeight:'bold'}}>
                    Secret Key
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Please Enter A Key"
                    placeholderTextColor="#fff" 
                
                />
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:SIZES.padding}}>
                <Text style={{color:'#FF9800',fontWeight:'bold'}}>
                   Verifi. Code
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Please Enter A Code"
                    placeholderTextColor="#fff" 
                
                />
                </View>
                </SafeAreaView>
          </View>
          <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I Accept Terms and Conditions</Text>
      </View>
      <View style={styles.buttonCustom}>
                      <Button
                        // onPress={onPressLearnMore}
                        title="Bind"
                        color="#FF9800"
                        accessibilityLabel="Learn more about this purple button"
                      />
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
        {renderQuantCardFive()}

      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonCustom: {
    // alignItems: 'center',
    width:'80%',
    borderRadius:10,
  },
  filterContainer: {
    marginBottom: '19%',
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent:'flex-start',
    paddingHorizontal:SIZES.padding
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
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

  input: {
    height: 40,
    margin: 6,
    borderRadius:5,
    color:'white',
    marginLeft:SIZES.padding
  },




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
export default BinanceBinding;
