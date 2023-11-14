import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import ProdsProcessOverviewItem from './ProdsProcessOverviewItem'

const ProdsProcessOverview = () => {
    return (
        <View>
            <FlatList
                showsVerticalScrollIndicator={false}
                overScrollMode='never'
                data={"12"}
                renderItem={({ item }) => <ProdsProcessOverviewItem dulieu1={item} />}
                keyExtractor={item => item._id} />
        </View>
    )
}

export default ProdsProcessOverview

const styles = StyleSheet.create({})