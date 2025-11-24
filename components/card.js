import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient} from 'expo-linear-gradient';
import { Rating } from 'react-native-ratings';
import { Icon } from '@rneui/themed';

const Card = (props) => {
    var height = props.height;
    var isDoctorCard = props.isDoctorCard;
    var name = props.name; // todo use other way to do thi
    var specialities = props.specialities;
    var loc = props.loc;

    return (
        <View style={[styles.container, {minHeight:height}]}>
        {isDoctorCard ?
          <LinearGradient
              colors={['#3180f6ff', '#0e8668ff']}
              style={styles.gradient}
              start={[0, 0.5]}
              end={[1,0.5]}
          />: null}

          {isDoctorCard ?
           <View>
                <Text style={{fontSize:24, fontWeight:"bold"}}>{name}</Text>

                <Rating
                  imageSize={20}
                  readonly={true}
                  //showRating
                  //onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10, alignSelf:'flex-start' }}
                />
                <View style={{flexDirection:'row', alignItems:'baseline', marginTop:5, marginBottom:10}}>
                    <Image style={{width: 15, height:15, tintColor:'gray', marginRight:5,}} source={require("../images/map-pin.png")} />
                    <Text style={{color:'gray', fontSize:16}}> {loc} </Text>
                </View>
                <Text style={{color:'gray', fontSize:16}}> {specialities} </Text>
            </View>
           : null}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
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