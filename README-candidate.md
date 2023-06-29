# Satellite Tracking App

Satellite Tracking App is a platform that allows users to track satellites orbiting the Earth. It provides the latest position updates for satellites and displays them on an earth map. This document provides an overview of the project, including setup instructions and important considerations.

## Features

- View all available satellites in a sidebar list and on the map.
- Add, edit, and delete satellites with a popup form.
- Select a satellite to highlight it in the list and center the map on its location.
- Search for satellites by ID, name, or owner.
- Use React-Redux for data management.
- Automated tests for at least one pertinent functionality.
- Three components: `<Map />`, `<List />`, and `<SearchBar />`.

## Technologies Used

- Frontend: React, react-map-gl, react-redux, styled-components
- Backend: Java, Docker, PostgreSQL
- Testing: JUnit, Mockito, Jest

## Frontend Set up

1. Navigate the frontend diiectory\
   `cd frontend`
2. Install the dependencies using `npm`\
   `npm install`

### Available Scripts
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Backend
- create a Dockerfile and setup a server to run your Java code that implements the needed APIs
- define a docker-compose file to easily manage all the run settings and possible dependencies (like a db instance)
