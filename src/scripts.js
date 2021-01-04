var showing = false;

function showModal() {
    var modal = document.getElementById("modal");
    if (showing) {
        // if already showing
        modal.style.display = 'none';
        showing = false;
    } else {
        // if not showing
        modal.style.display = 'flex';
        showing = true;
    }
}


function changeScreen() {
    // var bodyProp = document.getElementsByTagName("BODY")[0];
    // bodyProp.innerHTML = ""
}


function specificForSystem() {
    console.log(window.navigator.userAgent);
}