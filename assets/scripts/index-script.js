const regex = /^[a-z ]+$/;

function encrypt () {
    let text = document.getElementById("container__inputArea__input").value;
    let newText = "";
    if (regex.test(text)) {
        for (let i = 0; i < text.length; i++) {
            switch(text[i]) {
                case "a":
                    newText += "ai";
                break
                case "e":
                    newText += "enter";
                break
                case "i":
                    newText += "imes";
                break
                case "o":
                    newText += "ober";
                break
                case "u":
                    newText += "ufat";
                break
                default:
                    newText += text[i];
            }
        }
    } else {
        newText = "Invalid text!";
    }
    
    

    let screenText = `<p id="container__outputArea__typeMessage">${newText}</p><button class="container__outputArea__copy" onclick="copy()">Copy</button>`;

    document.getElementById("container__outputArea").innerHTML = screenText;

}

function decrypt () {
    let text = document.getElementById("container__inputArea__input").value;
    let newText = "";
    if (regex.test(text)) {
        newText = text.replaceAll("ai", "a");
        newText = newText.replaceAll("enter", "e");
        newText = newText.replaceAll("imes", "i");
        newText = newText.replaceAll("ober", "o");
        newText = newText.replaceAll("ufat", "u");
    } else {
        newText = "Invalid text!";
    }


    let screenText = `<p id="container__outputArea__typeMessage">${newText}</p><button class="container__outputArea__copy" onclick="copy()">Copy</button>`;

    document.getElementById("container__outputArea").innerHTML = screenText;

}

function copy () {
    let text = document.getElementById("container__outputArea__typeMessage").innerHTML;
    console.log(text)
    navigator.clipboard.writeText(text);
}