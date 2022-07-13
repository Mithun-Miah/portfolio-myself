// contact form validation code start
let send_btn = document.getElementById('formSubmitBtn');

send_btn.addEventListener('click', function(){
    let fullName = document.getElementById('fullName').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    
    if(fullName == '' || subject == '' || message == ''){
        document.write('<p style="text-align:center;">Please Fill The All Fields Correctly...</p> <h2 style="color:red; text-align:center;">Refresh Again to Back...</h2>');
    }
});
// contact form validation code end

// for new window open code start
function openNewWindow(){
    window.open("https://mithundev.xyz/contact-form-bootstrap/thanks.html", "_self");
}
// for new window open code end