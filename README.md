# Habit-Tracker-App
Full Stack Habit Tracker using React Native and MongoDB. 
api Folder:
This folder likely contains backend-related code.
It includes models, routes, and logic for handling API requests.
Backend services, database connections are here.

app Folder:
The app folder is typically associated with frontend development.
It contains files related to the user interface (UI) and layout.
JavaScript files, stylesheets, and components for rendering the UI are here.

Dependencies :-
npm install --global yarn
npm expo install expo-router react-native-safe-area context react-native-screens expo-linking expo-constants expo-status-bar
yarn add cors mongoose nodemon express body-parser
yarn add axios

set up entry point in package.json

add scheme of app in app.json ("scheme":"habit-app")

make changes in babel (add plugins for expo router)

index.js represents home directory

MongoDB -> create organization -> create project -> create deployment -> create user

create a package.json file for api folder
and a backed code file -> index,js inside api folder

connecting the app with mongoDB -> add url from connect option in website -> mongodb for vs code -> .connect() insert with your password

Designing Homescreen
inside app -> index.js redirects to homepage (i.e. : home -> index.js) 

import icons from expo.icons.fy : to add icons on top part of homescreen

conditional statement applied for on press (pressable buttons) to see colors for selected tab

making + as onpress button -> move to create page to design create screen , add icons

api folder -> model folder -> habit.js -> 'create endpoints to add habits in mongoDB backend'
Adding things required for the habit schema
export the required value 

api->models->node_modules->index.js to create endpoint

Working on frontend to display saved habit
create.js -> working on to show a + sign on selected color box

Fetching created habits from backend and displaying it over homescreen
