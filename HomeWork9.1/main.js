function changeText(elementId, newText) {
    var element = document.getElementById(elementId);
    if (element) {
        element.textContent = newText;
    } else {
        console.warn(`Елемент з id "${elementId}" не знайдено.`);
    }
}

module.exports = changeText;