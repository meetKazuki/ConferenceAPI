# mylaw-conference

Backend Challenge for MyLaw (MyLaw Conference is a RESTful API for talks at a conference)


## Project Pipeline

- [Hosted API](https://mylaw-staging.herokuapp.com/)


## Technologies Used

* NodeJS
* ExpressJS


## Getting Started

### Prerequisites

Ensure that you have the following installed on your local machine:

- [NodeJS](https://nodejs.org/en/download)
- [Git](https://git-scm.com/downloads)

### Running locally

- Make sure you have *NodeJS*, *Git* installed.
- Clone this repository

 ```bash
    - git clone https://github.com/meetKazuki/mylaw-conference.git
    - cd products
    - npm install
  ```
- Create/configure .env environment with your credentials. A sample .env.example file has been provided to get you started.
  Make a duplicate of .env.example and rename to .env, then configure your credentials.
- Run `npm run start:dev` to spin up the server and watch for changes.


## HTTP Requests

All API requests are made by sending a secure HTTPS request using one of the following methods, depending on the action being taken:

- `POST` Create a resource
- `GET` Get a resource or list of resources
- `PATCH` Update a resource
- `DELETE` Delete a resource

For `POST` requests, the body of your request may include a JSON payload.

### HTTP Response Codes

Each response will be returned with one of the following HTTP status codes:

- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed)
- `404` `Not Found` An attempt was made to access a resource that does not exist in the API

### API ENDPOINTS

#### API Routes

| URI                                                     | HTTP Method | Description                               |
| ------------------------------------------------------- | ----------- | ----------------------------------------- |
| <code>/talks</code>                                     | `GET`       | Fetch all talks                           |
| <code>/talks/{talkId}                                   | `GET`       | Fetch a talk by ID                        |
| <code>/talks</code>                                     | `POST`      | Create a new talk                         |
| <code>/talks/{talkId}/attendee</code>                   | `POST`      | Add attendee to talk                      |
| <code>/attendees</code>                                 | `POST`      | Create a new attendee                     |
| <code>/talks/{talkId}                                   | `PATCH`     | Update a talk by its ID                   |
| <code>/talks/{talkId}                                   | `DELETE`    | Delete a talk by its ID                   |
