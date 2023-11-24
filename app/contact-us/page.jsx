import styles from './page.module.css';

const ContactUs = () => (
    <div className="page">
        <div className={styles.pageTitle}>Contact Us</div>
        <div className={styles.contactDetails}>
            <a href="#">
                <img src="/images/icons/phone.svg" alt="Phone Number:" />
                <span>+972 52-123-4567</span>
            </a>
            <a href="#">
                <img src="/images/icons/envelope.svg" alt="Email:" />
                <span>email@example.com</span>
            </a>
        </div>
        <form className={styles.contactForm}>
            <div className={styles.contactFormIntro}>
                <span className={styles.contactFormIntroTitle}>Contact Form</span>
                <span className={styles.contactFormIntroSubTitle}>Leave your details and what you're looking for and we'll make contact with you.</span>
            </div>
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="phone-number" placeholder="Phone Number" />
            <textarea name="message" placeholder="Write your message..."></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
)

export default ContactUs;