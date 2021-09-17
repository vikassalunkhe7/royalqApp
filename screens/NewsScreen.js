// import component
/* eslint-disable */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';


import {TabView, SceneMap} from 'react-native-tab-view';
import {useTheme} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons, images, SIZES, dummyData, COLORS, FONTS,text} from '../constants';
const {width} = Dimensions.get('window');
const {win} = Dimensions.get('window');
import {TextInput,Button,Divider,DataTable} from 'react-native-paper';


const items = [{
    id: '92iijs7yta',
    name: 'BNB'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'BTC'
  }, {
    id: '16hbajsabsd',
    name: 'ETH'
  }, {
    id: 'nahs75a5sg',
    name: 'LTC'
  }, {
    id: '667atsas',
    name: 'TRX'
  }, {
    id: 'hsyasajs',
    name: 'BUSD'
  }, {
    id: 'djsjudksjd',
    name: 'DOGE'
  }, {
    id: 'sdhyaysdj',
    name: 'bSHIB'
  }, {
    id: 'suudydjsjd',
    name: 'SUSHI'
    }
];

class NewsScreen extends Component {

  state = {
    selectedItems : []
  };

  
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <ScrollView>
      <View style={styles.customContainer}>
      <Text style={styles.centerText}>Investment SIP Calculator</Text>
   
      <View>
          <TextInput style={styles.customTextBox}
            label="0"
            value={text}
            onChangeText={text => setText(text)}
          />
          <View style={styles.customButton}>
          {/* <Button icon="check" mode="contained" onPress={() => console.log('Pressed')}>
            Submit
          </Button> */}
          </View>
      </View>
      <View>
      <MultiSelect
              hideTags
              items={items}
              uniqueKey="id"
              ref={(component) => { this.multiSelect = component }}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={selectedItems}
              selectText="   Select Currency"
              searchInputPlaceholderText="Search Items..."
              onChangeInput={ (text)=> console.log(text)}
              altFontFamily="ProximaNova-Light"
              tagRemoveIconColor="#5D2DFD"
              tagBorderColor="#5D2DFD"
              tagTextColor="#5D2DFD"
              selectedItemTextColor="#5D2DFD"
              selectedItemIconColor="#5D2DFD"
              itemTextColor="#000"
              displayKey="name"
              searchInputStyle={{ color: '#5D2DFD' }}
              submitButtonColor="#5D2DFD"
              submitButtonText="Submit"
            />
            <ScrollView>
            <View>
            {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
            </View>
            </ScrollView>
          
          <TextInput style={styles.customTextBox}
            label="Amount"
            value={text}
            onChangeText={text => setText(text)}
          />

          <View style={styles.customButton}>
          <Button icon="calculator" mode="contained" onPress={() => console.log('Pressed')}>
            Calculate
          </Button>
          </View>
          <ScrollView>
          <DataTable>
        <DataTable.Header>
          <DataTable.Title
            sortDirection='descending'
          >
            Assets
          </DataTable.Title>
          <DataTable.Title numeric>Invest.</DataTable.Title>
          <DataTable.Title numeric>Purc.Date</DataTable.Title>
          <DataTable.Title numeric>Purc.Date</DataTable.Title>
          <DataTable.Title numeric>Purc.Date</DataTable.Title>
          <DataTable.Title numeric>Purc.Date</DataTable.Title>
        </DataTable.Header>
      </DataTable>
          </ScrollView>
      
      </View>
  
    </View>

   
   </ScrollView>
    );
    
  }
}

const styles = StyleSheet.create({
  customContainer: {
    marginTop: SIZES.padding * 1.5,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    height: 700,
    padding: 5,
    borderRadius: SIZES.radius,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  centerText: {
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.secondary,
    fontWeight: '600',
    marginTop:SIZES.padding
  },
  customTextBox:{
    marginTop:SIZES.padding,
    backgroundColor:COLORS.white,
  },
  customButton:{
    marginTop:SIZES.padding*1,
    width:150,
    justifyContent:'center',
    alignContent:'center',
    alignSelf:'center'
  }
});

export default NewsScreen;