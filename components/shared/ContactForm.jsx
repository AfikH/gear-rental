"use client";

const ContactForm = ({className}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        let form = new FormData(e.target);
        
        let name = form.get('name');
        let email = form.get('email');
        let phoneNumber = form.get('phone-number');
        let message = form.get('message');

        if(!name || !email || !phoneNumber || !message){
            // return error
            console.log('Missing input.');
        }

        if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            // return error
            console.log('Invalid email.');
        }
    }

    return(
        <form className={`contact-form ${className}`} onSubmit={e => handleSubmit(e)}>
            <div className="contact-form-intro">
                <span className="contact-form-intro-title">Contact Form</span>
                <span className="contact-form-intro-sub-title">Leave your details and what you&apos;re looking for and we&apos;ll make contact with you.</span>
            </div>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="phone-number" placeholder="Phone Number" />
            <textarea name="message" placeholder="Write your message..."></textarea>
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm;