# Simple React Application with MUI and Framer Motion

This project is a simple React application that demonstrates basic concepts in React, Material UI (MUI), and Framer Motion for animations. The application includes a toggleable light/dark theme, dynamic content from an API, a responsive layout with grid components, and animated SVG elements.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

This React application is designed to showcase core concepts in modern web development. It provides a clean, responsive UI using Material UI, and includes animations with Framer Motion. Users can toggle between light and dark themes, and view a dynamically loaded user list.

## Features

- **Light/Dark Theme Toggle**: Change between light and dark modes with a button click.
- **Animated Components**: Using Framer Motion for smooth component transitions.
- **Dynamic Data Fetching**: Pulls user data from an external API (JSONPlaceholder).
- **Responsive Grid Layout**: Built with MUI's Grid system to adapt to various screen sizes.
- **SVG Animations**: Custom animated SVG graphics rendered using Framer Motion.

## Installation

To set up and run this application locally, follow these steps:

1. Clone this repository:
    ```bash
    git clone https://github.com/A1Smirnov/glab-32021.git
    cd simple-react-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser to [http://localhost:3000](http://localhost:3000) to view the app.

## Usage

- **Theme Toggle**: Use the "Toggle Theme" button to switch between light and dark themes.
- **Animated Content**: Experience smooth transitions and animations as you interact with the components.
- **User List**: View a dynamically loaded list of users fetched from an external API.

## Project Structure

Here's an overview of the key files and directories in this project:

```
simple-react-app/
├── public/                 # Public assets and files
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Header component with a title and icon button
│   │   ├── Content.js      # Animated content component
│   │   └── Footer.js       # Footer component with text
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React app
│   └── App.css             # Global styles
└── README.md               # Project documentation
```

### Components

- **Header**: Displays the app title and a button with an icon.
- **Content**: A reusable component with animated SVG and text that can be styled via props.
- **Footer**: A simple footer with informational text.

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Material UI (MUI)**: Component library for a responsive, accessible UI.
- **Framer Motion**: Animation library for smooth, declarative animations.
- **JSONPlaceholder API**: External API used for fetching example data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
