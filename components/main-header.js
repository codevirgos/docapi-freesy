import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';


const MainHeader = () => {
    return (
        <View style={styles.container}>
             <Image style={{tintColor:"#517fa4", width:50, height:50, alignSelf:'center', marginLeft:20, marginRight:5}} source={require("../images/stethoscope.png")} />
    
            <Text style={{color:'#517fa4', fontSize:25, alignSelf:'center', fontWeight:'bold'}}> Jetti </Text>
            
            <Text style={{fontSize:25, alignSelf:'center', fontWeight:'300'}}>
                Doctor Reviews
            </Text>

            {/*
            <TouchableOpacity style={styles.button}>
                    <Text style={{textAlign:'center', color:'white', fontSize:20}}> Add Doctor </Text>
            </TouchableOpacity> 
             */}

        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        minHeight: '15%',
        paddingTop:'50',
        flexDirection: 'row',
       
        borderColor:'white',
        borderWidth:1,
        //padding:15,
        backgroundColor:"white",
        shadowColor: "gray",
        shadowOffset: {
            width: 0,
            height: 7,
    },
    //shadowOpacity: 0.43,
    //shadowRadius: 9.51,

        elevation: 5,
    },
    button: {
        borderColor:'#517fa4',
        marginTop:5,
        marginLeft:20,//todo
        //height:50,
        padding:10,
        backgroundColor:'#517fa4',
        //width:'50%',
        elevation:10,
        borderRadius:10,
        justifyContent:'center',
        alignSelf:'center',
        marginBottom:5,
        shadowColor:"blue",
        
        
    },
});

export default MainHeader;