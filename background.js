// Função para enviar uma mensagem para o content_script
function sendMessageToContentScript(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
}

// Listener para receber mensagens do content_script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "removeDivs") {
    // Realiza a ação de remoção das divs aqui
    // Neste exemplo, estamos apenas imprimindo a mensagem no console
    console.log("Divs removidas:", request.count);
  }
});
