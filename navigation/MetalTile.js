import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MetaTile = ({ name, price, time, loading, onPress }) => {
  return (
    <TouchableOpacity style={styles.tile} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.leftSection}>
        <Text style={styles.symbolText}>{name.split(' ')[0].substring(0, 3).toUpperCase()}</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.metalName}>{name}</Text>
          <Text style={styles.unitText}>International Rate</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        {loading ? (
          <ActivityIndicator size="small" color="#d4af37" />
        ) : (
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.priceText}>₹{price}</Text>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
  },
  symbolText: {
    backgroundColor: '#f0f2f5',
    color: '#d4af37',
    padding: 10,
    borderRadius: 12,
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 12,
    overflow: 'hidden',
  },
  nameContainer: {
    flexShrink: 1, 
  },
  metalName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2c3e50',
  },
  unitText: {
    fontSize: 11,
    color: '#95a5a6',
    marginTop: 2,
  },
  rightSection: {
    alignItems: 'flex-end',
    marginLeft: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#27ae60',
  },
  timeText: {
    fontSize: 10,
    color: '#bdc3c7',
    marginTop: 4,
  },
});

export default MetaTile;