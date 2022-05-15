import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import { globalStyles } from '../styles/Global';

const ReviewDetails = ({ route, navigation }) => {

  const { title } = route.params;
  const { body } = route.params;
  const { rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text >{title}</Text>
      <Text >{body}</Text>
      <Text >{rating}</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

export default ReviewDetails;