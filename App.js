/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {StyleSheet, StatusBar, SafeAreaView, Dimensions, Text, View} from 'react-native';
import { colors } from './Utils/colors';
import Button from "./Component/Button";
import Alert from "./Component/Alert";

const DEVICE_WIDTH = Dimensions.get('window').width;

function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  function showAlertModal(){
      return (
        <Alert
        onBackButtonPress={() => setModalVisible(!isModalVisible)}
        onBackdropPress={() => setModalVisible(!isModalVisible)}
        isVisible={isModalVisible}
        message={"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs."}
        onPress={() => [setModalVisible(!isModalVisible), console.log("Close Alert Modal")]}
        />
      );
    }    

  return (
    <SafeAreaView style={localStyles.appMainContainer}>
      <StatusBar 
        barStyle={'dark-content'}  
        backgroundColor={colors.white} 
        hidden={false} />
      <View style={localStyles.appSubContainer}>
        <Text style={localStyles.appText}>
          {"React Native Alert Modal"}
        </Text>
        <View style={localStyles.appButtonView}>
          <Button
            onPress={() => [setModalVisible(!isModalVisible), console.log("Open Alert Modal")]}
            textColor={colors.white}
            color={colors.royal_blue}
            buttonText={"OPEN MODAL"}
            width={DEVICE_WIDTH - 80}
          />
        </View>
        {isModalVisible ? 
        showAlertModal() :
        null}
      </View>
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  appMainContainer: {
    flex:1, 
    backgroundColor:colors.white, 
    alignItems:'center', 
    justifyContent:'center',
  },
  appSubContainer:{
    flex:1, 
    alignItems:'center',
  },
  appButtonView:{
    flex:0.5, 
    justifyContent:"flex-start",
  },
  appText:{
    flex:0.5,
    marginTop:20,
    marginBottom:20,
    fontStyle:'normal',
    fontSize:24,
    lineHeight:30,
    fontWeight:"bold",
    textAlign:'center',
    color:colors.grey,
    textDecorationLine:"underline",
    textAlignVertical:"center",
  },

});

export default App;
