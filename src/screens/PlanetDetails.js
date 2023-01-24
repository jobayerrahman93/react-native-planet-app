import React from 'react'
import { Linking, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../components/page-header/planet-header'
import Text from '../components/text/text'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

const PlanetSection =({title,value})=>{
  return (
    <View style={styles.planetSection}>
      <Text style={{textTransform:'uppercase'}} preset='small'>{title}</Text>
      <Text preset='h2'>{value}</Text>
    </View>
  )
}

export default function PlanetDetails({navigation,route}) {

  const {planet} = route.params;
  const {name,description,rotationTime,revolutionTime,avgTemp,radius,wikiLink}=planet;

  const renderImage=(name)=>{
    switch (name) {
      case 'mercury':
        return <MercurySvg/>
      case 'earth':
        return <EarthSvg/>
      case 'jupiter':
        return <JupiterSvg/>
      case 'mars':
        return <MarsSvg/>
      case 'neptune':
        return <NeptuneSvg/>
      case 'saturn':
        return <SaturnSvg/>
      case 'uranus':
        return <UranusSvg/>
      case 'venus':
        return <VenusSvg/>
        
    }
  }

  const onPressLink =()=>{
    Linking.openURL(wikiLink)
  }
  return (
    <SafeAreaView style={styles.container}>
        <PageHeader backBtn={true}/>
      
      <ScrollView>
        <View style={styles.imageView}>
            {
              renderImage(name)
            }
        </View>

        <View style={styles.detailsView}>
              <Text style={styles.name} preset='h1'>{name}</Text>
              <Text style={styles.description} >{description}</Text>

              <Pressable onPress={onPressLink} style={styles.source}>
                <Text>Source: </Text>
                <Text preset='h4' style={styles.wikipedia}>Wikipedia </Text>
              </Pressable>
        </View>
        <View style={{height:40}}/>
        <PlanetSection title='rotation time' value={rotationTime}/>
        <PlanetSection title='revolution time' value={revolutionTime}/>
        <PlanetSection title='radius' value={radius}/>
        <PlanetSection title='avg temp' value={avgTemp}/>
      </ScrollView>
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black
    },
    imageView:{
      padding:spacing[5],
    alignItems:'center',
    justifyContent:'center'
    },
    detailsView:{
      marginTop:spacing[5],
      justifyContent:'center',
      alignItems:'center'

    },
    name:{
      textTransform:'uppercase'
    },
    description:{
      lineHeight: 21,
      textAlign:'center',
      marginTop:spacing[6]
    },
    source:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      marginTop:spacing[4]
    },
    wikipedia:{
      textDecorationLine:'underline',
      fontWeight:'700'
    },
    planetSection:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:spacing[5],
      paddingVertical:spacing[3],
      borderWidth:1,
      borderColor:colors.grey,
      marginHorizontal:spacing[6],
      marginVertical:spacing[2],
      borderRadius:10
    }
   
  });
  