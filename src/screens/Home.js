import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PageHeader from '../components/page-header/planet-header';
import Text from '../components/text/text';
import { PLANET_LIST } from '../data/planet-list';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';


const PlanetItem =({item})=>{
    const {color, name}= item;
    const navigation = useNavigation();
    return (
        <Pressable style={styles.item} onPress={()=>{
            navigation.navigate('planetDetails',{
                planet:item
            });
    }}>
       <View style={{flexDirection:'row',alignItems:'center'}}>
       <View style={[styles.circle,{backgroundColor:color}]}/>
        <Text preset='h4' style={styles.itemName}>{name}</Text>
       </View>

        <AntDesign name="right" size={15} color="white" />
    </Pressable>
    )
}

const Home = () => {

    const [list,setList] =useState(PLANET_LIST);

    const renderItem =({item})=>{
        return(
           <PlanetItem item={item} />
        )
    }


const searchFilter =(text)=>{

    const typedText = text.toLowerCase();

    const filteredList = PLANET_LIST.filter(item=>{
        const itemName = item.name.toLowerCase();
       if(itemName.includes(typedText)){
        return item
       }
    });

    setList(filteredList);

  
}

    return (
     
            <SafeAreaView  style={styles.container}>
                <PageHeader />

        <TextInput placeholder='Type the planet name' 
            placeholderTextColor={colors.white}
            autoCorrect={false}
            style={styles.searchInput}
            onChangeText={(text)=>{
                searchFilter(text)
            }}
            />

                <FlatList 
                data={list}
                keyExtractor={item => item.name}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={()=><View style={styles.seperator} />}
                renderItem={renderItem}
                
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
    },
    searchInput:{
        color:colors.white,
        borderBottomWidth:1,
        borderBottomColor:colors.white,
        marginHorizontal:spacing[5],
        padding:spacing[2],
        marginTop:spacing[4]
    }
  });
  