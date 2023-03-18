import { useState } from "react";
import { Text, View , StyleSheet, TouchableOpacity, Linking, ActivityIndicator } from "react-native"
import { Feather } from '@expo/vector-icons';

import * as FileSystem from "expo-file-system";
import * as MediaLibrary from 'expo-media-library';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
export default function Info({profile,img}){
  const [inSave, setInSave] = useState(false)

  async function salvarImagem() {
    setInSave(true)
    
    // Verificar se a permissão já foi concedida anteriormente
    const permissaoGaleria = await AsyncStorage.getItem('permissaoGaleria');
    
    if (permissaoGaleria === 'true') {
      // Se a permissão já foi concedida, prosseguir com a operação de salvar a imagem
      const file = FileSystem.documentDirectory + "teste.png";
      const downloadFile: FileSystem.FileSystemDownloadResult = await FileSystem.downloadAsync(img , file);
      MediaLibrary.createAssetAsync(downloadFile.uri);

    } else {
      // Se a permissão ainda não foi concedida, solicitar permissão ao usuário
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === 'granted') {
        // Se o usuário conceder a permissão, armazenar o status e prosseguir com a operação de salvar a imagem
        await AsyncStorage.setItem('permissaoGaleria', 'true'); 
        salvarImagem();
      } else {
        alert('É necessário conceder permissão para acessar a galeria de mídia. Por favor, vá às configurações do aplicativo e conceda a permissão manualmente.');
      }
    }
    setInSave(false)

  }
  

  return(
      <View style={styles.modal} >
        <View style={styles.view}>
          <Text style={styles.txt}>{profile.name}</Text>
          <Text style={[styles.txt,{fontSize:16,marginVertical:5}]}>{profile.location}</Text>

          <TouchableOpacity
            style={[styles.bt,{marginVertical:20}]}
            onPress={()=>Linking.openURL(profile.link)}
          >
            <Feather name="user" size={24} color="black" />
            <Text style={{marginLeft:10}}>Unsplash perfil</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.bt}
            onPress={()=>salvarImagem()}
            disabled={inSave? true : false}
          >
            {inSave? 
              <ActivityIndicator color="black"/>:
              <>
                <Feather name="download" size={24} color="black" />
                <Text style={{marginLeft:10}}>Download</Text>
              </>  
            }
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
    fontSize:20
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