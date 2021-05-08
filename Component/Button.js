import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Image, View, Text, ActivityIndicator} from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Button = (props) => {

  return (
    props.source !== undefined ?
        <TouchableOpacity 
        onPress={props.onPress}
        disabled={props.disabled}
        style={[localStyles.buttonView,{justifyContent:'space-evenly',flexDirection:'row', backgroundColor:props.color, width: props.width === undefined ? DEVICE_WIDTH - 40 : props.width}]}>
            <View style={localStyles.buttonView1}>
                <Image source={props.source} />
            </View>
                <Text style={[localStyles.buttonTextView, {flex: 0.8, marginLeft: 60, color:props.textColor}]}> {props.buttonText} </Text>
                <View style={{flex:0.1}} />
        </TouchableOpacity> :
        props.active !== undefined && props.active === true ?
        <TouchableOpacity 
        disabled={true}
        style={[localStyles.buttonView,{justifyContent:'center', backgroundColor:props.color, width: props.width === undefined ? DEVICE_WIDTH - 40 : props.width }]}>
            <ActivityIndicator color={props.textColor} size={"small"}/>
        </TouchableOpacity> 
        :
        <TouchableOpacity 
        onPress={props.onPress}
        disabled={props.disabled}
        style={[localStyles.buttonView,{justifyContent:'center', backgroundColor:props.color, width: props.width === undefined ? DEVICE_WIDTH - 40 : props.width }]}>
            <Text style={[localStyles.buttonTextView, {color:props.textColor}]}> {props.buttonText} </Text>
        </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  buttonTextView: {
    alignSelf:'center',
    justifyContent:'center',
    fontWeight:'700',
    fontStyle:'normal',
    fontSize:16,
    lineHeight:19,
    textAlign:'left',
 },
  buttonView: {
    marginBottom:15,
    alignItems:'center',
    height:52,
    borderRadius:100,
},
buttonView1:{
  flex:0.1,
  left:30,
  right:30,
},
});

export default Button;
