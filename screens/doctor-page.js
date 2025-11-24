
import {View, StyleSheet, Text, ScrollView, TouchableHighlight, TouchableOpacity, Image} from 'react-native';
import MainHeader from '../components/main-header';
import { LinearGradient } from 'expo-linear-gradient';


const DoctorPage = ({navigation, route}) => {
   var params = route.params;
   var name = params.name;
   var loc = params.loc;
   var specialities = params.specialities;
   var rating = params.rating;
   var review_count = params.review_count;

    
    return(
        <ScrollView>
            <LinearGradient
                colors={['#e6f2ff', 'transparent']}
                style={styles.gradient}
            />
            <MainHeader />

            <View style={{padding:15, minHeight:'120%', borderRadius:10,backgroundColor:"white",
                            shadowColor: "gray", shadowOffset: { width: 0, height: 7}, elevation: 5}}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:40, color:'gray'}}> {'\u2039'} </Text>
                        <Text style={{fontSize:20, color:'gray', marginTop:8}}> Back to Doctors </Text>
                    </View>
                </TouchableOpacity>

                <View style={{minHeight:'50%', marginTop:20, borderRadius:10,backgroundColor:"white",
                            shadowColor: "gray", shadowOffset: { width: 0, height: 7}, elevation: 5}}>
                     <LinearGradient
                        colors={['#3180f6ff', '#0e8668ff']}
                        style={styles.cardGradient}
                        start={[0, 0.5]}
                        end={[1,0.5]}   
                     />
                     <View style={{margin:20, marginTop:30}}>
                                <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image style={{height:75, width:75, borderRadius:50, marginRight:5}} source={require("../images/doctor_sarah.jpg")} />
                                <View>
                                <Text style={{fontSize:28, fontWeight:'bold', color:'white'}}> {name} </Text>
                            
                                <View style={{flexDirection:'row', marginTop:10, alignItems:'center'}}>
                                    <Image style={{tintColor:"#ffcc33", width:25, height:25, alignSelf:'center', marginLeft:5}} source={require("../images/star.png")} />
                                    <Image style={{tintColor:"#ffcc33", width:25, height:25, alignSelf:'center', marginLeft:5}} source={require("../images/star.png")} />
                                    <Image style={{tintColor:"#ffcc33", width:25, height:25, alignSelf:'center', marginHorizontal:0}} source={require("../images/half-star.png")} />
                                    <Text style={{color:'white', fontSize:20, fontWeight:'bold', marginLeft:5}}> {rating} </Text>
                                    <Text style={{color:'white', fontSize:20, marginLeft:0}}> ({review_count} reviews) </Text>
                                </View>
                            </View>
                       </View>

                       <View style={{flexDirection:'row', alignItems:'center', borderWidth:0, marginTop:30}}>
                           <Image style={{width: 25, height:25, tintColor:'white', marginHorizontal:5, marginRight:5}} source={require("../images/map-pin.png")} />
                           <Text style={{fontSize:20,  color:'white'}}> {loc} </Text>           
                       </View>
                       
                        <View style={{flexDirection:'row', alignItems:'center', borderWidth:0, marginTop:10}}>
                            <Image style={{width: 25, height:25, tintColor:'white', marginHorizontal:5, marginRight:5}} source={require("../images/cross.png")} />
                            <Text style={{fontSize:20, color:'white'}}> {specialities} </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.create_button}>
                        <Text style={{textAlign:'center', color:'white', fontWeight:'500', fontSize:20}}> Write a Review </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delete_button}>
                        <Text style={{textAlign:'center', color:'#517fa4', fontWeight:'500', fontSize:20}}> Delete Review </Text>
                    </TouchableOpacity>
                </View>
               
            </View>
             
           
             
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'100%'
  },
    cardGradient:{
        opacity:.5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height:'50%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    create_button: {
        borderColor:'#517fa4',
        marginTop:75,
        marginHorizontal:5,//todo
        //height:50,
        padding:10,
        backgroundColor:'#517fa4',
        //width:'50%',
        elevation:10,
        borderRadius:10,
        justifyContent:'center',
        marginBottom:5,
        shadowColor:'#517fa4',
    },
    delete_button: {
        borderColor:'#517fa4',
        //borderWidth:.5,
        marginTop:5,
        marginHorizontal:5,//todo
        //height:50,
        padding:10,
        backgroundColor:'white',
        //width:'50%',
        elevation:10,
        borderRadius:10,
        justifyContent:'center',
        marginBottom:5,
        shadowColor:'#517fa4',
    },
});

export default DoctorPage;