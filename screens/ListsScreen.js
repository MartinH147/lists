import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, Alert, ScrollView, Animated, useWindowDimensions, ImageBackground } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ListsScreen({navigation, route}) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  const images = new Array(2).fill('https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.jpg')

  let listType = route.params.type
  let listMode = 'view'
  let list = route.params.items

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.listImage}
          source={{ uri: 'https://picsum.photos/200/300' }} />
      </View>
      <View style={styles.header1}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Text style={styles.backButton}> Lists </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={null}>
            <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
          </TouchableOpacity>  
        </View>
      </View>
      <ScrollView style={styles.list}>
        <View style={styles.header2}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.description}>{route.params.description}</Text>
        </View>
        { listType == 'wishlist' & listMode == 'view' ? 
          <View>
            {list.map((items, i) => (
                <View key={i} style={styles.listItemSpace}>
                  <View style={styles.listItemBox}>
                    <Image style={styles.listItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
                    <View style={styles.listTextBox}>            
                      <Text style={styles.listItemName}>{items.item}</Text>
                      <Text style={styles.listItemCompany}>{items.company}</Text>
                    </View>
                    <Text style={styles.listItemPrice}>{items.price}</Text>
                  </View>         
                </View> ))}
          </View>  
        : null }
        { listType == 'wishlist' & listMode == 'edit' ?         
            <View style={styles.listEditItemBox}>
              <View style={styles.listEditDelete}>
                <Image style={styles.cross} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828778.png' }}/>
              </View>
              <Image style={styles.listItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
              <View style={styles.listTextBox}>            
                <Text style={styles.listItemName}> Item </Text>
                <Text style={styles.listItemCompany}> Company </Text>
              </View>
              <Text style={styles.listEditItemPrice}> $$$ </Text>
              <View style={styles.listEditMove}/>
            </View> 
        : null }
        { listType == 'comparison' ?         
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([ { nativeEvent: {contentOffset: {x: scrollX}}} ])}
            scrollEventThrottle={1} >
            {images.map((items, imageIndex) => {
              return (
                  <View style={{ width: windowWidth, height: 390 }} key={imageIndex}>
                    <View style={styles.card}>
                      <ImageBackground source={{ uri: items }} style={styles.comparisonImage}>
                        <View style={styles.textContainer}>
                          <Text style={styles.infoText}>
                            {"Image - " + imageIndex}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>  
                  </View>
              );
            })}
          </ScrollView>
          <View style={styles.indicatorContainer}>
          {images.map((image, imageIndex) => {
            const width = scrollX.interpolate({
              inputRange: [
                windowWidth * (imageIndex - 1),
                windowWidth * imageIndex,
                windowWidth * (imageIndex + 1)
              ],
              outputRange: [8, 16, 8],
              extrapolate: "clamp"
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
      </View> 
        : null }
        { listType == 'ranking' ?         
        <View style={styles.rankItemBox}>
          <Text style={styles.rankNumber}> 1 </Text>
          <Image style={styles.rankItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
          <View style={styles.rankTextBox}>            
            <Text style={styles.rankItemName}>{route.params.items.item}</Text>
          </View>
        </View> 
        : null }
      </ScrollView>
      <View style={styles.footerWrapper}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('web')}>
          <Image style={styles.plus} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/17/17128.png' }} />
        </TouchableOpacity>    
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

  if (listType == 'wishlist' & listMode == 'view') {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.listImage}
          source={{ uri: 'https://picsum.photos/200/300' }} />
      </View>
      <View style={styles.header1}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <Text style={styles.backButton}> Lists </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
          </TouchableOpacity>  
        </View>
      </View>
      <ScrollView style={styles.list}>
        <View style={styles.header2}>
          <Text style={styles.title}>{lists.title}</Text>
          <Text style={styles.description}>{list.description}</Text>
        </View>
        <View style={styles.listItemBox}>
          <Image style={styles.listItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
          <View style={styles.listTextBox}>            
            <Text style={styles.listItemName}> Item </Text>
            <Text style={styles.listItemCompany}> Company </Text>
          </View>
          <Text style={styles.listItemPrice}> $$$ </Text>
        </View>
      </ScrollView>
      <View style={styles.footerWrapper}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('web')}>
          <Image style={styles.plus} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/3018/premium/3018447.png?token=exp=1649479759~hmac=e5594a5ab77c16362e00ebd099e50a07' }} />
        </TouchableOpacity>    
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
  }
  if (listType == 'wishlist' & listMode == 'edit') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.listImage}
            source={{ uri: 'https://picsum.photos/200/300' }} />
            <Image
              style={styles.editIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png' }} />
        </View>
        <View style={styles.header1}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text style={styles.backButton}> Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
            </TouchableOpacity>  
          </View>
        </View>
        <ScrollView style={styles.list}>
          <View style={styles.header2}>
            <Text style={styles.title}> List Title </Text>
            <Text style={styles.description}> List description </Text>
          </View>
          <View style={styles.listEditItemBox}>
            <View style={styles.listEditDelete}>
              <Image style={styles.cross} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2976/premium/2976286.png?token=exp=1649479273~hmac=bcc933e47830d33ddef5b096a40e3d9a' }}/>
            </View>
            <Image style={styles.listItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
            <View style={styles.listTextBox}>            
              <Text style={styles.listItemName}> Item </Text>
              <Text style={styles.listItemCompany}> Company </Text>
            </View>
            <Text style={styles.listEditItemPrice}> $$$ </Text>
            <View style={styles.listEditMove}/>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  if (listType == 'ranking' & listMode == 'view') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.listImage}
            source={{ uri: 'https://picsum.photos/200/300' }} />
        </View>
        <View style={styles.header1}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text style={styles.backButton}> Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
            </TouchableOpacity>  
          </View>
        </View>
        <ScrollView style={styles.list}>
          <View style={styles.header2}>
            <Text style={styles.title}> List Title </Text>
            <Text style={styles.description}> List description </Text>
          </View>
          <View style={styles.rankItemBox}>
            <Text style={styles.rankNumber}> 1 </Text>
            <Image style={styles.rankItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
            <View style={styles.rankTextBox}>            
              <Text style={styles.rankItemName}> Item </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerWrapper}>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('web')}>
            <Image style={styles.plus} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/3018/premium/3018447.png?token=exp=1649479759~hmac=e5594a5ab77c16362e00ebd099e50a07' }} />
          </TouchableOpacity> 
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  if (listType == 'ranking' & listMode == 'edit') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.listImage}
            source={{ uri: 'https://picsum.photos/200/300' }} />
          <Image
            style={styles.editIcon}
            source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2985/premium/2985043.png?token=exp=1646902663~hmac=dd4c1e396b417008fcb1e66c4248a953' }} />
        </View>
        <View style={styles.header1}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text style={styles.backButton}> Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
            </TouchableOpacity>  
          </View>
        </View>
        <ScrollView style={styles.list}>
          <View style={styles.header2}>
            <Text style={styles.title}> List Title </Text>
            <Text style={styles.description}> List description </Text>
          </View>
          <View style={styles.rankEditItemBox}>
            <View style={styles.rankEditDelete}>
              <Image style={styles.cross} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/2976/premium/2976286.png?token=exp=1649479273~hmac=bcc933e47830d33ddef5b096a40e3d9a' }}/>
            </View>
            <Text style={styles.rankNumber}> 1 </Text>
            <Image style={styles.rankItemImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
            <View style={styles.rankTextBox}>            
              <Text style={styles.rankItemName}> Item </Text>
            </View> 
            <View style={styles.rankEditMove}/>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  if (listType == 'test') {
    
  }
}

const styles = StyleSheet.create({
  testButton: {
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  header1: {
    width: '100%',
    height: 63,
    bottom: 0,
    backgroundColor: '#2980b9',
    zIndex: 2,
    elevation: 2,
  },
  buttonContainer: {
    height: 63,
    width: '90%',
    zIndex: 3,
    elevation: 3,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  backButton: {
    zIndex: 3,
    elevation: 3,
    position: 'relative',
    color: 'white',
    fontSize: 20,
  },
  threeDots: {
    height: 14,
    width: 52,
    zIndex: 3,
    elevation: 3,
    position: 'relative',
  },
  header2: {
    width: '100%',
    height: 161,
    backgroundColor: '#3498db',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 100,
    shadowRadius: 10,
    zIndex: 1,
    elevation: 1,
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    zIndex: 3,
    elevation: 3,
    color: 'white',
    fontSize: 40,
  },
  description: {
    zIndex: 3,
    elevation: 3,
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    height: 80,
    width: 80,
    backgroundColor: '#05be70',
    borderRadius: 40,
    position: 'absolute',
    bottom: 26,
    right: 21,
    zIndex: 1,
    elevation: 1,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
  },
  plus: {
    height: 35,
    width: 35,
    zIndex: 4,
    elevation: 4,
    backgroundColor: '#00000000',
    alignSelf: 'center',
    top: 23,
  },
  listImage: {
    height: 80,
    width: 80,
    position: 'absolute',
    alignSelf: 'center',
    top: 14,
    borderRadius: 5,
  },
  headerWrapper: {
    zIndex: 3,
    elevation: 3,
  },
  list: {
    flexGrow: 1,
  },
  footerWrapper: {
    height: 0,
    flexGrow: 0,
    position: 'relative',
  },
  editIcon: {
    height: 45,
    width: 45,
    zIndex: 5,
    elevation: 5,
    position: 'absolute',
    backgroundColor: '#00000000',
    alignSelf: 'center',  
    top: 33.5,
  },
  cross: {
    height: 21,
    width: 21,
    alignSelf: 'center',
    top: 7,
  },
  listEditDelete: {
    width: 36,
    height: 36,
    backgroundColor: '#E74C3C',
    borderRadius: 5,
    alignSelf: 'center',
    right: 15,
  },
  listEditMove: {
    width: 36,
    height: 36,
    backgroundColor: '#707070',
    borderRadius: 5,
    alignSelf: 'center',
    left: 15,
  },
  rankEditDelete: {
    width: 36,
    height: 36,
    backgroundColor: '#E74C3C',
    borderRadius: 5,
    alignSelf: 'center',
    right: 45,
  },
  rankEditMove: {
    width: 36,
    height: 36,
    backgroundColor: '#707070',
    borderRadius: 5,
    alignSelf: 'center',
    left: 45,
  },
  listItemSpace: {
    width: 308,
    height: 84,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 28,
  },
  listItemBox: {
    position: 'relative',
    width: 308,
    height: 64,
    backgroundColor: '#F0F0F000',
    zIndex: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'space-between',
    alignSelf: 'center',
  },
  listItemImage: {
    height: 64,
    width: 64,
    borderRadius: 5,
    zIndex: 2,
    elevation: 2,
  },
  listTextBox: {
    height: 64,
    width: 100,
    justifyContent: 'center',
  },
  listItemName: {
    fontSize: 20,
    left: 5,
  },
  listItemCompany: {
    fontSize: 20,
    left: 5,
  },
  listItemPrice: {
    fontSize: 30,
    alignSelf: 'center',
    position: 'relative',
    left: 75,
  },
  listEditItemBox: {
    position: 'relative',
    width: '100%',
    height: 64,
    backgroundColor: '#F0F0F000',
    zIndex: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 28,
  },
  listEditItemPrice: {
    fontSize: 30,
    alignSelf: 'center',
    position: 'relative',
    left: 15,
  },


  scrollContainer: {
    height: 410,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  card: {
    flex: 1,
    height: '100%',
    width: 350,
    backgroundColor: 'red',
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: 'center',
    top: 10,
  },
  comparisonImage: {
    height: '50%',
    width: '100%',
    borderRadius: 10,
    alignSelf: 'flex-start',
    top: 10,
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },


  rankItemBox: {
    position: 'relative',
    width: 308,
    height: 64,
    backgroundColor: '#F0F0F000',
    zIndex: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 28,
  },
  rankItemImage: {
    height: 64,
    width: 64,
    borderRadius: 5,
    zIndex: 2,
    elevation: 2,
  },
  rankText: {
    height: 64,
    width: 100,
    justifyContent: 'center',
  },
  rankItemName: {
    fontSize: 20,
    left: 5,
  },
  rankNumber: {
    fontSize: 70,
    color: '#707070',
    alignSelf: 'center',
    bottom: 8,
    right: 45,
  },
  rankEditItemBox: {
    position: 'relative',
    width: 308,
    height: 64,
    backgroundColor: '#F0F0F000',
    zIndex: 2,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 28,
  },
});