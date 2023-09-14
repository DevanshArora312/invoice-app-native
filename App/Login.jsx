import {View,Text,TouchableOpacity,StyleSheet,Alert,TextInput,BackHandler} from "react-native";
import {LinearGradient } from "expo-linear-gradient";
import {useEffect, useState} from "react"

import { useNavigation } from "expo-router";

const Login = ({navigation}) => {
    // const [email,setEmail] = useState(""); 
    // const [pass,setPass] = useState(""); 

    const backPressHandler = ()=>{
        Alert.alert(
            "Exit App",
            "Exiting the App?",
            [
                {
                    text:"Cancel",
                    onPress:()=>{
                        console.log('Cancel Pressed!');
                    },
                    style : "cancel",
                },
                {
                    text :"OK",
                    onPress:()=>BackHandler.exitApp(),
                },
            ],
            {
                cancelable:false,
            },
        );
        return true;
    }
    useEffect(()=>{
        const unsub = navigation.addListener('focus',()=>{
            BackHandler.addEventListener("hardwareBackPress",backPressHandler);
        })
        return unsub;
    },[navigation])
    const changeScreen = () =>{
        
        navigation.navigate('Landing');
        BackHandler.removeEventListener("hardwareBackPress",backPressHandler);
        // setEmail("");
        // setPass("");
        
    }

    return (  
        <>       
            <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(255,229,251)"}}>
                <View style={{width:"80%",height:"63%",justifyContent:"space-around",alignItems:"center",backgroundColor:"white",borderRadius:30,padding:20,flexDirection:'column'}}>
                    <Text style={{fontSize:35,fontWeight:"bold"}}>
                        Login
                    </Text>
                    <View style={{width:"90%",height:50,marginVertical:10}}>
                        <Text style={{fontSize:18}}>
                            Email
                        </Text>
                        <TextInput
                            editable
                            maxLength={40}
                            id = "email"
                            // onChangeText={text => setEmail(text)}
                            // value={email}
                            style={styles.texts}
                            placeholder="Enter Your Email"
                        />
                    </View>
                    <View style={{width:"90%",height:50}}>
                        <Text style={{fontSize:18}}>Password</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            id = "Password"
                            // onChangeText={text => setPass(text)}
                            // value={pass}
                            style={styles.texts}
                            placeholder="Enter Your Password"
                        />
                    </View>
                    <TouchableOpacity
                    onPress={changeScreen}
                    style = {styles.btn}
                >
                    <Text style={{color:"white",fontWeight:"bold"}}>Login</Text>
                </TouchableOpacity>
                
                </View>
                {/* <View style={{height:"20%"}}></View> */}
            </View>
        </>
    );
}
 
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems:"center" ,
        // justifyContent:"space-around",
        padding:10
    },
    topCont:{backgroundColor:"pink",width:"100%",height:"10%",justifyContent:"center",display:"flex"},
    imgStyle:{
        width:50,borderRadius:40,height:50,overflow:"hidden",margin:7
    },
    btn : {
        width:"60%",
        backgroundColor:"black",
        borderRadius:50,
        height:40,
        padding:10,
        alignItems:"center",
        marginVertical:10,
    },
    texts:{
        paddingHorizontal:5,
        backgroundColor:"white",
        width:"90%",
        height:"100%",
        borderRadius:100,
        fontSize:15,
        color:"black",
        backgroundColor:"rgb(230, 243, 255)",
        marginHorizontal:"auto",
        paddingHorizontal:10
    }
  });

export default Login;