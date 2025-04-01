function cleartext() {

    var lablval = "";
    lablval = document.getElementById("Label2").innerHTML;
    //alert("lablel2:" + lablval);
    if (lablval == "") {
        document.getElementById("txtPassword").value = "";
        // alert("Text:" + document.getElementById("txtPassword").value);
    }
}