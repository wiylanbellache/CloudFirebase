# ESGI - Cloud course - Firebase Node.js app

To do this exercise, you must read carefully the given documentations and rules.

## Rules

- Create a new Firebase project
- Fix authentication by using Firebase Authentication
    - Fix `/auth` POST route by signing in with username and password
    - Fix `/logout` GET route by signing out from session
    - Fix `/` GET route by filling in the `user` parameter with current username
    - Fix middleware to ensure proper Firebase Authentication session follow-up
- Fix articles listing by using Firebase Firestore
    - Create a Firestore collection named `articles`
    - Add a collection document with the following fields:
        - `title` as `string`
        - `content` as `string`
        - `author` as `string`
        - `date` as `timestamp`
    - Fix `/articles` GET route by retrieving articles from the `articles` collection
- Fix gallery by using Firebase Storage
    - Create a Storage bucket
    - Add an `images` folder to the bucket
    - Fix `/gallery` GET route by retrieving `images` folder files from the bucket
    - Fix `/gallery` POST route by uploading form `file` to the bucket

## Resources

- Documentation:
    - https://firebase.google.com/docs/web/setup
    - https://firebase.google.com/docs/reference/node
    - https://firebase.google.com/docs/reference/admin/node