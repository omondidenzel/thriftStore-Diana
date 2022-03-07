import React from "react";
import './footer.css'


const Footer = () => {
    
    return(
        
        <div className="grid-container background">
            <div className="#">
                <h1>About thriftStore</h1>
                <p>Baby, calm down, calm down
                Girl, this your body e put my heart for lockdown
                For lockdown, oh lockdown</p>
            </div>
           
            <div className="grid-containerTwo">
                <div>
                    <h3>Contacts</h3>
                    <p><a href="tel:0748036837">Phone: (+254) 748 036837</a></p>
                    <h1></h1>
                    <p><a href="mailto:omondiakwany@gmail.com">Email: akwany@icloud.com</a></p>
                </div>

                <div>
                    <h3>Recent Tweets</h3>
                    <a class="twitter-timeline" href="https://twitter.com/omondi_denzel?ref_src=twsrc%5Etfw">Tweets by omondi_denzel</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>

                <div>
                    <h3>Sign Up For Our Newletter</h3>
                    <input value="Email Address"></input>
                    <br/>
                    <button>Signup</button>
                </div>
                
            </div>

            <hr></hr>
            
        </div>
    )
}

export default Footer;