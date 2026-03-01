# React + Vite Firebase Bootstrap Template and User Authorisation System

## Description

1. This is a template for quickly setting up a user authentication system in REACT using firebase.
2. This project uses React-Bootstrap as ui framework.
3. And has both a header-navbar and a side-menu populated with dummy menu items so you can quickly customise it to fit any project.
4. Sidebar Menu has one item with submenu(child menu) and fully functioning toggle to expand and contract submenu.Copy and expand this code to fit any project menu style.
5. Header navbar has typical logout button and their own menu items.
6. Each menu item points to there own page, making it easy to customise this project to your own need.
7. This project is hosted on Firebase.

## Working Demo

https://brinks-global-dev.firebaseapp.com/home<br />
Use credentials-<br />
Username:demo@demo.com
Password:demo@demo.com

## Dependencies

"bootstrap": "^5.1.3",<br />
"firebase": "^9.4.1",<br />
"firebase-tools": "^11.1.0",<br />
"react-bootstrap": "^2.0.2",<br />
"react-google-button": "^0.7.2",<br />
"react-router-dom": "^6.0.2",<br />

## HOW TO GET STARTED

1. Clone this directory.
2. <ins> ADD a .env.local file with your Firebase credentials to project:- </ins> <br />
   REACT_APP_FIREBASE_API_KEY=YOUR FIREBASE API KEY <br />
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR FIREBASE AUTH DOMAIN<br />
   REACT_APP_FIREBASE_DATABASE_URL=null<br />
   REACT_APP_FIREBASE_PROJECT_ID=YOUR FIREBASE PROJECT ID<br />
   REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR FIREBASE STORAGE BUCKET<br />
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR FIREBASE MESSAGING SENDER ID<br />
   REACT_APP_FIREBASE_APP_ID=YOUR FIREBASE APP ID<br />
   REACT_APP_FIREBASE_MEASUREMENT_ID=YOUR FIREBASE MEASUREMENT ID<br />
3. Replace the pages in "src/pages" directory with the page names for your project and change the corresponding names in the "components" files.
4. That's it!!!

# Get the main config (API key, auth domain, project id, sender id, app id, measurement id) for env file

Open Firebase Console → select your project

Click the gear icon ⚙️ → Project settings

In the General tab, scroll to Your apps

Click your Web app (</>)

If you don’t see a web app, click Add app → choose Web to register one.

In that app panel, find “SDK setup and configuration” and copy the firebaseConfig object.

## HOW TO UPDATE LATER

```
npx firebase login
```

✔ Enable Gemini in Firebase features? No
✔ Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? No

- Success! Logged in as ************@gmail.com

```
npm run build
npx firebase init hosting
npx firebase deploy --only hosting
```

✔ Are you ready to proceed? Yes
✔ What do you want to use as your public directory? dist [vite build to dist folder not public]
✔ Configure as a single-page app (rewrite all urls to /index.html)? Yes [Since its a vite project its a SPA]
✔ Set up automatic builds and deploys with GitHub? No [Firebase cli needs access to all github repositories public and private,for this to work,so better to deploy manually]
✔ File dist/index.html already exists. Overwrite? No [We want to use the index file from vite]
