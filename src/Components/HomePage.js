import React,{useEffect,useState} from 'react'
import { Alert, SafeAreaView } from 'react-native'
import Icons from "react-native-vector-icons/Ionicons"
import { StyleSheet, Text, View,FlatList,TextInput,TouchableOpacity,Modal } from 'react-native'
import{useSelector,useDispatch} from "react-redux"
import {BussinessStore} from "../Reducer/CategoryReducer"
import BussinessList from "./BussinessList"
import {Checkbox} from "react-native-paper"
const HomePage = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState();
    const [treading1,settreading1]=useState(false);
    const [newest1,setnewest1] = useState(false);

    const dispatch=useDispatch()

    const {CategoriesProduct}=useSelector((state) =>state.Category)

    const categories=CategoriesProduct ?CategoriesProduct.categories :[]

    console.log(categories,"gg")
    const cate=["Store"]
    const [categoryIndex,setcategoryIndex]=useState(0)
   
    

    useEffect(()=>{
        dispatch(BussinessStore())
    })

    const renderSpecialists=((item)=>{
     
       
        if(treading1 || newest1 ){
          console.log("filter",treading1,newest1)
          const {id,name,treading,image,newest}=item
          if(treading==="set"){
            console.log("trnding",treading)
            return (
              <View>
  
                  <BussinessList id={id} name={name} image={image} treading={treading} newest={newest}/>
                 
              </View>
          )
            

          }
          
          else if(newest==="set" ){
            console.log("newest",newest)
            return (
              <View>
  
                  <BussinessList id={id} name={name} image={image} treading={treading} newest={newest}/>
                 
              </View>
          )

          }else{
            return
          }
            
        }else{
          console.log("all data", treading1,newest1)
          const {id,name,treading,image,newest}=item
            return (
                <View>
    
                    <BussinessList id={id} name={name} image={image} treading={treading} newest={newest}/>
                   
                </View>
            )
        }
       
    })
    const CategoryList=()=>{
        return(
         <View style={styles.categoryContainer}>
         {cate.map((item,index)=>(
             <TouchableOpacity key={index} 
             activeOpacity={0.8}
             onPress={()=>setcategoryIndex(index)}>
             <Text  style={[styles.categoryText,categoryIndex==index && styles.categoryTextSelected]}>{item}</Text>
             </TouchableOpacity>
         ))}
        
     </View>
        )
    }
  
    

    return (
        <SafeAreaView style={{
            flex:1,
            paddingHorizontal:20,
            backgroundColor:"#fff"
        }}>
             <View style={styles.header}>
             <View>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Welcome to</Text>
                    <Text style={{fontSize:38,fontWeight:"bold",color:"green",marginTop:-12}}>Store App</Text>

                </View>
                <Icons name="beer-outline" size={24} color="#4caf50" onPress={()=>""}/>

            </View>
            <View style={{marginTop:30,flexDirection:"row"}}>
              
              <View style={{height:50,backgroundColor:"#272a2f1f",borderRadius:10,flex:1,flexDirection:"row",
                          alignItems:"center",
          }}>
                  <Icons name="search" size={25} style={{marginLeft:20}}/>
                  <TextInput placeholder="search movies"
                  style={{fontSize:18,fontWeight:"bold",color:"black",flex:1}}/>
              </View>
              <View>
              <Modal
               animationType="slide"
               transparent={true}
               visible={modalVisible}
               onRequestClose={() => {
                 Alert.alert("Modal has been closed.");
                 setModalVisible(!modalVisible);
               }}
             >
               <View style={styles.centeredView}>
                 <View style={styles.modalView}>
                     <View style={{flexDirection:"row"}}>
                 <Checkbox
                
                
               status ={treading1 ? 'checked' : 'unchecked'}
                onPress={() => {
               settreading1(!treading1);
               console.log("hello",treading1)

              }}
                 />
                 <Text style={{fontWeight: 'bold',paddingTop:5}}> Trending</Text>
                 </View>
                 <View style={{flexDirection:"row"}}>
                 <Checkbox
                style={{marginLeft:3}}
                
                  status={newest1 ? 'checked' : 'unchecked'}
                 onPress={() => {
                 setnewest1(!newest1);
              console.log(newest1,"new")
             }}
                 />
                 <Text style={{fontWeight: 'bold',paddingTop:5}}>Newest</Text>
                 </View>
                   <TouchableOpacity
                     style={[styles.button, styles.buttonClose]}
                     onPress={() => setModalVisible(!modalVisible)}
                   >
                     <Text style={styles.textStyle}>Apply</Text>
                   </TouchableOpacity>
                 </View>
               </View>
             </Modal>
             </View>
              <View  style={{marginLeft:10,height:50,width:50,backgroundColor:"green",justifyContent:"center",alignItems:"center",borderRadius:10}}>
                  <Icons name="funnel-outline" size={30} color="#fff"     onPress={() => setModalVisible(true)}/>

              </View>
             

          </View>
          <CategoryList/>

         

 
                 <FlatList
              numColumns={2}
         columnWrapperStyle={{justifyContent:"space-between"}}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{
             marginTop:10,
             paddingBottom:50
         }}
        data={categories}
       
        renderItem={({item})=>{
            return renderSpecialists(item)
            }}
        keyExtractor={item=>{item.id}}
        /> 
           
       
       
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
      centeredView: {
        flex: 1,
       
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
   
    
    header: {
        marginTop:25,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    categoryContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        marginBottom:30,
        marginHorizontal:10
    },
    categoryText:{
        fontSize:16,
        fontWeight:"bold",
        color:"grey"
    },
    categoryTextSelected:{
        color:"green",
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:"green"
    }
})
