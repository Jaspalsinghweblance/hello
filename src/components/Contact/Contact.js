import './Contact.css';
function Contact() {
    return (
        <>
        <form method="" action="" className="cform">
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="tel" className="form-control" />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea className="form-control"></textarea>
            </div>
            <div className="form-submit">
                <input type="submit" value="submit" />
            </div>

        </form>
        </>
    )
 }
 export default Contact;