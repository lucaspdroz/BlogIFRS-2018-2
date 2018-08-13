var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 100,
    height: 100,
    useSVG: true
});

function getUrl() {
    var a = window.location.href;
    console.log(a);
}

makeCode();

function makeCode() {
    var elText = window.location.href;
    //   Caso não possua um valor no elemento, retorna exeption
    if (!elText.value) {
        qrcode.makeCode(elText);
    } else {
        qrcode.makeCode("Putz tivemos um problema 😖😨 :'(");
    }
}