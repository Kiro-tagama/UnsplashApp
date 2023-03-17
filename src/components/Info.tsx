import { Text, View , StyleSheet, TouchableOpacity, Linking } from "react-native"
import { Feather } from '@expo/vector-icons';

import * as fs from "expo-file-system";

export default function Info({profile,img}){

  async function download() {
    console.log("em implementação");
  }

  return(
      <View style={styles.modal} >
        <View style={styles.view}>
          <Text style={styles.txt}>{profile.name}</Text>

          <TouchableOpacity
            style={[styles.bt,{marginVertical:20}]}
            onPress={()=>Linking.openURL(profile.link)}
          >
            <Feather name="user" size={24} color="black" />
            <Text style={{marginLeft:10}}>Unsplash perfil</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.bt}
            onPress={()=>download()}
          >
            <Feather name="download" size={24} color="black" />
            <Text style={{marginLeft:10}}>Download</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  modal:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  view:{
    width:"75%",
    height:"auto",
    backgroundColor:"#fff",
    borderRadius:16,
    padding:20
  },
  txt:{
    textAlign:'center',
    fontSize:20,
    marginBottom:20
  },
  bt:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eee',
    padding:20,
    borderRadius:10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})