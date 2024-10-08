/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AnimatedCircles from './components/AnimatedCircles';
import ProgressBar from 'react-native-progress/Bar';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentDate, setCurrentDate] = useState('');
  const [currentDatePlusOneMonth, setCurrentDatePlusOneMonth] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [timer, setTimer] = useState(0);
  const minutesTimer = Math.floor(timer / 60);
  const minutesProgress = minutesTimer / 60;
  console.log(minutesProgress);
  const seconds = timer % 60;

  useEffect(() => {
    //test2
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    const dayMinusOne = String(today.getDate() - 1).padStart(2, '0');
    const monthPlusOne = String(today.getMonth() + 2).padStart(2, '0');
    const formattedDateOneMonthLater = `${dayMinusOne}/${monthPlusOne}/${year}`;
    const hours = today.getHours();
    const hoursString = String(hours).padStart(2, '0');
    const minutes = today.getMinutes();
    const minutesString = String(minutes).padStart(2, '0');
    setCurrentDate(formattedDate);
    setCurrentDatePlusOneMonth(formattedDateOneMonthLater);
    setHours(hoursString);
    setMinutes(minutesString);

    const intervalId = setInterval(() => {
      // Mettre à jour le temps en ajoutant 1 seconde à la valeur précédente
      setTimer(prevTime => prevTime + 1);
    }, 1000); // Mettre à jour chaque seconde (1000 ms)

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <ImageBackground
          style={{height: '100%'}}
          resizeMode="cover"
          source={require('./assets/lannion.jpg')}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                marginTop: 5,
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 25,
                  padding: 10,
                  marginTop: 20,
                }}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 25,
                  padding: 5,
                  marginTop: 20,
                }}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('./assets/qrcode.png')}
                />
              </View>
            </View>
            <View>
              <AnimatedCircles />
              <Image
                style={{width: 175, height: 175}}
                source={require('./assets/tilt.png')}></Image>
            </View>
            <View style={{width: '90%'}}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 15,
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    marginLeft: 10,
                    color: 'black',
                  }}>
                  Carte Mensuelle
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    color: 'black',
                    fontSize: 15,
                  }}>
                  Période de validité
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontWeight: '900',
                        fontSize: 22,
                        marginRight: 60,
                        color: 'black',
                      }}>
                      {currentDate}
                    </Text>
                    <Text
                      style={{fontSize: 17, marginRight: 60, color: 'black'}}>
                      06:32
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 22,
                        fontWeight: 'bold',
                      }}>
                      {currentDatePlusOneMonth}
                    </Text>
                    <Text style={{fontSize: 17, color: 'black'}}>23:59</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 10,
                  borderRadius: 15,
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                  <Image
                    style={{width: 50, height: 50}}
                    source={require('./assets/controlleur.png')}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    Informations de contrôle
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 20,
                    }}>
                    {currentDate}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      fontSize: 20,
                    }}>
                    {hours}:{minutes}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 19,
                    }}>
                    176-61211151BDZQD41441
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 40,
                  }}>
                  <Text style={{color: '#32CD32', fontSize: 17}}>
                    {minutesTimer.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>
              <View style={{marginBottom: 30}}>
                <ProgressBar
                  progress={minutesProgress}
                  width={null}
                  color={'#32CD32'}
                  unfilledColor={'#000'}
                  borderColor={'#000'}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

export default App;
