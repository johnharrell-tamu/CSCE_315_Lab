function changeCSS() {
    var curStyle = document.getElementById('css-style').getAttribute("href");
    if (curStyle === "../css/Style1.css") {
        localStorage.setItem("style-type", "2");
        setCSS();
    } else {
        localStorage.setItem("style-type", "1");
        setCSS();
    };
}

function setCSS() {
    var curStyle = localStorage.getItem("style-type");
    if (curStyle === null) {
        document.getElementById('css-style').setAttribute("href", "../css/Style1.css");
    } else if (curStyle === "1") {
        document.getElementById('css-style').setAttribute("href", "../css/Style1.css");
    } else {
        document.getElementById('css-style').setAttribute("href", "../css/Style2.css");
    };
}

setCSS();