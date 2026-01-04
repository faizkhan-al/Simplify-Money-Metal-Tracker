import React, { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MetaTile from '../components/MetaTile';
import { fetchMetalPrices } from '../services/metaApi';

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [metals, setMetals] = useState({
    Gold: { symbol: 'XAU', loading: true },
    Silver: { symbol: 'XAG', loading: true },
    Platinum: { symbol: 'XPT', loading: true },
    Palladium: { symbol: 'XPD', loading: true }
  });

  const loadData = async () => {
    Object.keys(metals).forEach(async (name) => {
      try {
        const data = await fetchMetalPrices(metals[name].symbol);
        setMetals(prev => ({
          ...prev,
          [name]: { ...prev[name], ...data, loading: false }
        }));
      } catch (err) {
        setMetals(prev => ({ ...prev, [name]: { ...prev[name], loading: false } }));
      }
    });
  };

  useEffect(() => { loadData(); }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadData().then(() => setRefreshing(false));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#d4af37" />}
      >
        <View style={styles.headerBox}>
          <Text style={styles.welcomeText}>Market Overview</Text>
          <Text style={styles.subHeaderText}>Prices per Tola (11.66g) in INR</Text>
        </View>

        {Object.keys(metals).map((name) => (
          <MetaTile 
            key={name}
            name={name} 
            price={metals[name].intlTolaPrice || '0.00'} 
            time={metals[name].time} 
            loading={metals[name].loading} 
            onPress={() => !metals[name].loading && navigation.navigate('Details', { name, details: metals[name] })} 
          />
        ))}

        <View style={styles.footerInfo}>
          <Text style={styles.footerText}>*International Spot Rates (Excl. Local Taxes)</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0f2f5' },
  container: { flex: 1 },
  headerBox: {
    padding: 24,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
    elevation: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2c3e50',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
    fontWeight: '500',
  },
  footerInfo: {
    padding: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#bdc3c7',
    fontStyle: 'italic',
    textAlign: 'center'
  }
});