import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import { Slider } from "@miblanchard/react-native-slider";
import { StyleCategory, StyleSlider } from '../../css/Styles';


const SliderContainer = (props) => {
    const DEFAULT_VALUE = 0.2;
    const {caption,children,sliderValue,trackMarks,vertical}=props; 
    const [value, setValue] = React.useState(
        sliderValue ? sliderValue : DEFAULT_VALUE,
    );
    let renderTrackMarkComponent;

        
    // useEffect(() => {
    //     const isFixed =()=>
    //     {
    //         for(var i=0;i<value.length;i++)
    //         {
    //             setValue({...value,sliderValue[i].toFixed()})
    //         }
    //     }
      
    //     return () => {
          
    //     }
    //   }, [sliderValue])

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
                        onValueChange: setValue,
                        renderTrackMarkComponent,
                        trackMarks,
                        value,
                    });
                }
                return child;
            },
        );
    };

    return (
        <View style={StyleSlider.sliderContainer}>
            <View style={StyleSlider.titleContainer}>
                <Text style={StyleCategory.textPressable}>{Array.isArray(value) ? value.join(' - ') : value}</Text>
            </View>
            {renderChildren()}
        </View>
    );
};

export default SliderContainer;