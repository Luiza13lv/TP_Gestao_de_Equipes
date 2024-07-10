document.getElementById('send-button').addEventListener('click', function () {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage(userInput, 'user');
        getBotResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

document.getElementById('user-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

function addMessage(message, sender) {
    let chatBox = document.getElementById('chat-box');
    let messageElement = document.createElement('div');
    messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotResponse(userInput) {
    const response = await fetch('/get-bot-response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: userInput })
    });
    const data = await response.json();
    addMessage(data.response, 'bot');
}