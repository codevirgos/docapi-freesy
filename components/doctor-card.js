
import { StyleSheet, TouchableOpacity } from 'react-native';
import {View, Text, Image } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { Rating } from 'react-native-ratings';

const DoctorCard = (props) => {
  var name = props.name; // todo use other way to do thi
  var specialities = props.specialities;
  var loc = props.loc;
  var navigation = props.navigation;
  var rating = props.rating;
  var review_count = props.review_count;
 

  const navigateToDoctorPage = () => {
    navigation.navigate('Doctor',{name,loc, specialities, rating, review_count});
  }

    return (
       <TouchableOpacity onPress={() => navigateToDoctorPage()}>
        <View style={[styles.container, {minHeight:175}]}>
        
        <LinearGradient
            colors={['#3180f6ff', '#0e8668ff']}
            style={styles.gradient}
            start={[0, 0.5]}
            end={[1,0.5]}/>

           <View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image style={{height:75, width:75, borderRadius:50, marginRight:20}} source={require("../images/doctor_sarah.jpg")} />
                  <View> 
                    <Text style={{fontSize:24, fontWeight:"bold"}}>{name}</Text>
                      <Rating
                        imageSize={20}
                        readonly={true}
                        //showRating
                        //onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10, alignSelf:'flex-start' }}
                      />
                  </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:15, marginBottom:10}}>
                    <Image style={{width: 15, height:15, tintColor:'gray', marginRight:5,}} source={require("../images/map-pin.png")} />
                    <Text style={{color:'gray', fontSize:16}}> {loc} </Text>
                </View>
                <Text style={{color:'gray', fontSize:16}}> {specialities} </Text>
            </View> 
        </View>
       </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
   gradient: {
   opacity:.5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10
  },
  container: {
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'white',
    borderWidth:1,
    //minHeight:150,
    borderRadius:10,
    marginVertical:15,
    padding:20,
    backgroundColor:"white",
    shadowColor: "gray",
    shadowOffset: {
        width: 0,
        height: 7,
    },
  }
});

export default DoctorCard;