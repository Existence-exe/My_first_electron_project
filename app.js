const names = document.getElementById("name_input");
const pwords = document.getElementById("pword_input");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.responseText);
    }
}

function CallApi() {
    let url = 'http://127.0.0.1:5000/'
    fetch('./backEnd/data.json').then(x => x.json()).then(data => {
        let name = names.value
        let pword = pwords.value
        if (data[name]) {
            console.log("User predefined")
        } else {
            url += (name + '+' + pword)
            console.log(url)
            xhttp.open('GET', url, true)
            xhttp.send()
        }
    });
}