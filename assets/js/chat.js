// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Chatbox
document.getElementById('input-field').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById('input-field').value;

    if (userInput.trim() === '') {
        return;
    }

    document.getElementById('input-field').value = '';
    var supportResponseDisplayed = false;

    if (!supportResponseDisplayed) {
        setTimeout(function () {
            var response = getFrequentlyAskedQuestionResponse(userInput);
            if (response) {
                appendMessage('Support', response);
            } else {
                appendMessage('Support', "I'm sorry, but my abilities cannot answer this question. Please leave a message at https://www.instagram.com/itinteract.ro/. Have a beautiful day!");
            }
            supportResponseDisplayed = true;

            document.getElementById('input-field').focus();
        }, 1000);
    }

    appendMessage('You', userInput);
    document.getElementById('input-field').focus();
}

function appendMessage(sender, message) {
    var chatMessages = document.getElementById('chat-messages');

    var messageContainer = document.createElement('div');
    messageContainer.style.marginBottom = '10px';

    var senderElement = document.createElement('strong');
    senderElement.textContent = sender + ': ';
    messageContainer.appendChild(senderElement);

    var messageElement = document.createElement('span');
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);

    chatMessages.appendChild(messageContainer);
}

// FAQ Section
function getFrequentlyAskedQuestionResponse(question) {
    question = question.toLowerCase();

    if (question.includes('how are you')) {
        return 'I am doing well, thank you for asking. How may I further assist you?';
    } else if (question.includes('thanks') || question.includes('thank')) {
        return "You're welcome! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
    } else if (question.includes('bye')) {
        return "Goodbye! If you ever have more questions in the future, don't hesitate to ask. Have a great day!";
    } else if (question.includes('quiz')) {
        return 'To access quizzes, kindly navigate to the "DASHBOARD" section located on the left panel. Once there, please select the specific quiz you wish to undertake.';
    } else if (question.includes('name') || question.includes('what are you')) {
        return 'I am an AI support bot designed to assist you. You may refer to me as Bling.';
    } else if (question.includes('dashboard')) {
        return 'To access the dashboard, kindly navigate to the "DASHBOARD" section on the right panel.';
    } else if (question.includes('articles')) {
        return 'To access articles, please select the "ARTICLES" section on the right panel.';
    } else if (question.includes('profile')) {
        return 'If you wish to view your profile, kindly select "MY PROFILE" on the right panel.';
    } else if (question.includes('settings')) {
        return 'For accessing your account settings, kindly navigate to the "SETTINGS" option in the right panel.';
    } else if (question.includes('hey') || question.includes('hello') || question.includes('good')) { 
        return 'Hello! Thank you for your message! How can we assist you today?';
    }
    return null;
}