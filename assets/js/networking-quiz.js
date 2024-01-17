const questions = {
    'Networking': [
        {
          question: 'What is the primary purpose of a network switch in a networking environment?',
          options: ['Connecting multiple devices wirelessly', 'Transmitting data to specific MAC addresses', 'Assigning IP addresses', 'Filtering network traffic'],
          correctAnswer: 1,
        },
        {
          question: 'What is a network topology?',
          options: ['The physical arrangement of network cables', 'The layout of interconnected network devices', 'The protocol used for network communication', 'The type of cable used in the network'],
          correctAnswer: 1,
        },
        {
          question: 'What is the difference between a hub and a switch?',
          options: ['A hub transmits data to specific devices, while a switch broadcasts to all devices', 'A switch operates at a higher network layer than a hub', 'A hub operates at a higher network layer than a switch', 'A switch transmits data to specific devices, while a hub broadcasts to all devices'],
          correctAnswer: 3,
        },
        {
          question: 'What is the main function of a router in a network?',
          options: ['To provide wireless connectivity', 'To connect different networks and route data', 'To store data', 'To serve web pages'],
          correctAnswer: 1,
        },
        {
          question: 'In networking, what does LAN stand for?',
          options: ['Large Area Network', 'Local Area Network', 'Long Area Network', 'Linked Area Network'],
          correctAnswer: 1,
        },
      ],
    
      'TCP/IP': [
        {
          question: 'What does the acronym TCP/IP stand for?',
          options: ['Transmission Control Protocol/Internet Protocol', 'Transfer Command Protocol/Interface Program', 'Telecom Communication Protocol/Intranet Protocol', 'Terminal Control Protocol/Internet Package'],
          correctAnswer: 0,
        },
        {
          question: 'How many layers are in the TCP/IP model?',
          options: ['2', '4', '5', '7'],
          correctAnswer: 1,
        },
        {
          question: 'What is the primary responsibility of the Transport layer in the TCP/IP model?',
          options: ['Routing data between networks', 'Breaking data into packets', 'Ensuring reliable data transmission', 'Assigning IP addresses'],
          correctAnswer: 2,
        },
        {
          question: 'Which protocol operates at the Internet layer of the TCP/IP model?',
          options: ['TCP', 'UDP', 'IP', 'FTP'],
          correctAnswer: 2,
        },
        {
          question: 'What is the main function of the Application layer in the TCP/IP model?',
          options: ['Data encoding and presentation', 'Providing end-to-end data communication', 'Routing data', 'Supporting network applications'],
          correctAnswer: 3,
        },
      ],
    
      'DNS': [
        {
          question: 'What does DNS stand for in computer networking?',
          options: ['Data Network Service', 'Digital Network System', 'Domain Name System', 'Dynamic Network Server'],
          correctAnswer: 2,
        },
        {
          question: 'What is the primary function of DNS?',
          options: ['Encrypting data', 'Translating domain names to IP addresses', 'Routing data packets', 'Compressing data'],
          correctAnswer: 1,
        },
        {
          question: 'What is a DNS record?',
          options: ['A log of all domain name registrations', 'A data entry in DNS server that links a domain to an IP address', 'A record of data transfer amounts', 'A history of DNS queries'],
          correctAnswer: 1,
        },
        {
          question: 'What type of DNS record is used for email server configuration?',
          options: ['A Record', 'MX Record', 'CNAME Record', 'SRV Record'],
          correctAnswer: 1,
        },
        {
          question: 'What is the purpose of a DNS cache?',
          options: ['To speed up domain name resolution', 'To store user data', 'To improve network security', 'To log DNS queries'],
          correctAnswer: 0,
        },
      ],
      'Firewalls': [
        {
          question: 'What is the primary function of a firewall in a network?',
          options: ['To increase internet speed', 'To serve web content', 'To block unauthorized access', 'To assign IP addresses'],
          correctAnswer: 2,
        },
        {
          question: 'What are the two main types of firewalls?',
          options: ['Hardware and Software', 'Internal and External', 'Static and Dynamic', 'Inbound and Outbound'],
          correctAnswer: 0,
        },
        {
          question: 'Which firewall technology creates a virtual barrier around each network segment?',
          options: ['Packet-filtering firewall', 'Stateful firewall', 'Proxy firewall', 'Next-Generation firewall'],
          correctAnswer: 3,
        },
        {
          question: 'What is a common feature of a next-generation firewall?',
          options: ['URL filtering', 'Email filtering', 'Wireless security', 'Data encryption'],
          correctAnswer: 0,
        },
        {
          question: 'What is the main difference between an intrusion detection system (IDS) and a firewall?',
          options: ['IDS blocks traffic, while a firewall monitors it', 'A firewall blocks traffic, while IDS monitors it', 'IDS is used for data encryption, while firewalls are not', 'Firewalls are used for data encryption, while IDS is not'],
          correctAnswer: 1,
        },
      ],
    
      'Routing': [
        {
          question: 'What is the main purpose of a router in a computer network?',
          options: ['To provide wireless connectivity', 'To protect against cyber threats', 'To connect multiple networks and route traffic between them', 'To manage the data storage'],
          correctAnswer: 2,
        },
        {
          question: 'What does the term "routing table" refer to in networking?',
          options: ['A list of permissions for network users', 'A database used for network storage', 'A set of rules used by routers to determine the best path for forwarding packets', 'A physical table where routers are placed'],
          correctAnswer: 2,
        },
        {
          question: 'Which protocol is used for finding the shortest path in a network?',
          options: ['HTTP', 'SMTP', 'OSPF', 'FTP'],
          correctAnswer: 2,
        },
        {
          question: 'What is a static route in networking?',
          options: ['A route that changes dynamically', 'A manually configured network path', 'An automatically configured network path', 'A route used only for wireless networks'],
          correctAnswer: 1,
        },
        {
          question: 'What is the primary function of Border Gateway Protocol (BGP) in networking?',
          options: ['Encrypting data', 'Translating IP addresses', 'Routing data between autonomous systems on the internet', 'Compressing data for faster transmission'],
          correctAnswer: 2,
        },
      ],
      'Subnetting': [
        {
          question: 'What is the primary purpose of subnetting in networking?',
          options: ['To increase internet speed', 'To divide a network into smaller segments', 'To encrypt data', 'To provide wireless connectivity'],
          correctAnswer: 1,
        },
        {
          question: 'What does CIDR stand for in the context of subnetting?',
          options: ['Classful Internet Domain Routing', 'Classless Inter-Domain Routing', 'Classful Inter-Domain Routing', 'Classless Internet Domain Routing'],
          correctAnswer: 1,
        },
        {
          question: 'Which of the following is a benefit of subnetting?',
          options: ['Reduced network complexity', 'Increased bandwidth', 'Decreased security', 'Increased range of IP addresses'],
          correctAnswer: 0,
        },
        {
          question: 'How is a subnet mask used in subnetting?',
          options: ['To identify the network portion of an IP address', 'To encrypt data packets', 'To increase the number of available IP addresses', 'To decrease the size of a broadcast domain'],
          correctAnswer: 0,
        },
        {
          question: 'What is the result of applying a subnet mask of 255.255.255.0 to an IP address?',
          options: ['It creates 256 smaller subnets', 'It assigns the IP address to a class A network', 'It defines the first three octets as the network part', 'It creates a single broadcast domain'],
          correctAnswer: 2,
        },
      ],
    
      'Load Balancing': [
        {
          question: 'What is the primary purpose of load balancing in networking?',
          options: ['To distribute network traffic across multiple servers', 'To encrypt data traffic', 'To increase storage capacity', 'To monitor network performance'],
          correctAnswer: 0,
        },
        {
          question: 'Which type of load balancing distributes traffic based on client IP address?',
          options: ['Round Robin', 'Least Connections', 'Source IP Hash', 'Dynamic Ratio'],
          correctAnswer: 2,
        },
        {
          question: 'What is a key benefit of using a load balancer?',
          options: ['Data encryption', 'Traffic compression', 'Reducing server overload', 'Physical security of servers'],
          correctAnswer: 2,
        },
        {
          question: 'In load balancing, what does "sticky session" mean?',
          options: ['A session that is fixed to a specific server', 'A session that is highly secure', 'A session that lasts for a very long time', 'A session that is used for administrative purposes'],
          correctAnswer: 0,
        },
        {
          question: 'Which layer of the OSI model does a load balancer primarily operate at?',
          options: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Application Layer'],
          correctAnswer: 3,
        },
      ],
    
      'Network Security': [
        {
          question: 'What is the primary goal of network security?',
          options: ['To prevent data loss', 'To ensure reliable connectivity', 'To protect data and resources from unauthorized access', 'To increase network speed'],
          correctAnswer: 2,
        },
        {
          question: 'What does a VPN provide in terms of network security?',
          options: ['Data redundancy', 'Faster data transfer', 'Secure remote access', 'Network bridging'],
          correctAnswer: 2,
        },
        {
          question: 'What is the purpose of encryption in network security?',
          options: ['To speed up data transmission', 'To convert data into a secure format to prevent unauthorized access', 'To reduce data size', 'To increase network bandwidth'],
          correctAnswer: 1,
        },
        {
          question: 'What is a common method used to authenticate users on a network?',
          options: ['Password protection', 'Physical biometrics', 'Hardware verification', 'Visual monitoring'],
          correctAnswer: 0,
        },
        {
          question: 'Which of the following is a type of network security attack?',
          options: ['Load balancing', 'Subnetting', 'Phishing', 'Routing'],
          correctAnswer: 2,
        },
      ],
      'VPN': [
        {
          question: 'What does VPN stand for in networking?',
          options: ['Variable Path Network', 'Virtual Private Network', 'Vital Packet Node', 'Verified Public Network'],
          correctAnswer: 1,
        },
        {
          question: 'What is the main use of a VPN?',
          options: ['Speeding up the network connection', 'Providing secure, encrypted connections over the internet', 'Connecting different wireless devices', 'Monitoring network traffic'],
          correctAnswer: 1,
        },
        {
          question: 'Which protocol is commonly used in VPNs to secure internet traffic?',
          options: ['HTTP', 'SSH', 'OpenVPN', 'IMAP'],
          correctAnswer: 2,
        },
        {
          question: 'What is a VPN tunnel?',
          options: ['A physical infrastructure for VPNs', 'An encrypted connection between VPN client and server', 'A software used to manage VPN connections', 'A type of VPN protocol'],
          correctAnswer: 1,
        },
        {
          question: 'Why might a company use a VPN?',
          options: ['To allow remote employees secure access to the company network', 'To save costs on network infrastructure', 'To increase the internet speed', 'To prevent the use of third-party applications'],
          correctAnswer: 0,
        },
      ],
    
      'Wireless Networks': [
        {
          question: 'What does Wi-Fi stand for in the context of wireless networking?',
          options: ['Wireless Fidelity', 'Wired Fidelity', 'Wireless Function', 'Wired Function'],
          correctAnswer: 0,
        },
        {
          question: 'Which frequency bands are commonly used by Wi-Fi networks?',
          options: ['2.4 GHz and 5 GHz', '5 MHz and 10 MHz', '100 MHz and 200 MHz', '1 GHz and 2 GHz'],
          correctAnswer: 0,
        },
        {
          question: 'What is the purpose of a WAP in a wireless network?',
          options: ['To provide a firewall', 'To convert digital signals to analog', 'To provide wireless connectivity to devices', 'To route packets between networks'],
          correctAnswer: 2,
        },
        {
          question: 'What type of security encryption is most secure for Wi-Fi networks?',
          options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
          correctAnswer: 3,
        },
        {
          question: 'What is the main advantage of using a 5 GHz frequency band in Wi-Fi networks?',
          options: ['Longer range', 'Higher data rate', 'Better penetration through walls', 'Lower power consumption'],
          correctAnswer: 1,
        },
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

  // Array temporar pentru a aduna toate întrebările
  let allSelectedQuestions = [];

  // Adaugă întrebările fiecărui tag selectat în array-ul temporar
  selectedTags.forEach(tag => {
      allSelectedQuestions.push(...questions[tag]);
  });

  // Amestecă întrebările din array-ul temporar
  shuffledQuestions = shuffle(allSelectedQuestions);

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
function getUserAnswer(tagIndex, questionIndex, userAnswers) {
  const userAnswer = userAnswers.find(
    (answer) => answer.question === questions[selectedTags[tagIndex]][questionIndex].question
  );

  return userAnswer ? userAnswer.answers : null;
}

let userAnswers = [];
function submitAnswer(questionData) {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert('Please select an answer before submitting.');
    return;
  }

  const userAnswerIndex = parseInt(selectedOption.value);

  // Update or add the user's answer
  const existingAnswerIndex = userAnswers.findIndex(
    (answer) => answer.question === questionData.question
  );
  if (existingAnswerIndex !== -1) {
    userAnswers[existingAnswerIndex].answers = [userAnswerIndex];
  } else {
    userAnswers.push({ question: questionData.question, answers: [userAnswerIndex] });
  }
  

  // Check if there are more questions to display
  if (shuffledQuestions.length > 0) {
    const quizContainer = document.getElementById('quiz-container');
    displayNextQuestion(quizContainer);
  } else {
    // If no more questions, show the review
    showReview(userAnswers);
  }
}

document.getElementById('restart-button').addEventListener('click', redirectToMainPage);
function redirectToMainPage() {
  // Redirecționează utilizatorul către pagina principală
  window.location.href = 'networking-quiz.html'; // Înlocuiește 'pagina-principala.html' cu URL-ul real al paginii principale
}
document.getElementById('back').addEventListener('click', redirectToBackend);
function redirectToBackend() {
  // Redirecționează utilizatorul către pagina principală
  window.location.href = 'backend-quiz.html'; // Înlocuiește 'pagina-principala.html' cu URL-ul real al paginii principale
}