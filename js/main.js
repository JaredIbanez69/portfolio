function appendMailTo(){
    let message = document.getElementById("mailMessage").value;
    let subject = document.getElementById("mailSubject").value;
    console.log(subject);
    console.log(message);

    let mailToAttr = document.getElementById("sendMail");
    mailToAttr.setAttribute("href", "mailto:josh.aclan@gmail.com?subject="+subject+"&body="+message);
}