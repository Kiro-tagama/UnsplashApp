import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, ScrollView, View, TouchableOpacity } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { getPhotos } from '../hook';
import { Ionicons } from '@expo/vector-icons';

// gris estilo pinterest
// @react-native-seoul/masonry-list

export default function Home() {

  const [search, setSearch] = useState('')

  const [...arr] = getPhotos(search.length >=1 ? search : null)

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function Card({img}){
    return(
      <Image
        source={{uri:img}}
        style={styles.img}
      />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder='Pesquisar...'
          style={{flex:1}}
          value={search}
          onChangeText={txt=>setSearch(txt)}
        />
        <TouchableOpacity onPress={()=>setSearch('')}>
          <Ionicons name="ios-close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop:10, flex:1}}>
        <FlatList
          data={arr}
          renderItem={({item}) => <Card img={item.links.download}/>}
          keyExtractor={(item, index)=>item.id || index}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:40,
    paddingHorizontal:20,
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
  },
  img:{
    backgroundColor:"#3337",
    height:250,
    width:"48.5%",
    borderRadius:16,
    margin:3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  }
});
