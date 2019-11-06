let arr = [
    ["Backquote", "`", "~", "ё", "Ё"],
    ["Digit1", "1", "!", "1", "!"],
    ["Digit2", "2", "@", "2", '"'],
    ["Digit3", "3", "#", "3", "№"],
    ["Digit4", "4", "$", "4", ";"],
    ["Digit5", "5", "%", "5", "%"],
    ["Digit6", "6", "^", "6", ":"],
    ["Digit7", "7", "&", "7", "?"],
    ["Digit8", "8", "*", "8", "*"],
    ["Digit9", "9", "(", "9", "("],
    ["Digit0", "0", ")", "0", ")"],
    ["Minus", "-", "_", "-", "_"],
    ["Equal", "=", "+", "=", "+"],
    ["Backspace", "Backspace", "Backspace", "Backspace", "Backspace"],
    ["Tab", "Tab", "Tab", "Tab", "Tab"],
    ["KeyQ", "q", "Q", "й", "Й"],
    ["KeyW", "w", "W", "ц", "Ц"],
    ["KeyE", "e", "E", "у", "У"],
    ["KeyR", "r", "R", "к", "К"],
    ["KeyT", "t", "T", "е", "Е"],
    ["KeyY", "y", "Y", "н", "Н"],
    ["KeyU", "u", "U", "г", "Г"],
    ["KeyI", "i", "I", "ш", "Ш"],
    ["KeyO", "o", "O", "щ", "Щ"],
    ["KeyP", "p", "P", "з", "З"],
    ["BracketLeft", "[", "{", "х", "Х"],
    ["BracketRight", "]", "}", "ъ", "Ъ"],
    ["Backslash", "\\", "|", "\\", "/"],
    ["CapsLock", "Caps lock", "CapsLock", "CapsLock", "CapsLock"],
    ["KeyA", "a", "A", "ф", "Ф"],
    ["KeyS", "s", "S", "ы", "Ы"],
    ["KeyD", "d", "D", "в", "В"],
    ["KeyF", "f", "F", "а", "А"],
    ["KeyG", "g", "G", "п", "П"],
    ["KeyH", "h", "H", "р", "Р"],
    ["KeyJ", "j", "J", "о", "О"],
    ["KeyK", "k", "K", "л", "Л"],
    ["KeyL", "l", "L", "д", "Д"],
    ["Semicolon", ";", ":", "ж", "Ж"],
    ["Quote", "'", '"', "э", "Э"],
    ["Enter", "Enter", "\n", "\n", "\n"],
    ["ShiftLeft", "Shift", "Shift", "Shift", "Shift"],
    ["KeyZ", "z", "Z", "я", "Я"],
    ["KeyX", "x", "X", "ч", "Ч"],
    ["KeyC", "c", "C", "с", "С"],
    ["KeyV", "v", "V", "м", "М"],
    ["KeyB", "b", "B", "и", "И"],
    ["KeyN", "n", "N", "т", "Т"],
    ["KeyM", "m", "M", "ь", "Ь"],
    ["Comma", ",", "<", "б", "Б"],
    ["Period", ".", ">", "ю", "Ю"],
    ["Slash", "/", "?", ".", ","],
    ["ShiftRight", "Shift", "Shift", "Shift", "Shift"],
    ["ControlLeft", "ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["Fn", "fn", "Fn", "Fn", "Fn"],
    ["Win", "win", "Win", "Win", "Win"],
    ["AltLeft", "Alt", "Alt", "Alt", "Alt"],
    ["Space", " ", " ", " ", " "],
    ["AltRight", "Alt", "Alt", "Alt", "Alt"],
    ["ControlLeft", "ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["Left", "←", "Left", "Left", "Left"],
    ["Up", "↑", "Up", "Up", "Up"],
    ["Down", "↓", "Down", "Down", "Down"],
    ["Right", "→", "Right", "Right", "Right"]
]

let wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.append(wrapper);

wrapper.insertAdjacentHTML('beforeend', '<textarea id="textarea"></textarea>');

let div = document.createElement('div');
div.className = "keyboard";
wrapper.append(div);

let text = document.querySelector("textarea");
text.focus();

for (let i = 0; i < arr.length; i++) {
    let key = document.createElement('div');
    key.innerHTML = `${arr[i][1]}`;
    key.className = "key";
    key.id = arr[i][1];
    div.append(key);

    if (arr[i][1] == 'Tab' || arr[i][0] == 'Backslash') {
        key.classList = "key tab"
    }
    if (arr[i][0] == 'Backspace' || arr[i][0] == 'Enter' || arr[i][0] == 'CapsLock') {
        key.classList = "key backspace";
    }
    if (arr[i][0] == 'Space') {
        key.classList = "key space";
    }
    if (arr[i][0] == 'ShiftLeft' || arr[i][0] == 'ShiftRight') {
        key.classList = "key shift";
    }
}

let key = document.getElementsByClassName('key');
document.addEventListener('keydown', function (event) {
    // Debugger;


    for (let i = 0; i < key.length; i++) {
        if (key[i].id == event.key) {
            key[i].classList.add("active");
        }
    }
    event.preventDefault();

    if (event.key != 'Backspace' && event.key != 'Shift' && event.key != 'CapsLock'
        && event.key != 'Tab' && event.key != 'Enter' && event.key != 'Alt'
        && event.key != 'Control' && event.key != 'Fn' && event.key != 'Win'
        && event.key != 'ArrowUp' && event.key != 'ArrowDown' && event.key != 'ArrowLeft'
        && event.key != 'ArrowRight') {
        text.value += event.key;
    }

    if (event.key == 'Backspace') {
        text.value = text.value.slice(0, -1);
    }
    if (event.key == 'Tab') {
        text.value += '    ';
    }
    if (event.key == 'Enter') {
        text.value += '\n';
    }

    text.setSelectionRange(text.value.length, text.value.length);
    text.focus();

});


document.addEventListener('keyup', function () {
    for (let i = 0; i < key.length; i++) {
        key[i].classList.remove("active");
    }
});

div.addEventListener('click', function (event) {

    if (event.target.id != 'Backspace' && event.target.id != 'Shift' && event.target.id != 'Caps lock'
        && event.target.id != 'Tab' && event.target.id != 'Enter' && event.target.id != 'alt'
        && event.target.id != 'ctrl' && event.target.id != 'fn' && event.target.id != 'win') {
        text.value += event.target.id;
    }
    if (event.target.id == 'Backspace') {
        text.value = text.value.slice(0, -1);
    }
    if (event.target.id == 'Tab') {
        text.value += '    ';
    }
    if (event.target.id == 'Enter') {
        text.value += '\n';
    }

    document.getElementById("textarea").focus();
    text.setSelectionRange(text.value.length, text.value.length);
});