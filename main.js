const input = document.getElementById('btn')


//Event Listeners
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter" && (document.activeElement.tagName.toLowerCase() !== 'button')) {
        addInput();

    }
});

input.addEventListener("click", addInput);


//Functions
function addInput() {
    let info = document.getElementById('input').value
    const li = document.createElement('li')
    li.textContent = info
    document.querySelector('ul').appendChild(li)
    clear()
}

function clear() {
    document.querySelector('input').value = " "
}