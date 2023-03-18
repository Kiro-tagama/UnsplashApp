import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Modal } from "react-native-ui-lib";
import Info from "./Info";

interface CardProps{
  thumb:string
  img:string
  imgColor:string
  profile:any
}

export default function Card({thumb,img,imgColor, profile}: CardProps){
  const navigation = useNavigation()
  const [visible,setVisible]= useState(false)

  return(
    <>
    <TouchableOpacity style={styles.img}
      onPress={()=> navigation.navigate("Selected", {img,profile,imgColor})}
      onLongPress={()=>setVisible(true)}
      >
      <Image
        source={{uri:thumb}}
        style={{width:"100%", height:"100%", borderRadius:16}}
        />
    </TouchableOpacity>

    <Modal 
      visible={visible} 
      animationType="slide"
      transparent={true}
      onBackgroundPress={() => setVisible(false)}>
      <Info profile={profile} img={img}/>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  img:{
    backgroundColor:"#ddd",
    height:250,
    width:"47.5%",
    borderRadius:16,
    margin:5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
});

