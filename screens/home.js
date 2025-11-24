import { ScrollView, StyleSheet, Text, View } from 'react-native';

import DoctorCard from '../components/doctor-card';
 
import MainHeader from '../components/main-header';
import SearchCard from '../components/search-card';

import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({navigation}) => {
  
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.mainView}>
      
      
      <LinearGradient
        colors={['#e6f2ff', 'transparent']}
        style={styles.gradient}
      />

      <MainHeader />

      <View style={styles.bodyView}>

        {/*
          <View style={{flexDirection:'row', gap:10, flexWrap:'wrap', alignItems:'baseline', paddingTop:20}}>
            <Text style={{fontSize:24,fontWeight: '600',}}> Welcome Back Terrance! </Text>
          </View>
        */}

        <SearchCard />
        <DoctorCard navigation={navigation} name={"Dr. Sarah Michaels"} specialities={"Emergency Care, General Practice"} loc={"John Hopkins Hospital"} rating={2.5} review_count={2} />
      </View>

       
      {/*
      <View style={styles.cardContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </View>
      */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  mainView: {
    //backgroundColor:'lightcyan',
    minHeight:'100%'
  },

  bodyView: {
    paddingHorizontal:15
  },

  container: {

  }, 
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor:'white',
    minHeight:150,
    borderWidth:2,
    borderRadius:10,
    
    marginVertical:20,
    padding:20
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
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
});

export default HomeScreen;
