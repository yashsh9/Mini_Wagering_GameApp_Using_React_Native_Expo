import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    List: undefined;
    Details: { title: string };
    Pedometer: undefined;
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

const Details: React.FC = () => {
    const route = useRoute<DetailsScreenRouteProp>();
    const navigation = useNavigation<DetailsScreenNavigationProp>();
    const { title } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Event Description</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.details}>Step into the ultimate fitness challenge with The March! Compete with players from around the world in this exciting and engaging game where the goal is simple: walk the most steps and cover the greatest distance while burning calories. Track your progress and strive for the top spot on the leaderboard, all while enjoying the benefits of physical activity. No shortcuts or cheating—every step counts in this honest competition. Lace up your shoes, hit the pavement, and start your journey to victory in The March!</Text>
            <Text style={styles.price}>Time limit: 12 hours</Text>
            <Text style={styles.price}>Minimum Wager: 500 credits</Text>
            <Text style={styles.price}>Winner: 2000 credits</Text>
            <Text style={styles.price}>Creator: Yash Shukla</Text>

            <Button title="Join" onPress={() => navigation.navigate('Pedometer')} color="#800080" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    details: {
        fontSize: 16,
        marginBottom: 16,
    },
    price: {
        fontSize: 18,
        marginBottom: 32,
    },
});

export default Details;
