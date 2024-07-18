import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    List: undefined;
    Details: { title: string };
};

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

interface CardProps {
    title: string;
    content: string;
    onPress: () => void;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, content, onPress, imageUrl }) => {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardContent}>{content}</Text>
                <Button title="Join event" onPress={onPress} color="#800080" />
            </View>
            <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        </View>
    );
};

const List: React.FC = () => {
    const navigation = useNavigation<ListScreenNavigationProp>();

    const cards = [
        { title: 'The March', content: 'Player to walk the furthest on foot, wins!', imageUrl: 'https://i.ibb.co/xhvsBbJ/Fractal-Robot-Construction.jpg' },
        { title: 'Mecha Godzilla', content: 'The best godzilla Ripoff!', imageUrl: 'https://i.ibb.co/xhvsBbJ/Fractal-Robot-Construction.jpg' },
        { title: 'Youtube fever dream', content: 'Player with the most watchtime under a given timeframe, wins...', imageUrl: 'https://i.ibb.co/xhvsBbJ/Fractal-Robot-Construction.jpg' },
        { title: 'Pokemon GO', content: "Catch em' all!!", imageUrl: 'https://i.ibb.co/xhvsBbJ/Fractal-Robot-Construction.jpg' },
        { title: 'Pizza time!', content: 'Show your Pizza skills by making the best one!', imageUrl: 'https://i.ibb.co/xhvsBbJ/Fractal-Robot-Construction.jpg' },
    ];

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        content={card.content}
                        imageUrl={card.imageUrl}
                        onPress={() => navigation.navigate('Details', { title: card.title })}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#f9f9f9',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 20,
        marginVertical: 10,
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContent: {
        fontSize: 14,
        marginVertical: 10,
    },
    cardImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginLeft: 8,
    },
});

export default List;
