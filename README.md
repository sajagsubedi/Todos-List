# Simple Todo List App with React Js

This is a straightforward todo list application built using React.js and Vite. The app allows users to add and manage their todos in a user-friendly interface. It features local storage for persisting todos, a confirmation dialog for clearing todos, a toggle switch for light/dark mode, and alerts for various actions.

## Features

- Add and manage todos with a simple and intuitive user interface.
- Todos are saved in the browser's local storage for data persistence.
- Clear all todos with a confirmation dialog, giving users the option to proceed or cancel.
- Toggle between light mode and dark mode for a personalized visual experience.
- Alerts provide feedback to users on different actions and interactions.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.

```bash
cd todo-list-app
```
3.Install all the dependencies required to start the evelopment server

```bash
npm install
```
3.Run the development server
```bash
npm run dev
```
The application will be accessible at http://localhost:5173. Open this URL in your browser to interact with the app.
## How to Use

1. On the home page, you will find an input field to enter the title of your todo and a textarea to provide a description.

2. Click the "Add" button to save your todo. It will appear in a card format just below the "Add Todo" section, displaying the title and description.

3. Click the "Clear" button to remove all todos. A confirmation dialog will pop up with options to proceed or cancel. Clicking "Yes" will clear all todos, and clicking "No" will keep them intact.

4. The navbar includes a toggle switch to switch between light mode and dark mode.

5. Alerts will appear just below the navbar to provide feedback on various actions.

6. Each todo card includes a delete button. Clicking this button will remove the corresponding todo from the list.
## Technologies Used

- React.js
- Vite
- Tailwind CSS

## Acknowledgments

This app was created as a simple demonstration of a todo list application using React and Vite. Feel free to use and modify the code as needed for your own projects.
