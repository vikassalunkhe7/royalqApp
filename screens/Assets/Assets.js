/* eslint-disable */
import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  useWindowDimensions,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS} from '../../constants';
const {width} = Dimensions.get('window');
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

const Assets = ({navigation}) => {

    const renderItem = ({item}) => <Item title={item.title} />;

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
  const [isModalVisibleTwo, setModalVisibleTwo] = useState(false);

  // This is to manage TextInput State
  const [inputValueTwo, setInputValueTwo] = useState('');

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibilityTwo = () => {
    setModalVisibleTwo(!isModalVisibleTwo);
  };


 // This is to manage Modal State
  const [isModalVisibleThree, setModalVisibleThree] = useState(false);

  // This is to manage TextInput State
  const [inputValueThree, setInputValueThree] = useState('');

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibilityThree = () => {
    setModalVisibleThree(!isModalVisibleThree);
  };







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
            
            <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
            <Image
                source={icons.back_arrow}
                resizeMode="contain"
                style={{width:30,height:30}}
              />
               </TouchableOpacity>
              <Text style={{color:COLORS.white,fontSize:18,marginLeft:SIZES.padding*5,fontWeight:'bold',textAlign:'center'}}>Assets</Text>
            </View>
           
           
          </View>

          <View style={{ 
                 width: '90%',
                 height: 175,
                 borderRadius:SIZES.radius,
                 backgroundColor:"#FFDD3C",
                 marginTop:SIZES.padding
                 }}>
              <View style={{flexDirection:"row",justifyContent:'space-evenly', marginTop:SIZES.padding}}>
              <Text style={{color:'orange',fontSize:16,fontWeight:'bold',}}>Total Assets Converted (USDT)</Text>
              </View>
              <View style={{flexDirection:"row",justifyContent:'space-evenly', marginTop:SIZES.padding*0.3}}>
              <Text style={{color:COLORS.white,fontSize:19,fontWeight:'bold'}}>102.3397270083</Text> 
                </View>
                <View style={{flexDirection:"row",justifyContent:'space-evenly', marginTop:SIZES.padding*0.3}} >
                <Text style={{color:'orange',fontSize:13,}}>~102.3397270083 USD</Text>
                </View>
                <View style={{flexDirection:"column",justifyContent:'center', marginTop:SIZES.padding*0.6}} >
                <Text style={{color:'orange',fontSize:14,fontWeight:'bold',textAlign:'center'}}>Total RP Assets</Text>
                <Text style={{color:COLORS.white,fontSize:14,fontWeight:'bold',textAlign:'center'}}>0.0</Text>
                </View>
                
          </View>

          <View
        style={{
          marginTop: SIZES.padding ,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
          backgroundColor: '#5D2DFD',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width:'100%',
          ...styles.shadow,
        }}>
      
   
      

      <TouchableOpacity
                onPress={toggleModalVisibilityOne}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#00BFFF',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.moneybag}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
      
            <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Deposit</Text>
          
        </View>
        </TouchableOpacity>

        <TouchableOpacity
                     onPress={toggleModalVisibilityTwo}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#c2e9fb',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
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
          </View>
          <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Transfer</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity
                  onPress={toggleModalVisibilityThree}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#faaca8',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
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
          </View>
          <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Withdrawl</Text>
        </View>
              </TouchableOpacity>

      </View>


              <Text style={{fontWeight:'bold',fontSize:18,marginTop:18}}>
                  History Record
              </Text>

      <View
        style={{
          marginTop: SIZES.padding ,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
          backgroundColor: '#5D2DFD',
          flexDirection: 'row',
          ...styles.shadow,
          justifyContent: 'space-evenly',
          width:'90%',
        }}>
      
   
      

        <TouchableOpacity
           onPress={() => navigation.navigate('RevenueDetailsScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color:'white'}}>
                Direct qualification
            </Text>
            <Text style={{color:'white'}}>
                2021-09-12 | 09:28
            </Text>
            <View>
                <Text style={{color:COLORS.green,fontWeight:'bold'}}>
                    | 0.80992928 USDT
                </Text>
            </View>

          </View>
      
          
        </View>
        </TouchableOpacity>

     
      </View>

      <View
        style={{
          marginTop: SIZES.padding ,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
        backgroundColor: '#5D2DFD',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width:'90%',
          ...styles.shadow,
        }}>
      
   
      

        <TouchableOpacity
           onPress={() => navigation.navigate('RevenueDetailsScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color:'white'}}>
                Direct qualification
            </Text>
            <Text style={{color:'white'}}>
                2021-09-12 | 09:28
            </Text>
            <View>
                <Text style={{color:COLORS.green,fontWeight:'bold'}}>
                    | 0.80992928 USDT
                </Text>
            </View>

          </View>
      
          
        </View>
        </TouchableOpacity>

     
      </View>

      <View
        style={{
          marginTop: SIZES.padding ,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
       backgroundColor: '#5D2DFD',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width:'90%',
          ...styles.shadow,
        }}>
      
   
      

        <TouchableOpacity
           onPress={() => navigation.navigate('RevenueDetailsScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color:'white'}}>
                Direct qualification
            </Text>
            <Text style={{color:'white'}}>
                2021-09-12 | 09:28
            </Text>
            <View>
                <Text style={{color:COLORS.green,fontWeight:'bold'}}>
                    | 0.80992928 USDT
                </Text>
            </View>

          </View>
      
          
        </View>
        </TouchableOpacity>

     
      </View>

      <View
        style={{
          marginTop: SIZES.padding ,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
        backgroundColor: '#5D2DFD',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width:'90%',
          ...styles.shadow,
        }}>
      
   
      

        <TouchableOpacity
           onPress={() => navigation.navigate('RevenueDetailsScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color:'white'}}>
                Direct qualification
            </Text>
            <Text style={{color:'white'}}>
                2021-09-12 | 09:28
            </Text>
            <View>
                <Text style={{color:COLORS.green,fontWeight:'bold'}}>
                    | 0.80992928 USDT
                </Text>
            </View>

          </View>
      
          
        </View>
        </TouchableOpacity>

     
      </View>


      


      
      <View
        style={{
          marginTop: SIZES.padding ,
          padding: 10,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
          width:'90%',
          ...styles.shadow,
        }}>
      
   
      

        <TouchableOpacity
           onPress={() => navigation.navigate('RevenueDetailsScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#00BFFF',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.moneybag}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
      
            <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Deposit</Text>
          
        </View>
        </TouchableOpacity>

        <TouchableOpacity
           onPress={() => navigation.navigate('TransactionRecord')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#c2e9fb',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
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
          </View>
          <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Transfer</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity
           onPress={() => navigation.navigate('InviteScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#faaca8',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
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
          </View>
          <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Withdrawl</Text>
        </View>
              </TouchableOpacity>

      </View>

      
      <View
        style={{
          marginTop: SIZES.padding ,
          marginHorizontal: SIZES.padding,
          padding: 10,
          paddingLeft: 2,
          paddingRight: 2,
          borderRadius: SIZES.radius,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width:'90%',
          ...styles.shadow,
        }}>
      
   
      

        <TouchableOpacity
           onPress={() => navigation.navigate('RevenueDetailsScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#00BFFF',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={icons.moneybag}
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
      
            <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Deposit</Text>
          
        </View>
        </TouchableOpacity>

        <TouchableOpacity
           onPress={() => navigation.navigate('TransactionRecord')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#c2e9fb',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
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
          </View>
          <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Transfer</Text>
        </View>

        </TouchableOpacity>

        <TouchableOpacity
           onPress={() => navigation.navigate('InviteScreen')}
           > 
        <View style={{flexDirection: 'column'}}>
          <View
            style={{
              backgroundColor: '#faaca8',
              width: 50,
              height: 50,
              borderRadius: SIZES.radius,
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
          </View>
          <Text style={{textAlign: 'center',color:'white', marginTop: 3,fontWeight:'bold'}}>Withdrawl</Text>
        </View>
              </TouchableOpacity>

      </View>

   
        </ImageBackground>
        
      </View>
    );
  }
  return(
    <ScrollView>

<SafeAreaView style={styles.screen}>
        <StatusBar style="auto" />
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
         

                    <View style={{backgroundColor:'#0C3BAA',padding:20,borderRadius:5,width:'100%',marginTop:12,justifyContent:'center'}}>
                        
                    <Text style={{fontSize:17,color:COLORS.white,paddingBottom:6,borderBottomColor:'white',borderBottomWidth:1}}>Chain Name: TRC20</Text>
                        
                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12,paddingTop:8}}>Deposit Address</Text>
                        <View style={{justifyContent:'space-between'}}>
                        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:1}}>
                        <Image
                            source={icons.qr}
                            style={{justifyContent:'center',margin:0}}
                        >
                        </Image>
                        </View>

                 
                        <Text style={{color:'white',textAlign:'center',paddingBottom:12,fontWeight:'bold'}}>
                            HNODHOWQHJO88108020173
                        </Text>

                        <Button title="Copy Address" />
                        </View>

                   
                    </View>

                    
                    <View style={{backgroundColor:'#0C3BAA',padding:20,borderRadius:5,width:'100%',marginTop:12,justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12}}>Notice</Text>
                        <View style={{justifyContent:'space-between'}}>
                        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:11}}>
                  
                        </View>

                 
                        <Text style={{color:'white',textAlign:'left',paddingBottom:12,fontWeight:'bold'}}>
                            Inactive accounts cannot be withdrawn
                        </Text>

                        <Text style={{color:'white',textAlign:'left',paddingBottom:12,fontWeight:'bold'}}>
                            Please Dont Deposit any non-USDT assets to the above address,otherwise the assets will not be retrived.
                        </Text>
                      


                        <Button title="Copy Address" />
                        </View>

                   
                    </View>
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Close" onPress={toggleModalVisibilityOne} />
         
              </View>
                        
                    </View>
                    
                </View>
            </Modal>






              {/* Second Modal */}
              <Modal 
        style={{
            backgroundColor: '#5D2DFD',
          }}
        animationType="slide" 
                   transparent visible={isModalVisibleTwo} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibilityTwo}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalViewTwo}>
         

                    <View style={{backgroundColor:'#0C3BAA',padding:20,borderRadius:5,width:'100%',marginTop:12,justifyContent:'center'}}>
                        
                    <Text style={{fontSize:17,color:COLORS.white,paddingBottom:6,borderBottomColor:'white',borderBottomWidth:1}}>Chain Name: TRC20</Text>
                        
                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12,paddingTop:8}}>Deposit Address</Text>
                        <View style={{justifyContent:'space-between'}}>
                        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:1}}>

                                  <TextInput placeholder="Please enter Address" 
                                   placeholderTextColor="#FFF" 
                                   value={inputValueTwo} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueTwo(value)} />
                        </View>

                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12,paddingTop:8}}>Quantity</Text>
                             <View style={{justifyContent:'center',alignItems:'center',paddingBottom:1}}>

                                  <TextInput placeholder="The minimum no.of withdraw 10 USDT" 
                                   placeholderTextColor="#FFF" 
                                   value={inputValueTwo} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueTwo(value)} />
                           </View>
                        <Text style={{color:'white',textAlign:'center',paddingBottom:12,fontWeight:'bold',borderBottomColor:'white',borderBottomWidth:1}}>
                            Available 102.236982 USDT
                        </Text>

                        <View style={{justifyContent:'space-between',paddingTop:6}}>
                          <Text style={{color:'white',fontWeight:'bold',}}>
                            Transaction fees                                                               2 USDT
                          </Text>
                            <Text style={{color:'white',fontWeight:'bold',}}>
                            Arrival Quantity
                          </Text>
                        </View>

                        </View>

                   
                    </View>

                    
                    <View style={{backgroundColor:'#0C3BAA',padding:20,borderRadius:5,width:'100%',marginTop:12,justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12}}>Operation Reminder</Text>
                        <View style={{justifyContent:'space-between'}}>
                        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:11}}>
                  
                        </View>

                 
                        <Text style={{color:'white',textAlign:'left',paddingBottom:12,fontWeight:'bold'}}>
                                  The IntelliQ Blockchain is open-source technology which offers
                                  an alternative to the traditional intermediary for transfers of
                                  the crypto-currency Bitcoin. The intermediary is replaced by the
                                  collective verification of the ecosystem offering a huge degree
                                  of traceability, security and speed.
                        </Text>
                      


                        <Button title="Confirm" />
                        </View>

                   
                    </View>
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Close" onPress={toggleModalVisibilityTwo} />
         
              </View>
                        
                    </View>
                    
                </View>
            </Modal>



            


              {/* tHIRD Modal */}
              <Modal 
        style={{
            backgroundColor: '#5D2DFD',
          }}
        animationType="slide" 
                   transparent visible={isModalVisibleThree} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibilityThree}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalViewThree}>
         

                    <View style={{backgroundColor:'#0C3BAA',padding:20,borderRadius:5,width:'100%',marginTop:12,justifyContent:'center'}}>
                        
             
                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12,paddingTop:8}}>Recieving Amount</Text>
                        <View style={{justifyContent:'space-between'}}>
                        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:1}}>

                             <TextInput placeholder="Please Enter Recieving Amount" 
                                   placeholderTextColor="#FFF" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueTwo(value)} />
                        </View>

                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12,paddingTop:8}}>Quantity</Text>
                             <View style={{justifyContent:'center',alignItems:'center',paddingBottom:1}}>

                                  <TextInput placeholder="The minimum no.of Transferrs 10 USDT" 
                                   placeholderTextColor="#FFF" 
                                   value={inputValueThree} style={styles.textInput} 
                                   onChangeText={(value) => setInputValueTwo(value)} />
                           </View>
                        <Text style={{color:'white',textAlign:'center',paddingBottom:12,fontWeight:'bold',borderBottomColor:'white',borderBottomWidth:1}}>
                            Available 102.236982 USDT
                        </Text>

                        <View style={{justifyContent:'space-between',paddingTop:6}}>
                          <Text style={{color:'white',fontWeight:'bold',}}>
                            Transaction fees                                                               0 USDT
                          </Text>
                        </View>

                        </View>

                   
                    </View>

                    
                    <View style={{backgroundColor:'#0C3BAA',padding:20,borderRadius:5,width:'100%',marginTop:12,justifyContent:'center'}}>
                        <Text style={{fontSize:17,color:COLORS.white,paddingBottom:12}}>Operation Reminder</Text>
                        <View style={{justifyContent:'space-between'}}>
                        <View style={{justifyContent:'center',alignItems:'center',paddingBottom:11}}>
                  
                        </View>

                 
                        <Text style={{color:'white',textAlign:'left',paddingBottom:12,fontWeight:'bold'}}>
                                  The IntelliQ Blockchain is open-source technology which offers
                                  an alternative to the traditional intermediary.
                        </Text>
                      


                        <Button title="Confirm" />
                        </View>

                   
                    </View>
  
                        {/** This button is responsible to close the modal */}
                        <View style={styles.buttonCustom}>
                <Button title="Close" onPress={toggleModalVisibilityThree} />
         
              </View>
                        
                    </View>
                    
                </View>
            </Modal>
      </SafeAreaView>

      <View style={{flex: 1, paddingBottom: 700}}>
        {renderHeader()}
      </View>
    </ScrollView>
 
  )
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
      top: '10%',
      left: '40%',
      elevation: 5,
      transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
      height: '107%',
      width: width * 1,
      backgroundColor: '#fff',
      borderRadius: 7,
    },
        modalViewTwo: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '10%',
      left: '40%',
      elevation: 5,
      transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
      height: '107%',
      width: width * 1,
      backgroundColor: '#fff',
      borderRadius: 7,
    },

           modalViewThree: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: '10%',
      left: '40%',
      elevation: 5,
      transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
      height: '107%',
      width: width * 1,
      backgroundColor: '#fff',
      borderRadius: 7,
    },
    textInput: {
      width: "80%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "#fff",
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
export default Assets;
