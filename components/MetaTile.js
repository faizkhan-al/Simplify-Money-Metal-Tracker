import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MetaTile = ({ name, price, time, loading, onPress }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.title}>{name}</Text>
      {loading ? (
        <ActivityIndicator size="small" color="#FFD700" />
      ) : (
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.price}>₹{price}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#fff', padding: 22, marginVertical: 8, marginHorizontal: 16, 
    borderRadius: 12, elevation: 4 
  },
  title: { fontSize: 18, fontWeight: '700' },
  price: { fontSize: 17, color: '#2ecc71', fontWeight: 'bold' },
  time: { fontSize: 10, color: '#999' }
});

export default MetaTile;