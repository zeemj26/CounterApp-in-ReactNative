import{ StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet , Text, View, Button } from 'react-native';

export default class App extends React.Component {

state ={

  value: 0,
  total_taps: 0,
  clear:0
}

incrementValue = () => {

this.setState ({
  value: this.state.value + 1,
  total_taps: this.state.total_taps + 1
})

console.log("Value " + (this.state.value + 1))

}

decrementValue = () => {

this.setState ({
  value: this.state.value - 1,
  total_taps: this.state.total_taps - 1
})

console.log("Value " + (this.state.value - 1))

}

clearValue = () => {

this.setState ({
  value: this.state.value *0 ,
  total_taps: this.state.total_taps *0
})

console.log("Value " + (this.state.value = 0))

}

render(){
   return (
  <View style = {styles.container}>
    <Text style ={{fontSize : 25 , marginBottom : -20 }}>{this.state.value}</Text>
    <Text style ={{fontSize : 25 , padding : 25 , color: 'Black' }}>{"Total Taps "+ this.state.total_taps}</Text>
     <StatusBar style="auto"/>
      <View  style = {{ flexDirection : 'column'}}>

    <Button onPress = {this.incrementValue} title= "Increment" />
        <Text>  </Text>
            <Button onPress = {this.decrementValue} title= "Decrement" />
    <Text>  </Text>
    <Button onPress = {this.clearValue} title= "Clear" />

      </View>

  </View>
   );
   }
}
const styles = StyleSheet.create({

container :{
  flex:2, 
  backgroundColor : 'orange',
  alignItems: 'container',
  justifyContent: 'centre',
},

});