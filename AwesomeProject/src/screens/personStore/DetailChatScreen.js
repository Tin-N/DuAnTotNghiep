import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import { View,Dimensions,Text,Image, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native'
export default DetailChatScreen=(props)=> {
    const {width,height}=Dimensions.get('screen')
  const [messages, setMessages] = useState([])
    const renderAction = useCallback(()=>{
        return(
            <TouchableOpacity style={{height:'100%',justifyContent:'center',marginLeft:10}}>
                <Image
                    source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png'}}
                    style={{width:20,height:20,}}
                />
            </TouchableOpacity>
        )
    },[])
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/186411363_870705843818157_1487435103639139283_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XZoa0OGnxNwAX9Xw9Dr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBEgpF3NvhPhXFhNexZbjNNL-nbTWFe5RE7cFgadp9GyQ&oe=657F692B',
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(1700320901000),
        image:'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/186411363_870705843818157_1487435103639139283_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XZoa0OGnxNwAX9Xw9Dr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBEgpF3NvhPhXFhNexZbjNNL-nbTWFe5RE7cFgadp9GyQ&oe=657F692B',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/186411363_870705843818157_1487435103639139283_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XZoa0OGnxNwAX9Xw9Dr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBEgpF3NvhPhXFhNexZbjNNL-nbTWFe5RE7cFgadp9GyQ&oe=657F692B',
        },
      },
    ].sort((time1,time2)=>time2.createdAt-time1.createdAt))
  }, [])

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <SafeAreaView>
        <KeyboardAvoidingView>
    <View
        style={{
            width:width,
            height:height-50,
        }}
    >   
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            paddingVertical:10,
            backgroundColor:'white'
        }}>
              <TouchableOpacity
              style={{
                marginHorizontal:14
            }}
              >
                    <Image
                        source={require('../../images/3994376_arrow_back_left_navigation_previous_icon.png')}
                        style={{
                            width:20,
                            height:20
                        }}
                    />
            </TouchableOpacity>
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}
                >
            <TouchableOpacity>

            <Image style={{
                width:50,
                height:50,
                borderRadius:50,
              marginRight:20
           }}
            source={{uri:'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/186411363_870705843818157_1487435103639139283_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=XZoa0OGnxNwAX9Xw9Dr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBEgpF3NvhPhXFhNexZbjNNL-nbTWFe5RE7cFgadp9GyQ&oe=657F692B'}} />
            </TouchableOpacity>
            <Text>Dadfasfsfsdfs</Text>
            </View>
        </View>
        <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      loadEarlier={true}
    keyboardShouldPersistTaps={true}
      renderAvatarOnTop={true}
      user={{
        _id: 1,
      }}
      
      renderMessageText={(messages)=>{
        return(
            <View
                style={{
                    padding:5,
                    margin:5,
                    marginBottom:0
                }}
            >
                <Text
                    style={{
                        fontSize:16,
                    }}
                >{messages.currentMessage.text}{messages.currentMessage.createdAt.getTime()}</Text>

            </View>
        )
      }}
      textInputProps={
        {multiline:true}
      }
      infiniteScroll={true}
      renderUsernameOnMessage={true}
      renderTime={(time)=>{
        const timeDate=time.currentMessage.createdAt;
        const example=timeDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return(
           <Text
            style={{
                position:'relative',
                bottom:0,
                right:0,
                padding:5,
                paddingRight:10
            }}
           >{example}</Text>
        )
      }}
      renderUsername={
        ((username)=>{return(
            <View 
                style={{margin:10,marginTop:5,paddingHorizontal:5}}
            >
                <Text>{username.name}</Text>

            </View>
        )})
      }
      renderActions={renderAction}
      
    />
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
    
  )
}
