import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { Pedometer } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BACKGROUND_STEP_TASK = 'BACKGROUND_STEP_TASK';

TaskManager.defineTask(BACKGROUND_STEP_TASK, async () => {
    try {
        const stepData = await Pedometer.getStepCountAsync(
            new Date(Date.now() - 60000), // last minute
            new Date()
        );

        // Retrieve saved steps from AsyncStorage
        const savedSteps = await AsyncStorage.getItem('stepCount');
        const totalSteps = (savedSteps ? Number(savedSteps) : 0) + stepData.steps;

        // Save steps to AsyncStorage
        await AsyncStorage.setItem('stepCount', totalSteps.toString());

        return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
        console.error(error);
        return BackgroundFetch.BackgroundFetchResult.Failed;
    }
});
