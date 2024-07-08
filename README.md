# Votecast 👆🏻
VoteCast is a streamlined voting platform crafted with the MERN technology, designed to enable users to easily participate in elections and polls without complexity. Whether you're casting your vote in local elections or participating in community decisions, VoteCast ensures a seamless experience. Users can effortlessly select candidates , contributing to democratic processes with clarity and ease. 
## Features 🎯

- Register as Voter or Candidate: Users can register either as voters to participate in elections or as candidates to run for office.

- User Authentication: Secure registration and login process for voters and candidates.

- Vote Casting: Voters can log in to cast their votes for their preferred candidates in elections.

- Candidate Dashboard: Candidates have access to a dashboard where they can view their own election campaign details, including total votes received, and monitor the number of votes of each opponent.

- Vote Results: After elections close, authenticated users can view election results to see the outcome of voting in their jurisdiction.

- Security and Privacy: Each user (voter or candidate) has specific permissions: voters can only cast votes, while candidates can manage their campaign details and monitor their election progress. .

- User-Specific Access: Voters can vote atmost one time.

- User Authentication: Secure login and registration for users using Bcrypt.

## Technologies💻

## Frontend:

ReactJS: Utilized for building the frontend to ensure efficient UI rendering, interactivity, and responsiveness for voters and candidates.

CSS: Custom styling using CSS to tailor the design and layout of VoteCast according to usability requirements.

## Backend:

Node.js: Powers the backend of VoteCast, handling server-side logic and API integrations effectively.

Express: Facilitates routing and middleware management, enabling seamless communication between the frontend and backend of VoteCast.

MongoDB: Stores data related to elections, candidates, voters, and voting results.

## Database:

MongoDB - Powers the backend of the blog platform, handling requests and enabling server-side logic.

## Authentication:

Bcrypt - Used for hashing passwords securely before storing them in the database

## Home Page
![home](https://github.com/Khushi-patel1221/VoteCast/assets/141536003/73a2f26a-021c-4014-b1c2-6aea366f42bc)

## Register Page
![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/register.png)
![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/register1.png)
![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/register2.png)

## Login Page

![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/login.png)

## Candidate Page
![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/Candidatepage.png)

## Voting Page
![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/Votingpage.png)
![](https://github.com/Khushi-patel1221/VoteCast/blob/main/frontend/src/images/vote.png)

## Installation🚀
## Backend
1. Clone the repository:
```sh
git clone https://github.com/Khushi-patel1221/VoteCast.git
cd VoteCast
```

2. Navigate to the backend directory:
```sh
cd backend
```
4. Install dependencies:
```sh
npm install
```

6. Update MongoDB configuration:

   Open backend/src/.env and modify the following :

```javascript
 mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority&appName=<appname>
```
 Replace the following placeholders in your configuration files:

- <username>: Your MongoDB username                                                                        
- <password>: Your MongoDB password                                                                 
- <cluster>: The MongoDB cluster URL                                                                  
- <database>: The MongoDB database name                                                              
- <appname>: Optional. The name of your application                                                         

5. Start the backend server:
```sh
 npm start
```

## Frontend
1. Navigate to the frontend directory:
```sh
 cd frontend
```

3. Install dependencies:
```sh
 npm install
```

3.Start the frontend development server:
```sh
 npm start
```

4.Open your browser and navigate to  http://localhost:3000 to view the application.
