# Around Town
### Around Town will make attending your favorite events much easier. Make local events of your own for the local community to attend or browse and see what upcoming events are coming near you.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Aaron's API and DB Guide

Contained below are all of the available routes and the data they're expecting. I will also put a quick guide to the objects and how they're set up.

## User
### User model
| Property            | Type    | Required? | Unique? | minLength | maxLength |
|---------------------|---------|-----------|---------|-----------|-----------|
| username            | string  | yes       | yes     | 6         | n/a       |
| password            | string  | yes       | no      | 8         | n/a       |
| email               | string  | yes       | yes     | n/a       | n/a       |
| eventsCreated       | array   | no        | no      | n/a       | n/a       |
| eventsCreatedCount  | virtual | automatic | no      | n/a       | n/a       |
| eventsAttended      | array   | no        | no      | n/a       | n/a       |
| eventsAttendedCount | virtual | automatic | no      | n/a       | n/a       |

### User routes
| Route                        | Method | Description              | Expected Data                                                       |
|------------------------------|--------|--------------------------|---------------------------------------------------------------------|
| /api/user                    | GET    | return all users         | n/a                                                                 |
|                              | POST   | creates a new user       | `{"username:"amhaag","email":"abc@xyz.com","password":"min8chars"}` |
| /api/user/:id                | GET    | returns specific user    | n/a                                                                 |
|                              | PUT    | updates a user           | same as POST [DO NOT UPDATE PASSWORD ON THIS ROUTE]                 |
|                              | DELETE | deletes a user           | n/a                                                                 |
| /api/user/:id/updatepassword | POST   | updates a users password | `{"password":"newpassword"}`                                        |

*Aaron's note* there's a little quirk to Mongoose that makes it so you can't easily hash an attribute on an existing entry, so in order to get around this I had create a seperate that would hash the password before updating it in the DB. This is why updating a password has it's own route. 

## Event
### Event model
| Property       | Type             | Required? | details                                          |
|----------------|------------------|-----------|--------------------------------------------------|
| eventTitle     | string           | yes       | min. 5 chars, max 60 chars                       |
| eventText      | string           | yes       | min 15 chars, max 280 chars                      |
| eventTime      | string           | yes       | written in ISO8601 format (YYYY-MM-DDTHH:mm:ssZ) |
| createdAt      | date             | automatic | written in ISO8601 format (YYYY-MM-DDTHH:mm:ssZ) |
| creator        | User             | yes       | must enter in a user id                          |
| attendees      | array (of users) | no        | must enter in a user id                          |
| attendeesCount | virtual          | automatic | n/a                                              |
| ticketPrice    | number           | yes       | maximum set at 100                               |


### Event routes
| Route          | Method | Description            | Expected Data |   |   |
|----------------|--------|------------------------|---------------|---|---|
| /api/event     | GET    | return all events      | n/a           |   |   |
|                | POST   | creates a new event    | see below     |   |   |
| /api/event/:id | GET    | returns specific event | n/a           |   |   |
|                | PUT    | updates an event       | same as POST  |   |   |
|                | DELETE | deletes an event       | n/a           |   |   |

Event data expected `{"eventTitle":"5-60 characters", "eventText":"15-280 characters", "creator":"amhaag", "eventTime":"1661364268620" }`