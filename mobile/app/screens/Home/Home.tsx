import { useState } from "react";
import { useColors } from "../../hooks/useColors";
import { View } from "../../View/View";
import {
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useAirtableEvents } from "../../hooks/useAirtableEvents";
import { AirtableEvent } from "../../services/airtableService";
import { styles } from "./Home.style";

export type Event = AirtableEvent;

export type FilterType = "future" | "past";

const EventCard = ({ event }: { event: Event }) => {
  const colors = useColors();
  const defaultImage = require("../../assets/images/Festival.png");

  return (
    <View style={styles.eventCard}>
      <Image
        source={defaultImage}
        style={styles.eventImage}
        resizeMode="cover"
      />
      <View style={styles.eventInfo}>
        <Text style={[styles.eventTitle, { color: colors.white }]}>
          {event.title}
        </Text>
        <Text style={[styles.eventDate, { color: colors.white }]}>
          {event.date || "Date non disponible"}
        </Text>
        {event.description && (
          <Text style={[styles.eventDescription, { color: colors.white }]}>
            {event.description}
          </Text>
        )}
      </View>
    </View>
  );
};

export const Home = () => {
  const colors = useColors();
  const { events, loading, error, refetch } = useAirtableEvents();

  if (loading) {
    return (
      <View
        linearBackground
        linearBackgroundColors={[colors.orange, colors.sunset, colors.blue]}
        style={styles.loadingContainer}
      >
        <ActivityIndicator size="large" color={colors.white} />
        <Text style={[styles.loadingText, { color: colors.white }]}>
          Chargement des événements...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        linearBackground
        linearBackgroundColors={[colors.orange, colors.sunset, colors.blue]}
        style={styles.errorContainer}
      >
        <Text style={[styles.errorText, { color: colors.white }]}>
          Erreur: {error}
        </Text>
        <Text style={[styles.retryText, { color: colors.white }]}>
          Tirez vers le bas pour réessayer
        </Text>
      </View>
    );
  }

  return (
    <View
      linearBackground
      linearBackgroundColors={[colors.orange, colors.sunset, colors.blue]}
    >
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={refetch}
            tintColor={colors.white}
          />
        }
      >
        {events.length === 0 ? (
          <Text style={[styles.emptyText, { color: colors.white }]}>
            Aucun événement trouvé
          </Text>
        ) : (
          events.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))
        )}
      </ScrollView>
    </View>
  );
};
