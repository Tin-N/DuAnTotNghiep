import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StyleBanner } from '../../css/Styles'
const Banner = (props) => {
    const { BackgroundColor, Text1, Source, PrimaryTextColor, SecondTextColor, OpacitySecondText } = props
    // useState
    const [backgroundColor, setBackgroundColor] = useState('#FD4E28')
    const [source, setSource] = useState(require('../../images/Banner/banana-chips.png'))
    const [primaryTextColor, setPrimaryTextColor] = useState("white")
    const [secondTextColor, setSecondTextColor] = useState("white")
    const [text, setText] = useState("Chuối sấy \nCao cấp");
    const [opacitySecondText, setOpacitySecondText] = useState(0.5);


    useEffect(() => {
        const setValueToView = () => {
            // set color for background
            if (typeof BackgroundColor !== 'undefined')
                setBackgroundColor(BackgroundColor)
            // set source for image

            if (typeof Source !== 'undefined')
                setSource(Source)
            // set primary Text Color

            if (typeof PrimaryTextColor !== 'undefined')
                setPrimaryTextColor(PrimaryTextColor)
            // set second Text Color

            if (typeof SecondTextColor !== 'undefined')
                setSecondTextColor(SecondTextColor)
            // set title 

            if (typeof Text1 !== 'undefined')
            {
                if(Text1.length >22)
                {
                    let text1=Text1.toString().slice(0,23)+"...";
                    setText(text1);
                }else
                    setText(Text1)


            }else{
                if(text.length >22)
                {
                    let text1=text.toString().slice(0,23)+"...";
                    setText(text1);
                    console.log(text.length)
                }else
                    setText(text);
            }
           
            // set opacity for second Text

            if (typeof OpacitySecondText !== 'undefined')
                setOpacitySecondText(OpacitySecondText)
           return 
        }
        setValueToView();
        return () => {
            
        }
    }, [BackgroundColor,Text1,OpacitySecondText, Source, PrimaryTextColor, SecondTextColor])


    return (
        <View style={[StyleBanner.WholeView,{backgroundColor:backgroundColor}]}>
           <View style={{width:"65%",justifyContent:'center',paddingLeft:10}}>
            <Text style={[StyleBanner.title,{color:primaryTextColor}]}>{text}</Text>
            <View style={{flexDirection:'row',marginTop:3}}>
                <Text style={[StyleBanner.secondText,{opacity:opacitySecondText,color:secondTextColor}]}>Mua ngay</Text>
                <Image style={[StyleBanner.icon]} source={require('../../images/arrow-right.png')}></Image>
            </View>
           </View>
            <Image source={source} style={[StyleBanner.image]}/>
        </View>
    )
}

export default Banner