import { Dimensions, StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get('screen');
const ProdsProcessOverviewItem = () => {
    return (
        <View style={{ borderWidth: 2, borderRadius: 5, margin: 10, padding: 15, backgroundColor: '#ebf6fc' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', marginBottom: 15 }}>
                <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                    <Text style={{ textAlign: 'center' }}>Customer ID</Text>
                </View>

                <View style={{ borderBottomWidth: 0.5, width: 40 * width / 100, padding: 5 }}>
                    <Text style={{ textAlign: 'center' }}>Order Detail ID</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center' }}>
                <View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, marginBottom: 15, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Order Date</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, marginBottom: 15, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Payment Methods</Text>
                    </View>
                    <View style={{ borderBottomWidth: 0.5, width: 35 * width / 100, padding: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Payment Status</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", justifyContent: 'space-between' }}>
                    <View style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, flexDirection: 'row', width: 35 * width / 100}}>
                        <Text style={{ textAlign: 'center' }}></Text>
                    </View>
                    <Pressable style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, backgroundColor: '#87C4FF'}}>
                        <Text style={{ textAlign: 'center', color: '#FFEED9' }}>Xem chi tiết</Text>
                    </Pressable>
                    <Pressable style={{ borderWidth: 0.5, borderRadius: 5, padding: 5, backgroundColor: '#39A7FF'}}>
                        <Text style={{ textAlign: 'center', color: '#FFEED9' }}>Vận chuyển ngay</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default ProdsProcessOverviewItem

const styles = StyleSheet.create({})