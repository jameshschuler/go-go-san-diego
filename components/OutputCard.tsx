import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface OutputCardProps {
  title: string;
  icon: IconProp;
  loading: boolean;
}

export default function OutputCard({ title, icon, loading }: OutputCardProps) {
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
    height: 175,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  outputText: {
    fontSize: 32,
    marginTop: 10,
  },
});
