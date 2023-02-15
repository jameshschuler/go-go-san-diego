import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function OutputCard({ title, icon, loading }) {
  return (
    <View style={styles.outputCard}>
      {loading && <ActivityIndicator size={"large"} />}
      {!loading && (
        <>
          {icon && <FontAwesomeIcon icon={icon} size={64} />}
          <Text style={styles.outputText}>{title}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outputCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    height: 150,
  },
  outputText: {
    fontSize: 32,
    marginTop: 10,
  },
});
