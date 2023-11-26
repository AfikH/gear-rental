import styles from './page.module.css';
import ContactForm from '../../components/shared/ContactForm';

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
        <ContactForm />
    </div>
)

export default ContactUs;