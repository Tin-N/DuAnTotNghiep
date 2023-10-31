import { View, Text, Image, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import { StyleDialogShopping } from '../../css/Styles';
const Opacity = () => {
    return 0.2;
}
const DialogShopping = () => {
    const MyDialog = ({ isVisible, onClose }) => {
        return (

            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    onClose();
                }}
            >
                <View style={StyleDialogShopping.container}>
                    <View style={{ flexDirection: 'row', paddingTop: 30 }}>
                        <Image source={require('../../images/food.png')} />
                        <View style={{paddingTop:80}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, textDecorationLine: 'line-through' }}>
                                    ₫199.000
                                </Text>
                                <Text style={{ marginLeft: 0, fontSize: 20, color: 'red' }}>
                                    ₫180.000
                                </Text>
                            </View>
                            <Text style={{fontSize:15}}>
                                Kho: 4459
                            </Text>
                        </View>
                        <Image style={{marginLeft:40, marginTop:-10}} source={require('../../images/close.png')}/>
                    </View>
                    <View style={StyleDialogShopping.line}>

                    </View>
                </View>
            </Modal>


        );
    };
    const [isDialogVisible, setDialogVisible] = useState(false);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
            opacity: isDialogVisible == true ? 0.7 : 1
        }}>
            <Button title="Show Dialog" onPress={() => setDialogVisible(true)} />
            <MyDialog isVisible={isDialogVisible} onClose={() => setDialogVisible(false)} />
        </View>
    )
}

export default DialogShopping