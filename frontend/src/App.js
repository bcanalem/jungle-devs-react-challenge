import './styles/App.css';
import Badge from './images/Badge.svg';
import PlayButton from './images/Play button.svg';
import ProfileImage from './images/3ee1d7a99b08f4684290bf4c91bd6fd4.png';
import GetStartedSectionImage from './images/ImageSection1.png';
import PaymentSectionImage from './images/ImageSection3.png';
import DailyDiarySectionImage from './images/ImageSection5.png';
import Calendar from './images/Icon.svg';
import Logo from './images/Logo.svg';
import Instagram from './images/Instagram.svg';
import Facebook from './images/Facebook.svg';
import Twitter from './images/Twitter.svg';

function App() {
  return (
    <div className="body">
      <header>
        <div className="header-top">
          <img src={Badge} alt="Hapu Badge" id="badge" />
          <button>Become a Nanny Share Host</button>
        </div>
        <div>
          <h2>Easily create or join a local nanny share with Hapu</h2>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and
            create new flexible, affordable solutions in childcare.
          </p>
        </div>
        <div className="div-play-button">
          <img src={PlayButton} alt="Play Button" />
          <a href="">See hapu in action (27 seconds)</a>
        </div>
      </header>
      <main>
        <div className="available-nanny-section">
          <img
            src={ProfileImage}
            alt="Nanny Profile"
            className="profile-image"
          />
          <a href="">Sarah’s day care available now in North Sydney</a>
          <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
        </div>
        <div className="get-started-section">
          <img src={GetStartedSectionImage} alt="Get Started Image" />
          <h3>Share your home, nanny and costs</h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <a href="">Hapu means tribe</a> and it’s our foundational 3
            tribal principles that empowers you to create and manage your own
            tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
          <a href="">Ready to get started?</a>
        </div>
        <hr />
        <div className="form-section">
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
          <form>
            <input type="text" className="input" placeholder="Your name" />
            <input type="email" className="input" placeholder="Your email" />
            <input type="submit" className="button" value="Send" />
          </form>
        </div>
        <hr />
        <div className="payment-section">
          <img src={PaymentSectionImage} alt="Shared payments" />
          <h3>Shared payments made simple</h3>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need enver talk
            money or who owes what.
          </p>
          <a href="">Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
        <hr />
        <div className="about-app-section">
          <h3>A framework built for the long term</h3>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <a href="">Read how Hapu’s tribal background defines our app </a>
        </div>
        <hr />
        <div className="daily-diary-section">
          <img src={DailyDiarySectionImage} alt="Daily Diary" />
          <h3>Coming soon: Nanny Share Daily Diary!</h3>
          <p>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </div>
      </main>
      <footer>
        <h3>Become a nanny share host</h3>
        <p>Takes less than 5 minutes to get started</p>
        <button className="purple-button">
          <img src={Calendar} alt="Calendar icon" />
          <div>
            <span className="medium">Create Your Nanny Share</span>
            <span className="x-small">Takes less than 5 minutes</span>
          </div>
        </button>
        <a href="">Or browse local nanny-shares</a>
        <img src={Logo} alt="Hapu Logo" className="logo" />
        <div className="footer-menu">
          <a href="" className="h5">
            Share Your Nanny
          </a>
          <a href="" className="h5">
            Our Story
          </a>
          <a href="" className="h5">
            Blog
          </a>
          <a href="" className="h5">
            Terms & Privacy
          </a>
        </div>
        <div className="social-buttons">
          <button>
            <img src={Facebook} alt="Facebook Button" />
          </button>
          <button>
            <img src={Twitter} alt="Twitter Button" />
          </button>
          <button>
            <img src={Instagram} alt="Instagram Button" />
          </button>
        </div>
        <hr />
        <p className="x-small">
          Copyright © 2017 Hapu PTY Limited All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
