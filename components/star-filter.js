import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const StarFilter = () => {
    const [rating, setRating] = useState('none');

    const ratingFilter = (rating) => {
      
        setRating(rating);
    }

    return (
        <View style={{flexDirection:'row', marginTop:10}}>
            <TouchableOpacity onPress={() => ratingFilter("All")}>
                <View style={{width:40, borderRadius:20, height:30, padding:5, marginRight:5, backgroundColor: (rating == 'All' ? '#517fa4' : '#F0F0F0')}}>
                    <Text style={{alignSelf:'center', paddingLeft:0, fontWeight:'bold', fontSize:15, color:(rating == 'All' ? 'white' : 'black')}}> All </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ratingFilter("5")}>
            <View style={[styles.filterBubbles,{backgroundColor: (rating == '5' ? '#517fa4' : '#F0F0F0')}]}>
                <Image style={{tintColor:(rating == '5' ? 'white' : 'black'), width:18, height:18}} source={require("../images/star.png")} />
                <Text style={{paddingLeft:0, color:(rating == '5' ? 'white' : 'black')}}> 5+ </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ratingFilter("4")}>
             <View style={[styles.filterBubbles,{backgroundColor: (rating == '4' ? '#517fa4' : '#F0F0F0')}]}>
                <Image style={{tintColor:(rating == '4' ? 'white' : 'black'), width:18, height:18}} source={require("../images/star.png")} />
                <Text style={{paddingLeft:0, color:(rating == '4' ? 'white' : 'black')}}> 4+ </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ratingFilter("3")}>
             <View style={[styles.filterBubbles,{backgroundColor: (rating == '3' ? '#517fa4' : '#F0F0F0')}]}>
                <Image style={{tintColor:(rating == '3' ? 'white' : 'black'), width:18, height:18}} source={require("../images/star.png")} />
                <Text style={{paddingLeft:0, color:(rating == '3' ? 'white' : 'black')}}> 3+ </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ratingFilter("2")}>
             <View style={[styles.filterBubbles,{backgroundColor: (rating == '2' ? '#517fa4' : '#F0F0F0')}]}>
                <Image style={{tintColor:(rating == '2' ? 'white' : 'black'), width:18, height:18}} source={require("../images/star.png")} />
                <Text style={{paddingLeft:0, color:(rating == '2' ? 'white' : 'black')}}> 2+ </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ratingFilter("1")}>
            <View style={[styles.filterBubbles,{backgroundColor: (rating == '1' ? '#517fa4' : '#F0F0F0')}]}>
                <Image style={{tintColor:(rating == '1' ? 'white' : 'black'), width:18, height:18}} source={require("../images/star.png")} />
                <Text style={{paddingLeft:0, color:(rating == '1' ? 'white' : 'black')}}> 1+ </Text>
            </View>
            </TouchableOpacity>
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
});
export default StarFilter;
