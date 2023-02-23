import {
  faMap,
  faSun,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import {
  Linking,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import OutputCard from "../components/OutputCard";
import { ApiResponse, Coords } from "../types";
import { activityIcons, locationTypeIcons } from "../utils/constants";
import { camelize } from "../utils/helpers";

export default function Home() {
  const apiUrl = "https://gogosandiego.deno.dev/api/random";

  const [location, setLocation] = useState<string>("???");
  const [activityIcon, setActivityIcon] = useState<IconDefinition>(faSun);
  const [locationTypeIcon, setLocationTypeIcon] =
    useState<IconDefinition>(faSun);

  const [activity, setActivity] = useState<string>("???");
  const [loading, setLoading] = useState<boolean>(false);

  const [coords, setCoords] = useState<Coords | undefined>();

  async function getRandom() {
    try {
      setLoading(true);

      const response = await fetch(apiUrl, {
        method: "GET",
        mode: "cors",
      });
      const data = (await response.json()) as ApiResponse;
      const {
        coords,
        locationName,
        locationType,
        activityDescription,
        activityName,
      } = data.data;

      setLocation(locationName);
      setLocationTypeIcon(locationTypeIcons[locationType.toLowerCase()]);

      setActivity(activityDescription);
      setActivityIcon(activityIcons[camelize(activityName)]);

      setCoords(coords);

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  async function onPress() {
    await getRandom();
  }

  function handleMapPress() {
    const scheme = Platform.select({
      ios: "maps:0,0?q=",
      android: "geo:0,0?q=",
    });

    const latLng = `${coords?.latitude},${coords?.longitude}`;
    const label = location;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url!);
  }

  useEffect(() => {
    async function fetchInitialData() {
      await getRandom();
    }

    fetchInitialData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <OutputCard
          loading={loading}
          title={location}
          icon={locationTypeIcon}
        />
        <OutputCard loading={loading} title={activity} icon={activityIcon} />
      </View>

      <View style={styles.actionsContainer}>
        <Pressable
          style={({ pressed }) => [
            { ...styles.actionBtn, opacity: pressed ? 0.5 : 1.0 },
          ]}
          onPress={onPress}
        >
          <Text style={styles.actionBtnText}>Re-roll</Text>
        </Pressable>
        {coords && (
          <Pressable
            style={({ pressed }) => [
              { ...styles.mapBtn, opacity: pressed ? 0.5 : 1.0 },
            ]}
            onPress={handleMapPress}
          >
            <FontAwesomeIcon icon={faMap} size={24} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 80,
  },
  outputContainer: {
    paddingHorizontal: 20,
    marginTop: 0,
    width: "100%",
  },
  actionBtn: {
    backgroundColor: "yellow",
    padding: 20,
    width: "50%",
    borderRadius: 15,
    marginBottom: 45,
  },
  mapBtn: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 45,
    marginLeft: 10,
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  actionBtnText: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
  },
});
