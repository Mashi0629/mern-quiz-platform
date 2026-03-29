# mern-quiz-platform

http://localhost:5000

Run - node server.js
Test API - http://localhost:5000/api/users

<img width="1366" height="728" alt="quiz ss 2" src="https://github.com/user-attachments/assets/993c90c6-79cb-4d8e-9cfd-2bbc612345e4" />
<img width="1366" height="728" alt="quiz ss" src="https://github.com/user-attachments/assets/aae6d74f-07f3-497e-8483-25562d51beab" />

http://localhost:5000/api/users/login - POST 
BODY - {
  "email": "@gmail.com",
  "password": ""
}
send --- get the token from respond

http://localhost:5000/api/quizzes - POST
BODY -{
  "title": "JavaScript Basics",
  "questions": [
    {
      "question": "What is JS?",
      "options": ["Language", "Car", "Food"],
      "correctAnswer": 0
    },
    {
      "question": "Which is correct?",
      "options": ["let", "var", "const"],
      "correctAnswer": 2
    }
  ]
}

HEADERS - Authorization ADD TOKEN WITHOUT ""
send and get the quiz id 

http://localhost:5000/api/quizzes/QUIZ ID HERE /submit - POST
BODY -{
  "answers": [0, 2]
}
HEADERS -Authorization- ADD TOKEN 
SEND 

