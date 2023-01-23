import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getPhotos } from '../hook';

export default function Home() {

  const [search, setSearch] = useState('')

  const [arr] = getPhotos(search.length>=1 ? search : null)

  const card= (img:String)=>{
    return(
      <TouchableOpacity>
        <Image
          style={styles.img}
          src={img}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Pesquisar...'
        style={styles.input}
        value={search}
        onChangeText={txt=>setSearch(txt)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    padding:20,
    fontSize:18
  },
  input:{
    borderWidth:0.5,
    padding:10,
    borderRadius:10,
    fontSize:18
  },
  img:{
    height:20,
    width:20
  }
});
