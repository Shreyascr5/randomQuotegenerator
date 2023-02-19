var textarea = document.getElementById("display");
var btn = document.getElementById("generate");
var authorarea = document.getElementById("auth");


const access = async() => {
    const api = "https://type.fit/api/quotes";
    try {

        var geturl = await fetch(api);
        var js = await geturl.json();
        var index = Math.floor(Math.random() * js.length);
        textarea.innerText = js[index].text;
        if (js[index].author === null) {
            authorarea.innerText = "anonymous";
        } else {
            authorarea.innerText = js[index].author;
        }

    } catch (err) {
        console.log(err);
    }
}
btn.addEventListener("click", access);