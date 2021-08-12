import React from 'react'
import { View, Text,Dimensions,Image,TouchableOpacity, ImageBackground,StyleSheet } from 'react-native'

const BussinessList = (
    {
        id,name,image,treading,newest,setHide
    }
 
) => {
    console.log("image",id)
    return (
        <View style={{height:230,backgroundColor:"#cccccc4f",width:150,marginHorizontal:10,
        marginBottom:20,borderRadius:10,padding:10
        }}>
             <View style={{height:215}}>
                <Image source={image} style={{flex:1,width:"100%"}}/>
                <View style={{flexDirection:"row",marginTop:5}}>
            <Text style={{fontSize:13,fontWeight:"500",fontFamily:"system-ui"}}>{name}</Text>
               <TouchableOpacity
               onPress={()=>setHide(id)}
               style={{backgroundColor:"teal",marginLeft:5,borderRadius:5,width:50,height:20}}>
                   <Text style={{color:"#fff",marginLeft:5}}>Delete</Text>

               </TouchableOpacity>
            </View>
            
            </View>
           
        </View>
    )
}

export default BussinessList

const styles = StyleSheet.create({})
