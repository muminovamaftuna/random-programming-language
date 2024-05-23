function generateLanguage() {
    var languagesInput = document.getElementById("languages").value;
    var languagesArray = languagesInput.split(",").map(lang => lang.trim());

    if (languagesArray.length === 0 || languagesArray[0] === "") {
        alert("Please enter at least one programming language.");
        return;
    }

    var randomIndex = Math.floor(Math.random() * languagesArray.length);
    var randomLanguage = languagesArray[randomIndex];
    document.getElementById("result").innerText = "Random Programming Language: " + randomLanguage;
}
