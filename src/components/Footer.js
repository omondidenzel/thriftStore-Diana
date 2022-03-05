import React from "react";
import './footer.css'


const Footer = () => {
    return(
        <div className="grid-container">
            <div className="#">
                <h1>About thriftStore</h1>
                <p>Baby, calm down, calm down
                Girl, this your body e put my heart for lockdown
                For lockdown, oh lockdown</p>
            </div>
           
            <div className="grid-containerTwo">
                <div>
                    <h1>Contacts</h1>
                    <p><a href="tel:0748036837">Call Us</a></p>
                    <h1></h1>
                    <p><a href="mailto:omondiakwany@gmail.com">Email Us</a></p>
                </div>

                <div>
                    <h1>Contacs</h1>
                    <p>0748036837</p>
                </div>

                <div>
                    <h1>Tweep</h1>
                    <a class="twitter-timeline" href="https://twitter.com/omondi_denzel?ref_src=twsrc%5Etfw">Tweets by omondi_denzel</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
                
            </div>
           
        </div>
    )
}

export default Footer;