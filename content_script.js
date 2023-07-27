// Function to remove divs that contain a dynamic ID starting with "vacancy" and have innerHTML containing "BairesDev"
function removeDivsWithDynamicIdAndContent(content) {
  const divs = document.querySelectorAll("div");
  let count = 0;

  divs.forEach((div) => {
    const divId = div.getAttribute("id");
    if (divId && divId.startsWith("vacancy") && div.innerHTML.includes(content)) {
      div.remove();
      count++;
    }
  });

  // Send a message back to the background script with the number of removed divs
  chrome.runtime.sendMessage({ action: "removeDivs", count: count });
}

// Execute the removal function with the innerHTML content "BairesDev"
const contentToMatch = "BairesDev";
removeDivsWithDynamicIdAndContent(contentToMatch);