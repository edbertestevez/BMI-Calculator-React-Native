import React from 'react';
//Components
import{
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TextInput
} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weight: '0',
      height: '0',
      result: '0.00',
      description: 'None',
    };
  }

  //functions
  _onPressResult(w,h){
    let meters = parseFloat(h)/100;
    let res = parseFloat(parseFloat(w)/(meters*meters)).toFixed(2);
    let desc = "";
    this.setState({result: res});
    if(res>40){
      desc = "Morbid Obesity";
    }else if(res>35){
      desc = "Obesity (Class 2)";
    }else if(res>30){
      desc = "Obesity (Class 1)";
    }else if(res>25){
      desc = "Overweight";
    }else if(res>18.5){
      desc = "Normal Weight";
    }else{
      desc = "Underweight";
    }
    this.setState({description: desc});
  
  }

  /*
  componentWillMount(){
    
  }
  */

  render() {
    let header_pic = {uri:'http://sijur.com.br/lib/img/bg-2.jpg'};
    let app_title = "BMI Calculator";
    return(
      <View style={styles.main}>
        <View style={styles.header}>
          <Image style={styles.image} source={header_pic}/>
          <Text style={styles.app_title}>{app_title}</Text>
          <Text style={styles.sub_title}>{"Developed using React Native"}</Text>
        </View>

        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Weight in Kilogram (kg)"
            keyboardType='numeric'
            onChangeText={(weight) => this.setState({weight})}
          />
          <TextInput
            style={styles.input}
            placeholder="Height in Centimeters (cm)"
            keyboardType='numeric'
            onChangeText={(height) => this.setState({height})}

          />

          <Button
            large='true' 
            color="#12b5a7"
            padding='10'
            onPress={(e)=>{this._onPressResult(this.state.weight, this.state.height);}}
            title="Get Result"
          />    
        </View>

        <View style={styles.result}>
          <Text style={{fontSize:22, color:'#fff', fontWeight: 'bold', marginTop: 20, marginBottom: 15}}>Result:  {this.state.result}</Text>
          <Text style={{fontSize:22, color:'#fff', fontWeight: 'bold'}}>Description:  {this.state.description}</Text>
        </View>
      </View>
    );
  }
}


//CSS equivalent
const styles = StyleSheet.create({
  main:{
    flex: 1,
  },
  header:{
    flex:2,
    maxHeight: 250,
    backgroundColor: 'black',
    position: 'relative',
    justifyContent: 'center',
  },
  app_title:{
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  sub_title:{
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  image:{
    flex: 1,
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  content:{
    flex:1,
    padding: 20,
    backgroundColor: "#fafafa",
    paddingBottom: 100,
  },
  input:{
    marginTop: 10,
    marginBottom: 20,
    height: 60,
    padding: 5,
    fontSize: 18,
    textAlign: 'center',
  },
  result:{
    flex:1,
    padding: 20,
    backgroundColor: "#09a598"
  },
});