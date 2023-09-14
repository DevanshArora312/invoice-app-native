import {View,Text,ImageBackground,TouchableOpacity,StyleSheet,Alert,Image} from "react-native";
import {LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";

const Starter = ({navigation}) => {
    const pfp = require("../assets/images/starter.png");
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("Login");
        },2000)
    },[])
    return (  
        
            <LinearGradient colors={["rgba(131,58,180,1)", "rgba(253,29,29,1)" , "rgba(252,176,69,1)"]} style={styles.container}>
                
                <Image
                        style={styles.imgStyle}
                        source={pfp}
                        resizeMode={"cover"}
                />
                
            </LinearGradient>
        
    );
}

const styles = StyleSheet.create({
    imgStyle:{
        width:200,borderRadius:100,height:200,overflow:"hidden",margin:7,backgroundColor:"transparent"
    },
    container:{height:"100%",justifyContent:"center",alignItems:"center",width:"100%"},
    
  });

export default Starter;