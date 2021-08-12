import React from 'react'
import { View, Text,Dimensions,Image,TouchableOpacity, ImageBackground,StyleSheet } from 'react-native'

const BussinessList = (
    {
        id,name,image,treading,newest
    }
 
) => {
    console.log("image",id)
    return (
        <View style={{height:230,backgroundColor:"#cccccc4f",width:150,marginHorizontal:10,
        marginBottom:20,borderRadius:10,padding:10
        }}>
             <View style={{height:215,alignItems:"center",}}>
                <Image source={image} style={{flex:1,width:"100%"}}/>
                <Text style={{fontSize:15,fontWeight:"500",fontFamily:"system-ui"}}>{name}</Text>
            </View>
        </View>
    )
}

export default BussinessList

const styles = StyleSheet.create({})
