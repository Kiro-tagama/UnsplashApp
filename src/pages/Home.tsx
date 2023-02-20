import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View, TouchableOpacity, RefreshControl } from 'react-native';

import Card from '../components/Card';
import { getPhotos } from '../hook';
import { Ionicons } from '@expo/vector-icons';
import Info from '../components/Info';

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
          renderItem={({item}) => <Card thumb={item.urls.small} img={item.links.download} 
          profile={{
            name:item.user.name,
            link:item.user.links.html
          }}/>}
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
