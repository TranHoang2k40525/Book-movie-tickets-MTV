import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  StatusBar, 
  SafeAreaView,
  Linking
} from 'react-native';

export default function App() {
  const [activeTab, setActiveTab] = useState('All');

  const handleProductPress = (link) => {
    if (link && Linking.canOpenURL(link)) {
      Linking.openURL(link);
    }
    
  };

  const renderTabContent = () => {
    if (activeTab === 'All') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.productsContainer}>
            <ProductItem 
              title="JUJUTSU KAISEN SET COMBO" 
              price="1.099.000 đ" 
              image={require('./assets/Anh3.jpeg')} 
              link="https://example.com/jujutsu-set"
            />
            <ProductItem 
              title="JUJUTSU KAISEN SINGLE COMBO" 
              price="299.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
              link="https://example.com/jujutsu-single"
            />
            <ProductItem 
              title="KAKAO FRIEND 2024 SET" 
              price="499.000 đ" 
              image={require('./assets/Anh5.jpeg')} 
            />
            <ProductItem 
              title="KAKAO FRIENDS 2024 SINGLE COMBO" 
              price="229.000 đ" 
              image={require('./assets/Anh6.jpeg')} 
            />
            <ProductItem 
              title="NARUTO SPECIAL SET" 
              price="899.000 đ" 
              image={require('./assets/Anh3.jpeg')} 
              link="https://example.com/naruto-set"
            />
            <ProductItem 
              title="ONE PIECE COMBO" 
              price="349.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="DEMON SLAYER SET" 
              price="799.000 đ" 
              image={require('./assets/Anh5.jpeg')} 
              link="https://example.com/demon-slayer"
            />
            <ProductItem 
              title="SPY X FAMILY COMBO" 
              price="279.000 đ" 
              image={require('./assets/Anh6.jpeg')} 
            />
            <ProductItem 
              title="ATTACK ON TITAN SET" 
              price="999.000 đ" 
              image={require('./assets/Anh3.jpeg')} 
              link="https://example.com/aot-set"
            />
            <ProductItem 
              title="DRAGON BALL COMBO" 
              price="319.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="MY HERO ACADEMIA SET" 
              price="699.000 đ" 
              image={require('./assets/Anh5.jpeg')} 
              link="https://example.com/mha-set"
            />
            <ProductItem 
              title="TOKYO REVENGERS COMBO" 
              price="259.000 đ" 
              image={require('./assets/Anh6.jpeg')} 
            />
          </View>
        </ScrollView>
      );
    } else if (activeTab === 'Combo') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.productsContainer}>
            <ProductItem 
              title="MTB COMBO" 
              price="125.000 đ" 
              image={require('./assets/Anh9.jpeg')} 
              link="https://example.com/cgv-combo"
            />
            <ProductItem 
              title="PREMIUM MTB COMBO" 
              price="135.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="MY COMBO" 
              price="95.000 đ" 
              image={require('./assets/Anh3.jpeg')} 
              link="https://example.com/my-combo"
            />
            <ProductItem 
              title="PREMIUM MY COMBO" 
              price="115.000 đ" 
              image={require('./assets/Anh2.jpeg')} 
            />
            <ProductItem 
              title="FAMILY COMBO" 
              price="199.000 đ" 
              image={require('./assets/Anh9.jpeg')} 
              link="https://example.com/family-combo"
            />
            <ProductItem 
              title="COUPLE COMBO" 
              price="159.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="KIDS COMBO" 
              price="89.000 đ" 
              image={require('./assets/Anh3.jpeg')} 
              link="https://example.com/kids-combo"
            />
            <ProductItem 
              title="DELUXE COMBO" 
              price="179.000 đ" 
              image={require('./assets/Anh2.jpeg')} 
            />
            <ProductItem 
              title="SNACK COMBO" 
              price="109.000 đ" 
              image={require('./assets/Anh9.jpeg')} 
              link="https://example.com/snack-combo"
            />
            <ProductItem 
              title="MOVIE NIGHT COMBO" 
              price="149.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="POPCORN LOVER COMBO" 
              price="99.000 đ" 
              image={require('./assets/Anh3.jpeg')} 
              link="https://example.com/popcorn-combo"
            />
            <ProductItem 
              title="ULTIMATE COMBO" 
              price="189.000 đ" 
              image={require('./assets/Anh2.jpeg')} 
            />
          </View>
        </ScrollView>
      );
    } else if (activeTab === 'Merchandise Combo') {
      return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.productsContainer}>
            <ProductItem 
              title="JUJUTSU KAISEN SET COMBO" 
              price="1.099.000 đ" 
              image={require('./assets/Anh5.jpeg')} 
              link="https://example.com/jujutsu-set"
            />
            <ProductItem 
              title="JUJUTSU KAISEN SINGLE COMBO" 
              price="299.000 đ" 
              image={require('./assets/Anh6.jpeg')} 
            />
            <ProductItem 
              title="KAKAO FRIEND 2024 SET" 
              price="499.000 đ" 
              image={require('./assets/Anh8.jpeg')} 
              link="https://example.com/kakao-set"
            />
            <ProductItem 
              title="KAKAO FRIENDS 2024 SINGLE COMBO" 
              price="229.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="POKEMON SPECIAL SET" 
              price="899.000 đ" 
              image={require('./assets/Anh5.jpeg')} 
              link="https://example.com/pokemon-set"
            />
            <ProductItem 
              title="GUNDAM COMBO" 
              price="349.000 đ" 
              image={require('./assets/Anh6.jpeg')} 
            />
            <ProductItem 
              title="STUDIO GHIBLI SET" 
              price="799.000 đ" 
              image={require('./assets/Anh8.jpeg')} 
              link="https://example.com/ghibli-set"
            />
            <ProductItem 
              title="MARVEL HEROES COMBO" 
              price="279.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
            <ProductItem 
              title="DC COMICS SET" 
              price="999.000 đ" 
              image={require('./assets/Anh5.jpeg')} 
              link="https://example.com/dc-set"
            />
            <ProductItem 
              title="HARRY POTTER COMBO" 
              price="319.000 đ" 
              image={require('./assets/Anh6.jpeg')} 
            />
            <ProductItem 
              title="STAR WARS SET" 
              price="699.000 đ" 
              image={require('./assets/Anh8.jpeg')} 
              link="https://example.com/starwars-set"
            />
            <ProductItem 
              title="DISNEY PRINCESS COMBO" 
              price="259.000 đ" 
              image={require('./assets/Anh4.jpeg')} 
            />
          </View>
        </ScrollView>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>MTB Store</Text>
          <TouchableOpacity style={styles.cartButton}>
            <Text style={styles.cartIcon}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'All' && styles.activeTab]} 
          onPress={() => setActiveTab('All')}
        >
          <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Combo' && styles.activeTab]} 
          onPress={() => setActiveTab('Combo')}
        >
          <Text style={[styles.tabText, activeTab === 'Combo' && styles.activeTabText]}>Combo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Merchandise Combo' && styles.activeTab]} 
          onPress={() => setActiveTab('Merchandise Combo')}
        >
          <Text style={[styles.tabText, activeTab === 'Merchandise Combo' && styles.activeTabText]}>Merchandise Combo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageScrollContainer}
      >
        <Image 
          source={require('./assets/Anh1.jpeg')} 
          style={styles.scrollImage} 
          resizeMode="cover"
        />
        <Image 
          source={require('./assets/Anh2.jpeg')} 
          style={styles.scrollImage} 
          resizeMode="cover"
        />
        <Image 
          source={require('./assets/Anh3.jpeg')} 
          style={styles.scrollImage} 
          resizeMode="cover"
        />
        <Image 
          source={require('./assets/Anh4.jpeg')} 
          style={styles.scrollImage} 
          resizeMode="cover"
        />
        <Image 
          source={require('./assets/Anh5.jpeg')} 
          style={styles.scrollImage} 
          resizeMode="cover"
        />
      </ScrollView>

      {renderTabContent()}
    </SafeAreaView>
  );
}

const ProductItem = ({ title, price, image, link }) => {
  return (
    <TouchableOpacity 
      style={styles.productItem}
      onPress={() => handleProductPress(link)}
    >
      <Image 
        source={image} 
        style={styles.productImage} 
        resizeMode="cover"
      />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    fontSize: 24,
    color: '#666',
  },
  headerTitle: {
    marginLeft: -150,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    padding: 5,
  },
  cartIcon: {
    fontSize: 22,
    color: '#c62828',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#c62828',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
  },
  activeTabText: {
    color: '#c62828',
    fontWeight: '500',
  },
  imageScrollContainer: {
    maxHeight: 150,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  scrollImage: {
    width: 150,
    height: 500,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  productItem: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: '1%',
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#c62828',
    fontWeight: 'bold',
  },
});