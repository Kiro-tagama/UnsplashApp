import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Card({thumb,img, profile}){
  const navigation = useNavigation()



  return(
    <>
    <TouchableOpacity style={styles.img}
      onPress={()=> navigation.navigate("Selected", {img,profile})}
      onLongPress={()=>console.log("modal aqui")}
      >
      <Image
        source={{uri:thumb}}
        style={{width:"100%", height:"100%", borderRadius:16}}
        />
    </TouchableOpacity>

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

