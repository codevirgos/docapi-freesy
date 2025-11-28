import { StyleSheet, View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { Rating } from 'react-native-ratings';
import { Icon } from '@rneui/themed';
import StarFilter from './star-filter';

const Card = (props) => {
    var height = props.height;
    var name = props.name; // todo use other way to do thi
    var specialities = props.specialities;
    var loc = props.loc;
    var ratingSelected = 'none';

    const ratingFilter = (rating) => {
        ratingSelected = rating;
    }

    return (
        <View style={[styles.container, {minHeight:height}]}>
            <View style={[styles.searchBox, {flexDirection:'row'}]}>
              <Image style={{tintColor:'lightgray', marginTop:2, marginRight:5}} source={require("../images/search.png")} />
              {/* highlight searchview on active, bluish color */}
              <TextInput placeholder="Search doctors..." style={{borderWidth:0, color:'gray', width:'90%', fontSize:20, minHeight:'100%', marginBottom:-10, marginTop:-5}} />
            </View>
            <View style={{borderWidth:0, marginTop:"5%", flexDirection:'row', alignItems:'center'}}>
                <Text style={{letterSpacing:0, fontSize:15,color:'gray', fontWeight:'bold'}}> Filter by:</Text>
            </View>
            <StarFilter />
        </View>
    );
};

const styles = StyleSheet.create({
  filterBubbles:{
    width:55,
    borderRadius:20,
    height:30,
    marginRight:8,
    padding:5,
    backgroundColor:'#F0F0F0',
    flexDirection:'row',
    paddingLeft:10,
  },
  searchBox:{
    borderWidth:0,
    width:'100%',
    color:'gray',
    letterSpacing:.5,
    fontSize:16,
    borderColor:'lightgray',
    borderRadius:10,
    height:55,
    padding:10,
    elevation:5,
    backgroundColor:'white',
    alignItems:'center',
    paddingTop:10
  },
  container: {
    borderColor:'white',
    borderWidth:1,
    borderRadius:10,
    marginVertical:15,
    paddingHorizontal:15,
    paddingTop:20,
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
});
export default Card;