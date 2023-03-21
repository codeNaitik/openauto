# DOCUMENTATION

In the project directory:

## Tech stack: React, node, express, mongodb

After fork--> pre install requirement: 

mongodb --> for database, prefer to install in on own machine

Run below command to install all necessary things:

npm install express body-parser mongodb cors axios 


### file structuring

components => having all files of frontend and backend

        |__footer.jsx
        |__navbar.jsx
        |__work.jsx
        |__backend.jsx
        |__model
                |__user.js -> it create mongodb schema of (email, name)


style=> file conductin all css styling

    |__footer.css
    |__navbar.css
    |__work.css

pics=> Have all required images to used in project


#Icons: font-awsome 
font-awesome=> go in react[https://fontawesome.com/icons]
{fa<-name of icon->}

eg: faTwitter

#import that icon name in top 

import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
    


Run project using:


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


