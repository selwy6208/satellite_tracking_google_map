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

### `npm run test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Backend Setup

1. Navigate the backend diiectory.\
   `cd backend`
2. Build and run the Docker container.\
   `sudo docker-compose up`
