const menuTrigger = document.querySelector('#menu-btn');
const closeTrigger = document.querySelector('.close');
const giveClass = document.querySelector('.site');

menuTrigger.addEventListener('click', function (){
    giveClass.classList.toggle('showmenu')
})
closeTrigger.addEventListener('click', function(){
    giveClass.classList.remove('showmenu')
})

/* ===================== EMAIL JS ======================== */
const contactForm = document.getElementById('Itebeng-form')
const contactMessage = document.getElementById('contact-message')
const sendMail = (e)=>{
      e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_d2rfxpo', 'template_o9gjywv','#Itebeng-form', 'aH2XWXsT_f5r4vq-1').then(()=>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully!!!'
        // Remove message after 5s
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)
        // Clear the input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })
}
contactForm.addEventListener("submit", sendMail)
