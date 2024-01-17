// quiz-script.js
// Questions object with tags and corresponding questions
const questions = {
  'Node.js': [
    {
      question: 'What is Node.js primarily used for?',
      options: ['Frontend development', 'Database management', 'Server-side JavaScript', 'Mobile app development'],
      correctAnswer: 2,
    },
    {
      question: 'Which event-driven model does Node.js use?',
      options: ['Observer', 'Publisher-Subscriber', 'Request-Response', 'Broadcast'],
      correctAnswer: 1,
    },
    {
      question: 'What is the Node Package Manager (NPM) used for?',
      options: ['Networking in Node.js', 'Managing JavaScript packages and dependencies', 'Node.js version control', 'Native plugin installation'],
      correctAnswer: 1,
    },
    {
      question: 'Which core module is commonly used for handling file operations in Node.js?',
      options: ['fs', 'http', 'path', 'events'],
      correctAnswer: 0,
    },
    {
      question: 'In Node.js, what is the purpose of the `require` function?',
      options: ['Declaring variables', 'Importing modules', 'Defining constants', 'Creating functions'],
      correctAnswer: 1,
    },
    // Add more Node.js questions here...
  ],

  'Express.js': [
    {
      question: 'What is Express.js?',
      options: ['A database management system', 'A frontend framework', 'A web application framework for Node.js', 'A template engine'],
      correctAnswer: 2,
    },
    {
      question: 'Which method is used to handle a POST request in Express.js?',
      options: ['app.get()', 'app.post()', 'app.route()', 'app.use()'],
      correctAnswer: 1,
    },
    {
      question: 'What is middleware in the context of Express.js?',
      options: ['A database type', 'Functions that have access to the request and response objects', 'Express.js templates', 'Client-side scripts'],
      correctAnswer: 1,
    },
    {
      question: 'How is routing handled in Express.js?',
      options: ['Through configuration files', 'Using the `route` module', 'By defining routes using `app.get()` and similar methods', 'Automatically based on file names'],
      correctAnswer: 2,
    },
    {
      question: 'What is the purpose of the `res.send()` method in Express.js?',
      options: ['Rendering views', 'Sending a response to the client', 'Including middleware', 'Parsing JSON'],
      correctAnswer: 1,
    },
    // Add more Express.js questions here...
  ],

  'RESTful APIs': [
    {
      question: 'What does REST stand for in RESTful APIs?',
      options: ['Representational State Transfer', 'Remote Execution of Stateful Transactions', 'Resource Entity Structured Transfer', 'Responsive Stateful Transactions'],
      correctAnswer: 0,
    },
    {
      question: 'Which HTTP methods are commonly used in RESTful APIs?',
      options: ['GET, POST, DELETE', 'PUT, PATCH, OPTIONS', 'FETCH, SUBMIT, REMOVE', 'RECEIVE, SEND, DESTROY'],
      correctAnswer: 0,
    },
    {
      question: 'What is the purpose of an API endpoint in RESTful architecture?',
      options: ['To define the programming interface', 'To authenticate users', 'To specify a unique URL that represents a resource', 'To manage database connections'],
      correctAnswer: 2,
    },
    {
      question: 'What status code indicates a successful response in RESTful APIs?',
      options: ['200 OK', '404 Not Found', '500 Internal Server Error', '201 Created'],
      correctAnswer: 0,
    },
    {
      question: 'What does HATEOAS stand for in the context of RESTful APIs?',
      options: ['Hypermedia As The Engine Of Application State', 'HTTP And The Exchange Of API Structures', 'Handling Asynchronous Transactions Efficiently Over Stateless Architecture', 'High Availability Through Efficient Object Storage'],
      correctAnswer: 0,
    },
    // Add more RESTful APIs questions here...
  ],

  'Database Design': [
    {
      question: 'What is normalization in database design?',
      options: ['Reducing redundancy and dependency by organizing data', 'Increasing redundancy for faster retrieval', 'Adding more tables to a database', 'Allowing duplicate records in a table'],
      correctAnswer: 0,
    },
    {
      question: 'What is a primary key in a relational database?',
      options: ['A unique identifier for a record within a table', 'The first column in a table', 'A key used for encryption', 'A foreign key in another table'],
      correctAnswer: 0,
    },
    {
      question: 'What is the purpose of the ER diagram in database design?',
      options: ['Executable Requirements diagram', 'Entity-Relationship diagram, representing entities and their relationships', 'Error Reporting diagram', 'External Resource diagram'],
      correctAnswer: 1,
    },
    {
      question: 'What is denormalization, and when is it appropriate?',
      options: ['Increasing redundancy to optimize read performance', 'Reducing redundancy to optimize write performance', 'Normalizing data without any modification', 'Eliminating all relationships between tables'],
      correctAnswer: 0,
    },
    {
      question: 'What is ACID in the context of database transactions?',
      options: ['A language for database queries', 'Atomicity, Consistency, Isolation, Durability', 'A database design principle', 'A data definition language'],
      correctAnswer: 1,
    },
    // Add more Database Design questions here...
  ],

  'SQL': [
    {
      question: 'What does SQL stand for?',
      options: ['Structured Question Language', 'System Query Language', 'Structured Query Language', 'Sequential Question Language'],
      correctAnswer: 2,
    },
    {
      question: 'Which SQL statement is used to retrieve data from a database?',
      options: ['GET', 'SELECT', 'FETCH', 'QUERY'],
      correctAnswer: 1,
    },
    {
      question: 'What is the purpose of the WHERE clause in a SQL query?',
      options: ['To specify the columns to be retrieved', 'To order the result set', 'To filter rows based on a condition', 'To join tables'],
      correctAnswer: 2,
    },
    {
      question: 'What is the difference between INNER JOIN and LEFT JOIN in SQL?',
      options: ['INNER JOIN returns only matching rows, while LEFT JOIN returns all rows from the left table and the matching rows from the right table', 'INNER JOIN returns all rows from both tables', 'LEFT JOIN returns only matching rows', 'There is no difference between INNER JOIN and LEFT JOIN'],
      correctAnswer: 0,
    },
    {
      question: 'Which SQL data type would you use to store a date and time?',
      options: ['VARCHAR', 'INT', 'DATETIME', 'BOOLEAN'],
      correctAnswer: 2,
    },
    // Add more SQL questions here...
  ],

  'NoSQL': [
    {
      question: 'What is the main advantage of using a NoSQL database?',
      options: ['Strict schema for data', 'Support for complex transactions', 'Flexible schema and scalability', 'Limited data storage'],
      correctAnswer: 2,
    },
    {
      question: 'In NoSQL databases, what is CAP theorem?',
      options: ['Consistency, Availability, Partition Tolerance', 'Complexity, Availability, Partitioning', 'Concurrency, Atomicity, Parallelism', 'Compression, Aggregation, Performance'],
      correctAnswer: 0,
    },
    {
      question: 'What is a key-value store in the context of NoSQL databases?',
      options: ['Storing data as key-value pairs', 'Storing data in tables with rows and columns', 'Storing data in a graph structure', 'Storing data in JSON format'],
      correctAnswer: 0,
    },
    {
      question: 'Give an example of a document-oriented NoSQL database.',
      options: ['MongoDB', 'Cassandra', 'Redis', 'Couchbase'],
      correctAnswer: 0,
    },
    {
      question: 'What is sharding in the context of NoSQL databases?',
      options: ['Splitting a large database into smaller, more manageable pieces', 'Indexing documents for faster retrieval', 'Encrypting data for security', 'Creating relationships between tables'],
      correctAnswer: 0,
    },
    // Add more NoSQL questions here...
  ],

  'Authentication': [
    {
      question: 'What is the purpose of hashing passwords in authentication?',
      options: ['To hide passwords from users', 'To store passwords securely without storing the actual password', 'To encrypt passwords for transmission', 'To create unique salts for each user'],
      correctAnswer: 1,
    },
    {
      question: 'What is a JWT in the context of authentication?',
      options: ['JavaScript Web Token', 'JSON Web Token', 'Java Web Token', 'JSON Web Ticket'],
      correctAnswer: 1,
    },
    {
      question: 'What is the difference between authentication and authorization?',
      options: ['Authentication verifies the identity, while authorization determines the access level', 'Authentication and authorization are the same concepts', 'Authorization verifies the identity, while authentication determines the access level', 'There is no difference between authentication and authorization'],
      correctAnswer: 0,
    },
    {
      question: 'Why is it important to use HTTPS for secure authentication?',
      options: ['To increase website performance', 'To prevent SQL injection attacks', 'To encrypt data transmitted between the client and the server, ensuring secure authentication', 'To avoid session hijacking'],
      correctAnswer: 2,
    },
    {
      question: 'What is multi-factor authentication (MFA)?',
      options: ['Using multiple passwords for authentication', 'Authenticating with multiple methods, such as password and a one-time code', 'Granting access based on user roles', 'Allowing multiple users to share the same account'],
      correctAnswer: 1,
    },
    // Add more Authentication questions here...
  ],

  'Microservices': [
    {
      question: 'What is a microservices architecture?',
      options: ['A monolithic architecture with a single, large service', 'An architectural style that structures an application as a collection of small, independent services', 'A framework for building large-scale monolithic applications', 'A database management system for micro-sized datasets'],
      correctAnswer: 1,
    },
    {
      question: 'What are the key benefits of using microservices?',
      options: ['Improved scalability, independent deployment, and fault isolation', 'Reduced complexity, centralized management, and increased coupling', 'Easier debugging, single deployment unit, and increased monolithic structure', 'Faster development, reduced modularity, and limited scalability'],
      correctAnswer: 0,
    },
    {
      question: 'How do microservices communicate with each other?',
      options: ['Using a centralized database', 'Through well-defined APIs and protocols', 'Sharing memory space', 'By directly accessing each other\'s databases'],
      correctAnswer: 1,
    },
    {
      question: 'What is the role of a service registry in a microservices architecture?',
      options: ['Managing microservices codebase', 'Registering and discovering services dynamically', 'Controlling access to microservices', 'Handling database migrations for microservices'],
      correctAnswer: 1,
    },
    {
      question: 'What is the main challenge of maintaining a microservices system?',
      options: ['Tight coupling between services', 'Limited scalability', 'Managing distributed data consistency', 'Lack of modularity'],
      correctAnswer: 2,
    },
    // Add more Microservices questions here...
  ],
};
let shuffledQuestions = [];
let selectedTags = [];
let startTime;

function handleCheckboxSelection() {
  var checkboxes = document.getElementsByName("tag");
  var selectedCount = 0;
  selectedTags = [];

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked && !checkboxes[i].disabled) {
          selectedCount++;
          selectedTags.push(checkboxes[i].value);
      }
  }

  if (selectedCount >= 4) {
      for (var i = 0; i < checkboxes.length; i++) {
          if (!checkboxes[i].checked) {
              checkboxes[i].disabled = true;
          }
      }
  } else {
      for (var i = 0; i < checkboxes.length; i++) {
          checkboxes[i].disabled = false;
      }
  }
}

function generateQuiz() {
  startTime = new Date();
  const form = document.getElementById('tag-form');
  selectedTags = Array.from(form.elements['tag']).filter(tag => tag.checked).map(tag => tag.value);

  if (selectedTags.length != 4) {
    alert("Please select exactly 4 tags.");
    return null;
  }

  // Clear previous quiz container
  const quizContainer = document.getElementById('quiz-container');
  if (quizContainer) {
      quizContainer.parentNode.removeChild(quizContainer);
  }

  // Create a new quiz container
  const newQuizContainer = document.createElement('div');
  newQuizContainer.id = 'quiz-container';

  // Shuffle questions for selected tags
  shuffledQuestions = [];
  selectedTags.forEach(tag => {
      shuffledQuestions.push(...shuffle(questions[tag]));
  });

  // Display the first question
  displayNextQuestion(newQuizContainer, shuffledQuestions);

  document.body.appendChild(newQuizContainer);

  form.style.display = 'none';
  const selectTagsParagraph = document.querySelector('#backend-tags p');
  if (selectTagsParagraph) {
    selectTagsParagraph.style.display = 'none';
  }
}

function displayNextQuestion(quizContainer) {
  if (selectedTags.length === 0) {
    alert('No selected tags for questions.');
    return;
  }

  // Reset checkboxes before displaying the next question
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  if (shuffledQuestions.length === 0) {
    if (selectedTags.length > 0) {
      selectedTags.shift(); // Remove the current tag
    }
    if (selectedTags.length === 0) {
      // All questions have been displayed, show the review
      showReview(userAnswers);
      return;
    }
  }

  const questionData = shuffledQuestions.shift();

  // Update the section title with the current question
  const backendTagsSection = document.getElementById('backend-tags');
  backendTagsSection.querySelector('h2').textContent = questionData.question;

  // Determine if it's the last question
  const isLastQuestion = shuffledQuestions.length === 0 && selectedTags.length === 1;

  // Create question element
  const questionElement = createQuestionElement(questionData, isLastQuestion);

  // Clear previous question
  quizContainer.innerHTML = '';

  // Append question element
  quizContainer.appendChild(questionElement);
}
function shuffle(array) {
  const shuffledArray = array.slice(); // Create a shallow copy to avoid modifying the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function createQuestionElement(questionData, isLastQuestion = false) {
  const questionElement = document.createElement('div');
  questionElement.className = 'question';

  // Create the answer options with radio buttons (type changed to radio)
  questionData.options.forEach((option, index) => {
    const optionLabel = document.createElement('label');
    optionLabel.textContent = option;

    optionLabel.className = "options";

    const optionInput = document.createElement('input');
    optionInput.type = 'radio'; // Change type to 'radio'
    optionInput.id = `option${index}`;
    optionInput.name = 'answer'; // Use the same name for all options
    optionInput.value = index;

    // Ensure radio buttons are not checked by default
    optionInput.checked = false;

    optionLabel.insertBefore(optionInput, optionLabel.firstChild);
    questionElement.appendChild(optionLabel);
  });

  // Create either the submit button or the review button
  const button = document.createElement('button');
  if (isLastQuestion) {
    // If it's the last question, create the 'Review Quiz' button
    button.textContent = 'Review Quiz';
    button.addEventListener('click', () => {
      // Submit the answer for the last question and then show the review
      submitAnswer(questionData, true);
    });
  } else {
    // Otherwise, create the 'Submit Answer' button
    button.textContent = 'Submit Answer';
    button.className = 'submit-button';
    button.addEventListener('click', () => submitAnswer(questionData));
  }
  questionElement.appendChild(button);

  return questionElement;
}

function showReview(userAnswers) {
  // Oprirea cronometrului și calcularea timpului scurs
  const endTime = new Date();
  const timeSpent = (endTime - startTime) / 1000; // Timpul scurs în secunde

  const quizContainer = document.getElementById('quiz-container');
  const reviewContainer = document.getElementById('review-container');
  const scoreElement = document.getElementById('score');
  const answersElement = document.getElementById('answers');

  if (!quizContainer || !reviewContainer || !scoreElement || !answersElement) {
    console.error('One or more elements not found.');
    return;
  }

  let correctAnswersCount = 0;
  userAnswers.forEach(userAnswer => {
    const question = questions[selectedTags[0]].find(q => q.question === userAnswer.question);
    if (question && question.correctAnswer === userAnswer.answers[0]) {
      correctAnswersCount++;
    }
  });

  const totalQuestions = questions[selectedTags[0]].length * selectedTags.length;
  const scorePercentage = (correctAnswersCount / totalQuestions) * 100;
  scoreElement.textContent = `Your Score: ${correctAnswersCount} / ${totalQuestions} - Time spent: ${timeSpent.toFixed(2)} seconds`;

  let interviewResultMessage = '';
  if (scorePercentage < 50) {
    interviewResultMessage = 'Thank you for your time, but unfortunately, your score does not meet our passing criteria for this interview.';
  } else if (scorePercentage >= 50 && scorePercentage < 75) {
    interviewResultMessage = 'You have shown some good knowledge, and you’ve passed the interview. However, we encourage you to improve your skills further.';
  } else if (scorePercentage >= 75 && scorePercentage < 100) {
    interviewResultMessage = 'Impressive performance! You have done very well in the interview and shown a high level of understanding.';
  } else if (scorePercentage === 100) {
    interviewResultMessage = 'Outstanding! A perfect score in the interview! We are excited about the potential of having you on our team.';
  }

  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.textContent = interviewResultMessage;
  } else {
    const newResultElement = document.createElement('p');
    newResultElement.id = 'result';
    newResultElement.textContent = interviewResultMessage;
    reviewContainer.insertBefore(newResultElement, answersElement);
  }

  const backendTagsSection = document.getElementById('backend-tags');
  if (backendTagsSection) {
    backendTagsSection.querySelector('h2').textContent = 'Review Interview';
  }

  answersElement.innerHTML = '<h3>Review:</h3>';
  selectedTags.forEach((tag, tagIndex) => {
    const tagQuestions = questions[tag];
    tagQuestions.forEach((question, questionIndex) => {
      const userAnswer = getUserAnswer(tagIndex, questionIndex, userAnswers);

      const answerText = document.createElement('p');
      answerText.innerHTML = `Tag: ${tag} - Q${questionIndex + 1}:<br>
        Question: ${question.question}<br>
        Correct Answer: ${question.options[question.correctAnswer]}<br>
        Your Answer: ${
          userAnswer !== null ? question.options[userAnswer] : 'No answer provided'
        }<br><br>`;

      answersElement.appendChild(answerText);
    });

    if (tagIndex < selectedTags.length - 1) {
      const lineBreak = document.createElement('hr');
      answersElement.appendChild(lineBreak);
    }
  });

  reviewContainer.style.display = 'block';
  quizContainer.style.display = 'none'; // Optional: hide the quiz container

  // Clear the selected tags and answers for next use
  selectedTags = [];
  userAnswers = [];
}

function getUserAnswer(tagIndex, questionIndex, userAnswers) {
  const userAnswer = userAnswers.find(
    (answer) => answer.question === questions[selectedTags[tagIndex]][questionIndex].question
  );

  return userAnswer ? userAnswer.answers : null;
}

let userAnswers = [];
function submitAnswer(questionData, goToReview = false) {
  const answers = document.querySelectorAll(`input[name^="answer"]:checked`);

  if (answers.length === 0) {
    // If no option is selected, return without adding to userAnswers
    alert('Please select an answer before submitting.');
    return;
  }

  const userAnswerIndexes = Array.from(answers).map(answer => parseInt(answer.value));

  // Check if user has already answered the current question
  const existingAnswerIndex = userAnswers.findIndex(
    (answer) => answer.question === questionData.question
  );

  if (existingAnswerIndex !== -1) {
    // Update the existing answer
    userAnswers[existingAnswerIndex].answers = userAnswerIndexes;
  } else {
    // Add a new answer
    userAnswers.push({ question: questionData.question, answers: userAnswerIndexes });
  }

  // If goToReview is true or if there are no more questions, show the review
  if (goToReview || shuffledQuestions.length === 0) {
    showReview(userAnswers);
  } else {
    // Otherwise, display the next question
    const quizContainer = document.getElementById('quiz-container');
    displayNextQuestion(quizContainer);
  }
}

document.getElementById('back').addEventListener('click', redirect);
function redirect() {
  // Redirecționează utilizatorul către pagina principală
  window.location.href = 'hard-skills-category.html'; // Înlocuiește 'pagina-principala.html' cu URL-ul real al paginii principale
}

document.getElementById('restart-button').addEventListener('click', redirectToMainPage);
function redirectToMainPage() {
  // Redirecționează utilizatorul către pagina principală
  window.location.href = 'backend-quiz.html'; // Înlocuiește 'pagina-principala.html' cu URL-ul real al paginii principale
}
