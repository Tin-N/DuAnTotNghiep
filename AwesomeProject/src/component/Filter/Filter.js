import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleCategory, StyleOrder } from '../../css/Styles'
import SliderContainer from '../SliderContainer/SliderContainer'
import { Slider } from '@miblanchard/react-native-slider';
import Icon from 'react-native-vector-icons/Ionicons'

const Filter = (props) => {

   const { sliderState, setSliderState, category, setCategory } =props


    // const [sliderState, setSliderState] = React.useState(0);
    // //checkbox
    // const [category, setCategory] = useState("");

    // const options = [
        
    //     {
    //         name:"Tên (A - Z)",
    //         value:1
    //     },
    //     {
    //         name:"Tên (Z - A)",
    //         value:-1
    //     },
    //     {
    //         name:"Giá (cao đến thấp)",
    //         value:1
    //     },
    //     {
    //         name:"Giá (thấp đến cao)",
    //         value:-1
    //     }
    //     ,
    //     {
    //         name:"Bán chạy",
    //         value:1
    //     }
    // ];
    
    const options = ["clothing", "Shirt","pants"];

    function pickOption(selectedCheck) {       
        setCategory(selectedCheck);
        console.log(sliderState);
        return
    }
    return (
        <View>
            <Text style={StyleCategory.textRang}>Range</Text>
            <View >
                <SliderContainer
                    sliderValue={sliderState}
                    onValueChange={(newValue) => {
                        // newValue ở đây chính là giá trị từ SliderContainer
                        setSliderState(newValue); // Cập nhật giá trị trong SearchFilter
                    }}
                    >
                    <Slider
                        step={1000}
                        minimumValue={0}
                        maximumValue={10000000}
                    />
                </SliderContainer>
            </View>
            {/* checkbox */}
            {options.map(option => (
                <View key={option} >
                    <View style={StyleOrder.header}>
                        <Text style={StyleCategory.textPressable}>{option}</Text>
                        <TouchableOpacity onPress={() => pickOption(option)}>
                            {category==option ? <Icon name='checkmark-circle-sharp' size={24} color={'green'} /> : <Icon name='checkmark-circle-outline' size={24} color={'black'} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderBottomWidth: 1, marginBottom: 5, borderBottomColor: '#EDEDED' }}></View>
                </View>
            ))}
        </View>

    )
}
export default Filter;