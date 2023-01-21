import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../components/page-header/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

const Home = ({navigation}) => {
    return (
     
            <SafeAreaView  style={styles.container}>
                <PageHeader />

                <FlatList 
                data={PLANET_LIST}
                keyExtractor={item => item.name}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={()=><View style={styles.seperator} />}
                renderItem={({item,index})=>{
                    return(
                        <Pressable style={styles.item} onPress={()=>{
navigation.navigate('planetDetails');
                        }}>
                           <View style={{flexDirection:'row',alignItems:'center'}}>
                           <View style={[styles.circle,{backgroundColor:item.color}]}/>
                            <Text preset='h4' style={styles.itemName}>{item.name}</Text>
                           </View>

                            <AntDesign name="right" size={15} color="white" />
                        </Pressable>
                    )
                }}
                
                />
            </SafeAreaView>
   
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop: spacing[4],
        paddingBottom: spacing[4],
        justifyContent:'space-between'
    },
    circle:{
        width:20,
        height:20,
        borderRadius:50,
        marginRight:10
    },
    list:{
        padding:spacing[5]
    },
    itemName:{
        textTransform:'uppercase'
    },
    seperator:{
        borderBottomColor: '#333',
        borderBottomWidth:0.3
    }
  });
  