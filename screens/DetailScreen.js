import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route }) {
  const { name, details } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name} Analysis (India)</Text>
        
        <View style={styles.highlightBox}>
          <Text style={styles.label}>India Market Price (11.66g)</Text>
          <Text style={styles.mainPrice}>₹{details.indianPrice}</Text>
          <Text style={styles.taxNote}>(Includes 15% Import Duty & 3% GST)</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.subLabel}>Global Rate (11.66g):</Text>
          <Text style={styles.val}>₹{details.intlTolaPrice}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.subLabel}>Previous Close (11.66g):</Text>
          <Text style={styles.val}>₹{details.prevClose}</Text>
        </View>

        <Text style={styles.footer}>
          Updated on: {details.date} at {details.time}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f0f2f5" },
  scrollContainer: { padding: 20 }, // ScrollView ke andar padding
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    width: '100%', // Card width fix
  },
  highlightBox: {
    backgroundColor: '#fff9e6',
    paddingVertical: 20, // Oopar niche space
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ffeaa7'
  },
  mainPrice: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    color: '#27ae60',
    textAlign: 'center' 
  },
  row: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee'
  },
  subLabel: { fontSize: 14, color: "#666", flex: 1 },
  val: { fontSize: 15, fontWeight: "bold", color: "#333", textAlign: 'right' }
});