import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list'
// import { getPhotos } from '../hook';

// gris estilo pinterest
// @react-native-seoul/masonry-list

export default function Home() {

  const [search, setSearch] = useState('')

  // const [arr] = getPhotos(search.length>=1 ? search : null)

  const arr=[
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg",
  ]

  function Card({img}){
    return(
        <Text>{img}</Text>
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
        <Text>x</Text>
      </View>
      <View>
        <MasonryList
          style={{alignSelf: 'stretch'}}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignSelf: 'stretch',
          }}
          data={["1","2","3","4","5","6","7","8","9"]}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Card img={item}/>}
          onEndReachedThreshold={0.1}
        />
      </View>
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
    height:20,
    width:20
  }
});
