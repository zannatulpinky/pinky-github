import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button,Image } from 'react-native';

export default function App() {
  var textInputValue = "<answer goes here>";
  const handlePress = () => console.log(textInputValue);
  const handleChangeText =() => console.log(textInputValue);
  return (
    <View style={styles.container}>
     <View style={{backgroundColor: "lightblue", paddingBottom:"2rem", paddingTop:"1rem",marginTop:"2rem"}}>      
       <Text style = {{fontSize: 20, fontWeight: "bold", color:"black"}}>Hello World!
       </Text>
       <Text style = {{fontSize: 15, fontWeight:"500"}}>First React Native App</Text>
       <Text>This is a paragraph explaining what this app is all about. As you can see there are already many components including text,image and buttons</Text>
     </View>
       <Text style={{marginTop:"2rem", fontWeight:"bold"}}>What would you like to get out of this course?
       </Text> 
       <view style={{backgroundColor:"#F5F0F0", height:"20%",width:"80%"}}>
       <TextInput placeholder="Initial Text" onChangeText={handleChangeText}/>
       </view>
       <Text style={{fontWeight:"bold", marginTop:"2rem"}}>An emoji descripbing how you are feeling about the course:</Text>
       <Image source={{uri: 'https://media.istockphoto.com/photos/abstract-technology-blue-spotlight-backgrounds-loopable-elements-4k-picture-id1174989484?b=1&k=20&m=1174989484&s=170667a&w=0&h=xe1cvmwKDQGcfsxhiukjYP8PrDEyQ52at9-epfX56y4='}}
               style={{width: 100, height: 100}}></Image>
               <View style={{marginTop:10,height:20,width:100,}}> <Button title ="submit" >Submit</Button></View>
       
     
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:400,
    width:350,
    backgroundColor: '#96E4F3',
    alignItems: '',
    justifyContent: '',
    fontSize: 20,
    fontWeight: "bold"

  }, 
});
