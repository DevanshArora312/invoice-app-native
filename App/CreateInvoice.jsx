import {View,Text,ImageBackground,TouchableOpacity,StyleSheet,Alert,Image,TextInput, SafeAreaView} from "react-native";
import {LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { ScrollView} from "react-native-gesture-handler";
import "react-native-gesture-handler";
const CreateInvoice = ({navigation}) => {
    const pfp = require("../assets/images/kemal.jpg");
    
    return (  
    <ScrollView contentContainerStyle={{paddingBottom: "25%",backgroundColor:"rgb(246,241,225)"}}> 
        {/* <SafeAreaView contentContainerStyle={{flexGrow:1}}>  */}
            <View style={styles.top}>
                <TouchableOpacity onPress={()=>navigation.navigate("Landing")}>
                    <Text style={{fontSize:20,color:"white"}}>Back</Text>
                </TouchableOpacity>
                <View style={{display:"flex",justifyContent:"space-around",flexDirection:"row",alignItems:"flex-end"}}>
                    <Text style={{fontSize:60,color:"white",fontWeight:"bold"}}>Invoice</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Profile")}}>
                    <Image
                        style={styles.imgStyle}
                        source={pfp}
                        resizeMode={"cover"}
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{padding:10,textAlign:"center",fontSize:20}}>Invoice id : #</Text> 
            <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",padding:10}}>
                <View>
                    <Text style={{padding:10,paddingRight:20}}>Invoice Date:</Text>
                </View>
                    <TextInput
                        editable
                        style={{padding: 10,borderColor:"black",borderWidth:2,width:"60%",borderRadius:50,backgroundColor:"rgb(230,239,255)"}}
                    />
            </View>
            <View style={{alignItems:"center",width:"100%",marginVertical:10}}>
                <View style={{justifyContent:"center",padding:10,width:"90%"}}>
                    <View >
                        <Text style={{padding:10,fontSize:25}}> Bill To:</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",margin:10,alignItems:"center"}}>
                        <Text style={{marginRight:70}}>Name</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.field}
                        />
                    </View>
                    <View style={{display:"flex",flexDirection:"row",margin:10,alignItems:"center"}}>
                        <Text style={{marginRight:15}}>Street Address</Text>
                        <TextInput
                            editable
                            maxLength={50}
                            style={styles.field}
                        />
                    </View>
                    <View style={{display:"flex",flexDirection:"row",margin:10,alignItems:"center"}}>
                        <Text style={{marginRight:15}} >City,State & ZIP</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.field}
                        />
                    </View>
                </View>
            </View>

            <View style={{alignItems:"center",width:"100%",marginVertical:10}}>
                <View style={{justifyContent:"center",padding:10,width:"90%"}}>
                    <View >
                        <Text style={{padding:10,fontSize:25}}> From :</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row",margin:10,alignItems:"center"}}>
                        <Text style={{marginRight:70}}>Name</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.field}
                        />
                    </View>
                    <View style={{display:"flex",flexDirection:"row",margin:10,alignItems:"center"}}>
                        <Text style={{marginRight:15}}>Street Address</Text>
                        <TextInput
                            editable
                            maxLength={50}
                            style={styles.field}
                        />
                    </View>
                    <View style={{display:"flex",flexDirection:"row",margin:10,alignItems:"center"}}>
                        <Text style={{marginRight:15}} >City,State & ZIP</Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.field}
                        />
                    </View>
                </View>
            </View>

            <View style={{alignItems:"center",width:"100%",marginVertical:10}}>
                <View style={{justifyContent:"center",padding:10,width:"90%"}}>
                    <View >
                        <Text style={{padding:10,fontSize:25}}> Description & Amount :</Text>
                    </View>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={4}
                        style={{padding: 5,borderColor:"black",borderWidth:2,width:"90%",borderRadius:10,backgroundColor:"rgb(230,239,255)",marginLeft:15}}
                    />
                </View>
            </View>

            <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",padding:10}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:"white"}}>Save Locally</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btn}>
                <Text style={{color:"white"}}>  Print Reciept</Text>      
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor:"black",height:3,width:"100%"}}></View>
            <Text style={{textAlign:"center",fontSize:20}}>Export As:</Text>
            <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-around",padding:10}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:"white"}}>HTML</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btn}>
                    <Text style={{color:"white"}}>  .CSV</Text>      
                </TouchableOpacity>
            </View>
    </ScrollView>


    );
}

const styles  = StyleSheet.create({
    top : {
        backgroundColor:"black",
        width:"100%",
        height:"17%",
        justifyContent:"space-around",
        flexDirection:"column",
        paddingHorizontal:15
    },
    imgStyle:{
        width:50,borderRadius:40,height:50,overflow:"hidden",margin:7
    },
    btn : {
        width:"40%",
        backgroundColor:"black",
        borderRadius:50,
        padding:10,
        alignItems:"center",
        marginVertical:10
    },
    field : {padding: 5,borderColor:"black",borderWidth:2,width:"60%",borderRadius:50,backgroundColor:"rgb(230,239,255)"}

})
export default CreateInvoice;