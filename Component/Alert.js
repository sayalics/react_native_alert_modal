import React from 'react';
import {StyleSheet, Dimensions, StatusBar, Image, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../Utils/colors';
import Button from './Button';

const DEVICE_WIDTH = Dimensions.get('window').width;

const Alert = (props) => {
    return (
      <Modal
      onBackButtonPress={props.onBackButtonPress}
      onBackdropPress={props.onBackdropPress}
      isVisible={props.isVisible} style={localStyles.loginAlertModal}>
        <View style={localStyles.loginAlertModalView}>
          <Image
          style={{resizeMode:'contain'}}
          source={require('../res/dash.png')}
          />
          <Text style={localStyles.loginAlertText}>{"Alert"}</Text>
          <Text style={localStyles.loginAlertSubText}>{props.message}</Text>
          <View>
            <Button
                      onPress={props.onPress}
                      textColor={colors.white}
                      color={colors.royal_blue}
                      buttonText={"CLOSE MODAL"}
                      width={DEVICE_WIDTH - 80}
                      />
        </View>
        </View>
      </Modal>
    );
};

const localStyles = StyleSheet.create({
    loginAlertButton:{
        height: 50,
        marginBottom: 20,
        width: DEVICE_WIDTH - 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      loginAlertButtonText:{
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 10,
        lineHeight: 22,
        fontWeight: '500',
        fontStyle:"normal",
      },
      loginAlertText:{
        marginTop:20,
        marginBottom:20,
        fontStyle:'normal',
        fontSize:20,
        lineHeight:27,
        fontWeight:"700",
        textAlign:'center',
        color:colors.royal_blue,
      },
      loginAlertModalView:{
        display:"flex",
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingVertical:10 ,
        backgroundColor:colors.white,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },
      loginAlertSubText:{
        marginBottom:20,
        fontStyle:'normal',
        fontSize:16,
        lineHeight:26,
        fontWeight:'600',
        textAlign:'center',
        color:colors.slateGrey,
        marginHorizontal:30,
      },
      loginAlertModal:{
        flex:1,
        justifyContent:'flex-end',
      },
});

export default Alert;
