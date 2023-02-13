import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const apiUrl = "https://gogosandiego.deno.dev/api/random";

  const [location, setLocation] = useState("???");
  const [activity, setActivity] = useState("???");
  const [loading, setLoading] = useState(false);

  async function onPress() {
    try {
      setLoading(true);

      const response = await fetch(apiUrl, {
        method: "GET",
        mode: "cors",
      });
      const data = await response.json();
      const { locationName, activityDescription } = data.data;

      setLocation(locationName);
      setActivity(activityDescription);

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <View style={styles.outputCard}>
          {loading && <ActivityIndicator size={"large"} />}
          {!loading && (
            <>
              <FontAwesomeIcon icon={faMugSaucer} size={64} />
              <Text style={styles.outputText}>{location}</Text>
            </>
          )}
        </View>
        <View style={styles.outputCard}>
          {loading && <ActivityIndicator size={"large"} />}
          {!loading && (
            <>
              <FontAwesomeIcon icon={faMugSaucer} size={64} />
              <Text style={styles.outputText}>{activity}</Text>
            </>
          )}
        </View>
      </View>

      <Pressable
        style={({ pressed }) => [
          { ...styles.actionBtn, opacity: pressed ? 0.5 : 1.0 },
        ]}
        onPress={onPress}
      >
        <Text style={styles.actionBtnText}>Re-roll</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },
  outputContainer: {
    paddingHorizontal: 20,
    marginTop: 100,
    width: "100%",
  },
  outputText: {
    fontSize: 32,
  },
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
  actionBtn: {
    backgroundColor: "yellow",
    padding: 20,
    width: "50%",
    borderRadius: 15,
    marginBottom: 45,
  },
  actionBtnText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
  },
});
