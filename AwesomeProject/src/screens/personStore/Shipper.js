import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleShipper } from '../../css/Styles'

const Shipper = () => {
  return (
    <View>
        <View style={StyleShipper.menu}>
            <Text style={StyleShipper.textTitle}>
                Dukungan Pengiriman
            </Text>
            <Image source={require('../../images/close.png')}/>
        </View>
        <View style={StyleShipper.line}>
        </View>
        <View style={StyleShipper.listShipper}>
            <View style={StyleShipper.boxShipper}>
                <Image style={StyleShipper.images} source={require('../../images/shipper2.png')}/>
                <View style={StyleShipper.textShippe}>
                    <Text>
                        J&T
                    </Text>
                    <Text>
                        Reguler, Express
                    </Text>
                </View>
            </View>
            <View style={StyleShipper.line}>
            </View>
            <View style={StyleShipper.boxShipper}>
                <Image style={StyleShipper.images} source={require('../../images/shipper1.png')}/>
                <View style={StyleShipper.textShippe}>
                    <Text>
                        J&T
                    </Text>
                    <Text>
                        REG, YES
                    </Text>
                </View>
            </View>
            <View style={StyleShipper.line}>
            </View>
            <View style={StyleShipper.boxShipper}>
                <Image style={StyleShipper.images} source={require('../../images/shipper2.png')}/>
                <View style={StyleShipper.textShippe}>
                    <Text>
                        J&T
                    </Text>
                    <Text>
                        Reguler, Express
                    </Text>
                </View>
            </View>
            <View style={StyleShipper.line}>
            </View>
        </View>
        
    </View>
  )
}

export default Shipper