import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../components/page-header/planet-header'
import Text from '../components/text/text'
import { colors } from '../theme/colors'

export default function PlanetDetails() {
  return (
    <SafeAreaView style={styles.container}>
        <PageHeader backBtn={true}/>
      <Text>PlanetDetails</Text>
    </SafeAreaView>
  )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black
    },
   
  });
  