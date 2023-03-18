import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Card from '../components/Card';
import useGetPhotos from '../hook/useGetPhotos';

export default function Home() {

  const [search, setSearch] = useState('')
  const [...arr] = useGetPhotos(search.length >=1 ? search : null)

  const input=()=>{
    return(
      <View style={styles.input}>
        <TextInput
          placeholder='Pesquisar...'
          style={{flex:1}}
          value={search}
          onChangeText={txt=>setSearch(txt)}
        />
        {search.length>=1?
          <TouchableOpacity onPress={()=>setSearch('')}>
            <Ionicons name="ios-close" size={24} color="black" />
          </TouchableOpacity>
          :null
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {input()}
      <View style={{marginTop:10, flex:1}}>
        <FlatList
          data={arr}
          renderItem={({item}) => <Card thumb={item.urls.small_s3} img={item.urls.full} 
          imgColor={item.color}
          profile={{
            name:item.user.name,
            location:item.user.location,
            link:item.user.links.html
          }}/>}
          keyExtractor={(item, index)=>item.id || index}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    marginHorizontal:20,
    fontSize:18
  },
  input:{
    padding:10,
    paddingHorizontal:15,
    borderRadius:16,
    backgroundColor:"white",
    flexDirection:"row",
    alignItems:'center',  
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
