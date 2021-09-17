/* eslint-disable */

import React, { Component } from 'react';
import { StyleSheet, ScrollView , StatusBar,   ImageBackground,Text, View,Image } from 'react-native';
import {icons, images, SIZES, dummyData, COLORS, FONTS,text} from '../../constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PieChart from 'react-native-pie-chart';
import { DataTable } from 'react-native-paper';

export default class ChartComp extends Component {
  render() {
    const widthAndHeight = 250
    const series = [123, 537]
    const sliceColor = ['#f32c22','#347403']

    return (
      <ScrollView style={{flex: 1,}}>
      <ImageBackground
          source={images.banner}
          resizeMode="cover"
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
     <View
            style={{
              width: '100%',
              alignItems: 'flex-start',
              paddingHorizontal: SIZES.padding,
            }}>
            <TouchableOpacity
              style={{
                width: 15,
                height: 15,
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
                  style={{width: 30, height: 30,marginBottom:SIZES.padding}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                  marginLeft: SIZES.padding * 3,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignContent:'center',
                    alignItems:'center',
                    marginBottom:SIZES.padding
                  }}>
                  Profit And Loss
                </Text>
              </View>
              </TouchableOpacity>
       
            </View>

         
          </View>

          </ImageBackground>
 
        <View style={styles.container}>
          {/* <Text style={styles.title}>Profit And Loss</Text> */}
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
          <View style={{flexDirection:'row'}}>
          <View style={styles.customLegend}>
                <View style={styles.legend}>    
                </View>
                <Text style={styles.legendText}>
                  Profit
                </Text>
          </View>

          <View style={styles.customLegend}>
                <View style={styles.customLegendRed}>    
                </View>
                <Text style={styles.legendText}>
                  Loss
                </Text>
          </View>
          </View>

          <DataTable style={{marginTop:10}}>
        <DataTable.Header>
          <DataTable.Title
            sortDirection='descending'
            
          >
            Stats
          </DataTable.Title>
          <DataTable.Title numeric>Profit</DataTable.Title>
          <DataTable.Title numeric>Loss (no.)</DataTable.Title>
        </DataTable.Header>
      </DataTable>
         
        </View>

    
       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  customLegendRed:{
    width:40,
    height:25,
    backgroundColor:'#f32c22',
    borderRadius:5,
    marginLeft:10,
  },
  customLegend:{
    flexDirection:'row',
    marginTop:SIZES.padding,
    // justifyContent:'center '
    
  },
  legendText:{
    fontWeight:'bold',
    marginLeft:3,
    fontSize:16
  },
  legend:{
    width:40,
    height:25,
    backgroundColor:'#347403',
    borderRadius:5,
  },
  container: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop: SIZES.padding * 1.5,
    marginHorizontal: SIZES.padding,
    marginBottom:SIZES.padding,
    paddingBottom:SIZES.padding*2,
    paddingHorizontal: SIZES.padding,
    padding: 20,
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
  title: {
    fontSize: 24,
    margin: 10
  }
});
