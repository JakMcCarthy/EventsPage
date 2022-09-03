# Around Town
### Around Town will make attending your favorite events much easier. Make local events of your own for the local community to attend or browse and see what upcoming events are coming near you.

## Installation/ Usage
  * Deployed application via Heroku https://damp-cove-99714.herokuapp.com/
  * Git Hub Repo: https://github.com/JakMcCarthy/EventsPage.git

## Features
    * Create events with name, time and description 
    * Browse for posted local events

## Future Enhancements
    * Implent ticket system for online purchase using stripe
    * Add ability to attend events

## Contact/Questions
This project was a collaboration of the following people: 
  * GitHub: https://github.com/JakMcCarthy
  * GitHub: https://github.com/Smccarthy17
  * GitHub: https://github.com/rpethick0207
  * GitHub: https://github.com/AMHaag/
  * GitHub: https://github.com/negativeh0ll0w
  * GitHub: https://github.com/Chrisp1993

##Deployment

# API and DB Guide

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
| eventTitle     | string           | yes       | min. 1 chars, max 60 chars                       |
| eventText      | string           | yes       | min 5 chars, max 280 chars                      |
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
