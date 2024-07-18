# Mini_Wagering_GameApp_Using_React_Native_Expo
A mini wagering game app with multiple events to choose from, a firebase login authentication system, and a step tracking game preset.

---------------------------------------------------------------------------------------------------------------------------------------
Here's the list of components used:

- Firebase authentication
- React Native Expo
- Android SDK
- JDK
- Typsescript code
- Expo sensor Libraries
- React router/navigation

---------------------------------------------------------------------------------------------------------------------------------------

Here's a description on the functionalities:

- Firebase is used for authentication (SignIn/SignUP) functionalities.
- React Native Expo is used for the entire project code.
- If you login with an account that isn't created, an alert shows up saying that authentication is failed. Whereas if you login after signing up, the user information is stored up in the firebase dataset for further login.
- Once inside the application, there is a list of events/games, that players around the world could join using credits, redeemable to real life cash or bitcoin.
- Choose the first event "The March" which puts players on leaderboard for the most amount of steps walked. The winner gets 2500 credits that can be redeemed later on.
- **NOTE** OTHER EVENTS ARE W.I.P AT THE MOMENT.
- Pedometer functionality is added using expo sensors library, with calories burned and distance walked being a certain calculation from the data obtained from the device's sensors.
