## Events Backend Project

## Installation Instructions

1. Clone the repository: `git clone https://github.com/AliSubhani1/event-management-backend.git`
2. Navigate to the project directory: `cd event-management-backend`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm run serve`
2. Open your browser and visit `http://localhost:3004` to view the website.

## Project Structure:

## Models

- This project contains a models folder where all schemas will be defined.
- For now events schema was required so all of its details can be found in this folder.

## Server File

- I have a main server.js file, in which express server is created.
- This file contaisn all CRUD APIs related to events which are also being used in the frontend project.
- I have used the cors package to avoid the cors error on frontend when these APIs are used there.

## Backend Development

- I have used AWS EC2 for backend deployment.
- I have installed an SSL certificate for generating secure https link and deployed the code on a custom domain.
