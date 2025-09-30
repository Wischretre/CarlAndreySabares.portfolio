function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value.toUpperCase(),
        message : document.getElementById("message").value
    }

    emailjs.send("service_aika6ob","template_uld8ype",parms).then(alert("✅ Email Sent Successfully!"))

}