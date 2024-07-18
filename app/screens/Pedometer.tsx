import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Platform, PermissionsAndroid, TouchableOpacity } from 'react-native';
import { Pedometer } from 'expo-sensors';

const PedometerComponent: React.FC = () => {
    const [isPedometerAvailable, setIsPedometerAvailable] = useState('checking');
    const [stepCount, setStepCount] = useState(0);
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [distanceTravelled, setDistanceTravelled] = useState(0);
    const [isTracking, setIsTracking] = useState(true);
    const [subscription, setSubscription] = useState<any>(null); // To store the subscription instance

    useEffect(() => {
        const requestPermissions = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
                        {
                            title: 'Activity Recognition Permission',
                            message: 'This app needs access to your activity recognition to track steps.',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        }
                    );
                    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('Activity recognition permission denied');
                        return;
                    }
                } catch (err) {
                    console.warn(err);
                    return;
                }
            }
        };

        const startPedometer = async () => {
            Pedometer.isAvailableAsync().then(
                result => {
                    setIsPedometerAvailable(result ? 'available' : 'not available');
                    if (result) {
                        const newSubscription = Pedometer.watchStepCount(result => {
                            if (isTracking) {
                                setStepCount(result.steps);
                                setCaloriesBurned(result.steps * 0.04);
                                setDistanceTravelled(result.steps * 0.762 / 1000); // Convert to kilometers
                                console.log(`Steps: ${result.steps}, Calories: ${result.steps * 0.04}, Distance: ${result.steps * 0.762 / 1000} km`);
                            }
                        });

                        setSubscription(newSubscription);
                    }
                },
                error => {
                    console.log(error);
                    setIsPedometerAvailable('error');
                }
            );
        };

        requestPermissions();
        startPedometer();

        return () => {
            if (subscription) {
                subscription.remove();
                setSubscription(null);
            }
        };
    }, [isTracking]);

    const handleStopStart = () => {
        setIsTracking(prev => !prev);
    };

    const handleReset = () => {
        setStepCount(0);
        setCaloriesBurned(0);
        setDistanceTravelled(0);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.heading}>Tracking Started...</Text>
                <Text style={styles.paragraph}>
                    Pedometer is {isPedometerAvailable}
                </Text>
                <Text style={styles.paragraph}>Steps Walked: {stepCount}</Text>
                <Text style={styles.paragraph}>Calories Burned: {caloriesBurned.toFixed(2)}</Text>
                <Text style={styles.paragraph}>Distance Travelled: {distanceTravelled.toFixed(2)} km</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleStopStart}>
                        <Text style={styles.buttonText}>{isTracking ? 'Stop' : 'Start'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleReset}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image
                style={styles.image}
                source={{ uri: 'https://i.ibb.co/xhvsBbJ/Fractal-Robot-Construction.jpg' }}
            />
            <Text style={styles.paragraph}>
                Remember... DO NOT CHEAT!!
            </Text>
            <Text style={styles.paragraph}>
                Your progress will be verified after event completion.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        width: '90%',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        alignItems: 'center',
        marginBottom: 27,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 48,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginVertical: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 72,
    },
    button: {
        backgroundColor: '#800080',
        padding: 10,
        borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default PedometerComponent;
