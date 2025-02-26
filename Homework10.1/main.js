function changeBackgroundColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.backgroundColor = color;
    }
  }
  module.exports = changeBackgroundColor; // не видаляти цей код
