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
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../../constants';
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
const SecurityCenter = ({navigation}) => {

       // This is to manage Modal State Second Modal
   const [isModalVisibleOne, setModalVisibleOne] = useState(false);

   // This is to manage TextInput State
   const [inputValueOne, setInputValueOne] = useState('');
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalVisibilityOne = () => {
     setModalVisibleOne(!isModalVisibleOne);
   };


       // This is to manage Modal State Second Modal
   const [isModalVisibleThree, setModalVisibleThree] = useState(false);

   // This is to manage TextInput State
   const [inputValueThree, setInputValueThree] = useState('');
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalVisibilityThree = () => {
     setModalVisibleThree(!isModalVisibleThree);
   };



          // This is to manage Modal State Second Modal
   const [isModalVisibleFourth, setModalVisibleFourth] = useState(false);

   // This is to manage TextInput State
   const [inputValueFourth, setInputValueFourth] = useState('');
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalVisibilityFourth = () => {
     setModalVisibleFourth(!isModalVisibleFourth);
   };



  const renderItem = ({item}) => <Item title={item.title} />;
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies);





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
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginLeft: SIZES.padding * 4,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  Security Center
                </Text>

                <TouchableOpacity onPress={toggleModalVisibility}>
               
                </TouchableOpacity>
              </View>
              </TouchableOpacity>
       
            </View>
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
              width: '100%',
              height: 270,
              borderRadius: SIZES.radius,
              backgroundColor: '#0C3BAA',
              marginTop: SIZES.padding * 0.3,
              paddingTop: SIZES.padding * 0.3,
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity onPress={toggleModalVisibilityOne}>
                <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.4,
                borderBottomColor:'#fff',
                borderBottomWidth:1,
                paddingBottom:SIZES.padding*0.2
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Change Password
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
        

 <TouchableOpacity onPress={toggleModalVisibilityThree}>
                 <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.4,
                 borderBottomColor:'#fff',
                borderBottomWidth:1,
                paddingBottom:SIZES.padding*0.2
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Modify Email
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



 <TouchableOpacity onPress={toggleModalVisibilityFourth}>
                  <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.4,
                 borderBottomColor:'#fff',
                borderBottomWidth:1,
                paddingBottom:SIZES.padding*0.2
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Transaction Password
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

                  <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.4,
                 borderBottomColor:'#fff',
                borderBottomWidth:1,
                paddingBottom:SIZES.padding*0.2
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
               Google Verification Code
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

                  <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.padding * 0.4,
                 borderBottomColor:'#fff',
                borderBottomWidth:1,
                paddingBottom:SIZES.padding*0.2
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                Withdrawl address management
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
          </View>
          <SafeAreaView>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
   
    </View>
    </SafeAreaView>
        </ImageBackground>
    
      </View>
      

      
    );
  }





  return (
    <ScrollView>
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
                    <Text style={{paddingBottom:SIZES.padding,marginTop:SIZES.padding*0.4,fontSize:16}}>Change Password</Text>
                        <TextInput placeholder="Please enter old password" 
                                   value={inputValueOne} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />

                                                    <TextInput placeholder="Please enter new password" 
                                   value={inputValueOne} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />

                                                    <TextInput placeholder="Please re-enter new password" 
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




            {/* third modal */}


              <Modal 
        style={{
            backgroundColor: '#5D2DFD',
          }}
        animationType="slide" 
                   transparent visible={isModalVisibleThree} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibilityThree}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalViewThird}>
                    <Text style={{paddingBottom:SIZES.padding,marginTop:SIZES.padding*0.4,fontSize:16}}>Change Email</Text>
                        <TextInput placeholder="Please enter old Email" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />

                                                    <TextInput placeholder="Please enter new Email" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />

                                                    <TextInput placeholder="Please re-enter new Email" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Cancel" onPress={toggleModalVisibilityThree} />
                <Text
                  style={{
                    marginLeft: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:5
                  }}>
                  Confirm
                </Text>
              </View>
                        
                    </View>
                </View>
            </Modal>

            {/* 4th modal */}

                  <Modal 
        style={{
            backgroundColor: '#5D2DFD',
          }}
        animationType="slide" 
                   transparent visible={isModalVisibleFourth} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibilityThree}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalViewFourth}>
                    <Text style={{paddingBottom:SIZES.padding,marginTop:SIZES.padding*0.4,fontSize:16}}>Change Transaction Password</Text>
                        <TextInput placeholder="Please enter old Transaction Password" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />

                                                    <TextInput placeholder="Please enter new Transaction Password" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />

                                                    <TextInput placeholder="Please re-enter new Transaction Password" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueOne(value)} />
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Cancel" onPress={toggleModalVisibilityFourth} />
                <Text
                  style={{
                    marginLeft: SIZES.padding,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:5
                  }}>
                  Confirm
                </Text>
              </View>
                        
                    </View>
                </View>
            </Modal>




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
                <Text style={{fontWeight:'700',paddingHorizontal:SIZES.padding*0.7,paddingBottom:SIZES.base}}>Order Status</Text>

                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
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
                <Text style={{fontWeight:'700',paddingHorizontal:SIZES.padding*0.7,paddingBottom:SIZES.base}}>Exchange</Text>

                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
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
                <Text style={{fontWeight:'700',paddingHorizontal:SIZES.padding*0.7,paddingBottom:SIZES.base}}>Symbol</Text>

                <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:SIZES.base}}>
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

                
                <View style={{flexDirection:'row',justifyContent:'space-evenly',paddingBottom:SIZES.base}}>
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

                
                <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
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

                <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:SIZES.padding*4}}>
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
      <View style={{flex: 1, paddingBottom: 600}}>
        {renderHeader()}
        {/* {renderQuantCardOne()}
        {renderQuantCardTwo()}
        {renderQuantCardThree()}
        {renderQuantCardFour()} */}
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
  filterContainer:{
    marginBottom:'25%'
  },
  item: {
    marginVertical: 8,
    width: 200,
    marginHorizontal: 16,
  },
  btnCustom:{
    width:100,
    fontWeight:'bold',
  },
  title: {
    fontSize: 15,
  },
  customStyle:{
    paddingHorizontal:SIZES.padding,
    color:COLORS.black,
    paddingTop:SIZES.padding*1,
    fontWeight:'700',
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
  btnCustom1:{
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
    margin:0,
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 800,
    width: width * 1,
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
    marginBottom: 10,
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
    height: 300,
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
    modalViewThird: {
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

      modalViewFourth: {
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
});
export default SecurityCenter;
