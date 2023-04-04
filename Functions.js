function myFunction() {
    var elem = document.getElementById("string");
    var pattern = document.getElementById("pattern").value;

    const output = document.getElementById("output");
    output.value = "";
    if (elem.value) {
        document.getElementById("alert").style.display = 'none';
        var regex = new RegExp(pattern);
        if (regex.test(elem.value)) {
            output.value = "Pattern matches."
        } else {
            output.value = "Pattern does NOT match."
        }
    } else {
        document.getElementById("alert").style.display = 'block';
    }
}