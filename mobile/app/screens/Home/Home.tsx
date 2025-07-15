import { useState } from "react";
import { useColors } from "../../hooks/useColors";
import { View } from "../../View/View";
import { Text, Image, ScrollView, StyleSheet } from "react-native";

export type Event = {
  id: string;
  title: string;
  date: string;
  image: string;
  description?: string;
};

const sampleEvents: Event[] = [
  {
    id: "1",
    title: "Soirée Électro",
    date: "15 Décembre 2024",
    image: require("../../assets/images/android_logo.png"),
    description: "Une soirée électro exceptionnelle",
  },
  {
    id: "2",
    title: "Festival Rock",
    date: "20 Décembre 2024",
    image: require("../../assets/images/logo.png"),
    description: "Le plus grand festival rock de l'année",
  },
];

export type FilterType = "future" | "past";

const EventCard = ({ event }: { event: Event }) => {
  const colors = useColors();
  const [filter, setFilter] = useState<FilterType>("future");

  return (
    <View style={styles.eventCard}>
      <Image
        source={
          typeof event.image === "string" ? { uri: event.image } : event.image
        }
        style={styles.eventImage}
        resizeMode="cover"
      />
      <View style={styles.eventInfo}>
        <Text style={[styles.eventTitle, { color: "#FFFFFF" }]}>
          {event.title}
        </Text>
        <Text style={[styles.eventDate, { color: "#E0E0E0" }]}>
          {event.date}
        </Text>
        {event.description && (
          <Text style={[styles.eventDescription, { color: "#E0E0E0" }]}>
            {event.description}
          </Text>
        )}
      </View>
    </View>
  );
};

export const Home = () => {
  const colors = useColors();

  return (
    <View
      linearBackground
      linearBackgroundColors={[colors.orange, colors.sunset, colors.blue]}
    >
      <ScrollView style={styles.container}>
        {sampleEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  eventCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  eventImage: {
    width: "100%",
    height: 200,
  },
  eventInfo: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  eventDate: {
    fontSize: 14,
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});

