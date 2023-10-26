import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleCategory, StyleSlider } from '../../css/Styles';
import { formatPrice } from '../../../Agro';

const SliderContainer = (props) => {
    const DEFAULT_VALUE = 0.2;
    const {caption,children,sliderValue,trackMarks,vertical,onValueChange}=props; 
    const [value, setValue] = React.useState(
        sliderValue ? sliderValue : DEFAULT_VALUE,
    );


    const handleSliderValueChange = (newValue) => {
        // Gọi hàm callback để truyền giá trị mới
        // Array.isArray(newValue)?FormatPrice(newValue):value;
        
        onValueChange(newValue);
        // Cập nhật giá trị trong state của SliderContainer
        setValue(newValue);
    };




    let renderTrackMarkComponent;

        
    if (trackMarks?.length && (!Array.isArray(value) || value?.length === 1)) {
        renderTrackMarkComponent = (index) => {
            const currentMarkValue = trackMarks[index];
            const currentSliderValue =
                value || (Array.isArray(value) && value[0]) || 0;
            const style =
                currentMarkValue > Math.max(currentSliderValue)
                    ? trackMarkStyles.activeMark
                    : trackMarkStyles.inactiveMark;
            return <View style={style} />;
        };
    }

    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        onValueChange: handleSliderValueChange,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }
                return child;
            },
        );
    };

    const FormatPrice=(array,format)=>
    {
        var demo=[];
        for(var i=0;i<array.length;i++){
           demo.push(formatPrice(array[i]));
        }
        if(format)
            return demo.join(' - ');
        return demo;
    }
    return (
        <View style={StyleSlider.sliderContainer}>
            <View style={StyleSlider.titleContainer}>
                <Text style={StyleCategory.textPressable}>{Array.isArray(value) ? FormatPrice(value,true) : value}</Text>
            </View>
            {renderChildren(handleSliderValueChange)}
        </View>
    );
};

export default SliderContainer;