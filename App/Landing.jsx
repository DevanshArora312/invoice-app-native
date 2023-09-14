import {View,Text,ImageBackground,TouchableOpacity,StyleSheet,Alert,Image} from "react-native";
import {LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";


const Landing = ({navigation}) => {
    const pfp = require("../assets/images/kemal.jpg");
    return (  
        <>
            <View style={styles.top}>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <Text style={{fontSize:20,color:"white"}}>___</Text>
                </TouchableOpacity>
                <View style={{display:"flex",justifyContent:"space-around",flexDirection:"row",alignItems:"flex-end"}}>
                    <View>
                        <Text style={{fontSize:50,color:"white"}}>Welcome</Text>
                        <Text style={{fontSize:50,color:"white",fontWeight:"bold"}}>User</Text>
                    </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                    <Image
                        style={styles.imgStyle}
                        source={pfp}
                        resizeMode={"cover"}
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{height:"100%",backgroundColor:"rgb(246,241,225)",padding:30}}>
                <View style={{marginTop:20}}>
                    <Text style={{fontSize:40,color:"black"}}>
                        Features
                    </Text>
                </View> 
                <View style={{flexWrap:"wrap",flexDirection:"row",justifyContent:"space-around",marginVertical:30,height:"40%"}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("upload")}
                        style = {{width:"45%",height:"50%",backgroundColor:"rgb(120,158,188)",borderRadius:10,padding:10,alignItems:"center",marginVertical:10,justifyContent:"center"}}
                    >
                        <Text style={{fontSize:25}}>Upload Invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("CreateInvoice")}
                        style = {{width:"45%",height:"50%",backgroundColor:"rgb(190,168,106)",borderRadius:10,padding:10,alignItems:"center",marginVertical:10,justifyContent:"center"}}
                    >
                        <Text style={{fontSize:25}}>Create Invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("list")}
                        style = {{width:"45%",height:"50%",backgroundColor:"rgb(236,158,141)",borderRadius:10,padding:10,alignItems:"center",marginVertical:10,justifyContent:"center"}}
                    >
                        <Text style={{fontSize:25}}>List of Invoice</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {{width:"45%",height:"50%",backgroundColor:"transparent",borderRadius:10,padding:10,alignItems:"center",marginVertical:10,justifyContent:"center"}}
                    >
                        <Text style={{fontSize:25}}></Text>
                    </TouchableOpacity>
                    <View style={{height:"10%"}}></View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    top : {
        backgroundColor:"black",
        width:"100%",
        height:"30%",
        justifyContent:"space-between",
        flexDirection:"column",
        padding:15,
        paddingHorizontal:20
    },
    topCont:{backgroundColor:"pink",width:"100%",height:"10%",justifyContent:"center",display:"flex"},
    imgStyle:{
        width:50,borderRadius:40,height:50,overflow:"hidden",margin:7
    },
    btn : {width:"50%",backgroundColor:"rgb(120,158,188)rgb(236, 191, 54)",borderRadius:10,padding:10,alignItems:"center",marginVertical:10},

  });

export default Landing;