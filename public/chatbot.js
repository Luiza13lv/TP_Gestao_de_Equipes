document.getElementById('send-button').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
      addMessage(userInput, 'user');
      getBotResponse(userInput);
      document.getElementById('user-input').value = '';
    }
  });
  
  document.getElementById('user-input').addEventListener('keypress', function(event) {
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
  
  function getBotResponse(userInput) {
    let botResponse = "";
    switch(userInput.toLowerCase()) {
      case "onde fica a sala 101?":
        botResponse = "A sala 101 fica no prédio X, no primeiro andar.";
        break;
      case "como faço para chegar na biblioteca central?":
        botResponse = "Para chegar na biblioteca central, você deve seguir pelo corredor principal e virar à direita.";
        break;
      case "qual é o horário de funcionamento da cantina?":
        botResponse = "A cantina funciona das 7h às 19h de segunda a sexta-feira.";
        break;
      default:
        botResponse = "Desculpe, não entendi sua pergunta. Por favor, tente novamente.";
    }
    addMessage(botResponse, 'bot');
  }
  