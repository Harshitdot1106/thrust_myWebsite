import React from "react";
import './connect.css';
const Connect =()=>{
    return <>
    <div className="connect">
        <div className="myIDs">
        <h1>Connect with Me</h1>
            <p>I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.</p>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: yourname@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Location: Your City, Country</p>
            </div>
            <div className="social-media">
                <h2>Find me on Social Media</h2>
                <div>
                <a href="https://www.linkedin.com/in/yourprofile" >LinkedIn 
                </a></div>
                <div>
                <a href="https://github.com/yourusername" >GitHub</a></div>
               <div> <a href="https://twitter.com/yourusername" >Twitter</a></div>
            </div>
            <div className ="message">
                <form>
                    <label>NAME:</label>
                    <input type="text" name="name" placeholder="Enter the name" required></input>
                    <label>EMAIL:</label>
                    <input type="email" name="email" placeholder="Enter the email" required></input>
                    <label>message:</label>
                    <input type="text" name="message"  required></input>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    </div>
</>
}
export default Connect