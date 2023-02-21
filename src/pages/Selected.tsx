import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import Info from '../components/Info';
import { Modal } from 'react-native-ui-lib';

export default function Selected({route}) {
  const navigation = useNavigation()

  const [visible,setVisible]= useState(false)

  console.log(route);

  return (
    <View style={styles.container}>
      <Image source={{uri:route.params.img}} style={styles.img}/>

      <TouchableOpacity style={[styles.bt,{top:40,left:20,}]} onPress={()=>navigation.goBack()}>
        <Ionicons name="caret-back" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.bt,styles.modal]} onPress={()=>setVisible(true)}>
        <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
      </TouchableOpacity>

      <Modal 
      visible={visible} 
      animationType="slide"
      transparent={true}
      onBackgroundPress={() => setVisible(false)}>
        <Info profile={route.params.profile} img={route.params.img}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img:{
    height:"100%",width:"100%"
  },
  bt:{
    padding:10,
    backgroundColor:"#fff",
    borderRadius:16,
    position:"absolute",
    

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modal:{
    bottom:40,
    alignSelf:"center"
  }
});
