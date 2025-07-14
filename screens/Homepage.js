import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

import FeatureGrid from "../components/Homepage/FeatureGrid";
import server from "../constants/server.js";
import BottomNavbar from "../components/common/BottomNavbar.js";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const CATALOG_HEIGHT = SCREEN_HEIGHT * 0.8;

function Homepage() {
  const [homepageData, setHomepageData] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${server.host}/homepage/mobile/`);
        const json = await res.json();
        setHomepageData(json);
      } catch (e) {
        console.error("Failed to fetch homepage data:", e);
      }
    };
    fetchProducts();
  }, []);

  const features = homepageData?.data?.features;

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView
        style={styles.rootContainer}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false}
      >
        <Text style={styles.logoText}>Logo</Text>

        <View style={styles.bannerView}></View>

        <Text style={styles.headingText}>Special offers</Text>
        <View style={styles.offerContainer}>
          <View style={styles.offerCard}>
            <Text style={styles.offerHeading}>30%</Text>
            <Text style={styles.offerText}>On all the toys</Text>
          </View>
          <View style={styles.offerCard}>
            <Text style={styles.offerHeading}>New Arrivals</Text>
            <Text style={styles.offerText}>Checkout now</Text>
          </View>
          <View style={styles.offerCard}>
            <Text style={styles.offerHeading}>Summer Sale</Text>
            <Text style={styles.offerText}>Up to 50% off</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carouselContainer}
          contentContainerStyle={styles.carouselContent}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {features?.map((item, idx) => (
            <View key={idx} style={styles.pageWrapper}>
              <FeatureGrid
                title={item.feature_title}
                imageKey={`${server.host}${item.feature_image1}`}
              />
            </View>
          ))}
        </ScrollView>

        <View style={styles.dotsContainer}>
          {features?.map((_, idx) => (
            <View
              key={idx}
              style={[styles.dot, idx === activeIndex && styles.activeDot]}
            />
          ))}
        </View>
      </ScrollView>
      <BottomNavbar></BottomNavbar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#FFFFF5",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  logoText: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#555",
  },
  bannerView: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    width: "90%",
    height: "30%",
    borderRadius: 25,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
  },
  headingText: {
    marginTop: 19,
    marginLeft: 25,
    fontSize: 27,
    color: "#444",
    fontWeight: "600",
  },
  offerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
  offerCard: {
    flex: 1,
    margin: 5,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
  offerHeading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#666",
  },
  offerText: {
    fontSize: 15,
    textAlign: "center",
    color: "#777",
  },
  carouselContainer: {
    width: SCREEN_WIDTH,
    height: CATALOG_HEIGHT,
    marginTop: 20,
    alignSelf: "center",
  },
  carouselContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  pageWrapper: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 17,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.3)",
    marginRight: 8,
  },
  activeDot: {
    backgroundColor: "#000",
  },
});

export default Homepage;
