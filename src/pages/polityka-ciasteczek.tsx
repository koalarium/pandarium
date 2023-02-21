import { HeroSmall } from "../components/Hero/Heroes";
import { XlContainer } from "../components/Global/Containers";
import Footer from "../components/Footer/Footer";

const Cookie = () => {
    return (
        <>
            <HeroSmall variant="0"/>
            <XlContainer className="my-4 md:my-8 xl:my-12">
                <div className="border-purple-300  border-[4px] rounded-3xl p-8 flex flex-col text-justify">

                    <h3 className="font-rubikbold text-2xl md:text-3xl xl:text-4xl text-purple-900 mb-10">Polityka ciasteczek</h3>

                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">What Are Cookies</p>
                    <p className="text-base md:text-lg mb-8">As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.</p>
                    
                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">How We Use Cookies</p>
                    <p className="text-base md:text-lg mb-8">We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>
                   
                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Disabling Cookies</p>
                    <p className="text-base md:text-lg mb-8">You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. This Cookies Policy was created with the help of the <a href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookies Policy Generator</a>.</p>
                    
                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">The Cookies We Set</p>

                    <ul>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Account related cookies</p>
                            <p className="text-base md:text-lg mb-8">If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Login related cookies</p>
                            <p className="text-base md:text-lg mb-8">We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Surveys related cookies</p>
                            <p className="text-base md:text-lg mb-8">From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Forms related cookies</p>
                            <p className="text-base md:text-lg mb-8">When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-2 font-bold text-purple-500">Site preferences cookies</p>
                            <p className="text-base md:text-lg mb-8">In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.</p>
                        </li>

                    </ul>

                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">Third Party Cookies</p>
                    <p className="text-base md:text-lg mb-8">In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>

                    <ul>

                        <li>
                            <p className="text-base md:text-lg mb-8">This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.</p>
                            <p className="text-base md:text-lg mb-8">For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.</p>
                            <p className="text-base md:text-lg mb-8">For more information on Google AdSense see the official Google AdSense privacy FAQ.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">We use adverts to offset the costs of running this site and provide funding for further development. The behavioural advertising cookies used by this site are designed to ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.</p>
                        </li>

                        <li>
                            <p className="text-base md:text-lg mb-8">We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including Facebook, Google, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.</p>
                        </li>

                    </ul>

                    <p className="text-xl md:text-2xl  font-rubikbold text-purple-500 mb-4">More Information</p>
                    <p className="text-base md:text-lg mb-8">Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.</p>
                    <p className="text-base md:text-lg mb-8">For more general information on cookies, please read <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">the Cookies Policy article</a>.</p>
                    <p className="text-base md:text-lg mb-8">However if you are still looking for more information then you can contact us through one of our preferred contact methods:</p>

                    <ul>
                        <li>Email: mateuszkrysiaczek@gmail.com</li>
                    </ul>

                </div>
            </XlContainer>
            <Footer />  
        </>            
    );
}
export default Cookie;  