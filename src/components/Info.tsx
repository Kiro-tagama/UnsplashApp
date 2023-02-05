import { Text, View , StyleSheet } from "react-native"

export default function Info({profile}){

  return(
      <View style={styles.modal} >
        <View style={styles.view}>
          <Text>{profile.name}</Text>
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
    height:"50%",
    backgroundColor:"#fff",
    borderRadius:16,
  }
})