import React from "react";
import {
  FaShoppingBag,
  FaPhone,
  FaGlobe,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaRegCommentDots,
  FaBirthdayCake,
  FaUserFriends,
  FaPenAlt,
} from "react-icons/fa";
import { FaTruck, FaPercentage, FaGift, FaStar } from "react-icons/fa";
import iconloyalty from "../assets/Loyalty.svg";
import "./loyalty.css";

function LoyaltyReward() {
  const pointsData = [
    {
      icon: <FaShoppingBag className="loyalty__point-item-icon" />,
      text: "Make a purchase",
      points: "150 points",
    },
    {
      icon: <FaPhone className="loyalty__point-item-icon" />,
      text: "Contact Us",
      points: "100 points",
    },
    {
      icon: <FaGlobe className="loyalty__point-item-icon" />,
      text: "Visit Website",
      points: "25 points",
    },
    {
      icon: <FaFacebookF className="loyalty__point-item-icon" />,
      text: "Follow us on Facebook",
      points: "100 points",
    },
    {
      icon: <FaInstagram className="loyalty__point-item-icon" />,
      text: "Follow us on Instagram",
      points: "100 points",
    },
    {
      icon: <FaEnvelope className="loyalty__point-item-icon" />,
      text: "Subscribe to our mailing list",
      points: "100 points",
    },
    {
      icon: <FaRegCommentDots className="loyalty__point-item-icon" />,
      text: "Write a product review",
      points: "100 points",
    },
    {
      icon: <FaBirthdayCake className="loyalty__point-item-icon" />,
      text: "Happy birthday",
      points: "250 points",
    },
    {
      icon: <FaUserFriends className="loyalty__point-item-icon" />,
      text: "​Recommend to friends",
      points: "500 points",
    },
    {
      icon: <FaPenAlt className="loyalty__point-item-icon" />,
      text: "Review on your social media",
      points: "150 points",
    },
  ];

  const rewardsData = [
    {
      icon: <FaTruck className="loyalty__reward-item-icon" />,
      text: "Free shipping",
      points: "500 points",
    },
    {
      icon: <FaPercentage className="loyalty__reward-item-icon" />,
      text: "5% Discount",
      points: "1000 points",
    },
    {
      icon: <FaPercentage className="loyalty__reward-item-icon" />,
      text: "10% Discount",
      points: "2,500 points",
    },
    {
      icon: <FaGift className="loyalty__reward-item-icon" />,
      text: "Free 100GB cloud storage",
      points: "3,500 points",
    },
    {
      icon: <FaPercentage className="loyalty__reward-item-icon" />,
      text: "25% Discount",
      points: "7000 points",
    },
    {
      icon: <FaStar className="loyalty__reward-item-icon" />,
      text: "Free 1x services",
      points: "10,000 points",
    },
  ];

  const tiersData = [
    {
      tier: "Bronze",
      points: "1000 Points",
      benefits: ["• Free Shipping Hard Copy Product.", "• 5% Discount."],
      tierNumber: 1,
    },
    {
      tier: "Silver",
      points: "5000 Points",
      benefits: [
        "• Free Shipping Hard Copy Product.",
        "• 15% Discount.",
        "• Free 100GB Cloud Storage.",
      ],
      tierNumber: 2,
    },
    {
      tier: "Gold",
      points: "10,000 Points",
      benefits: [
        "• Free Shipping Hard Copy Product.",
        "• 40% Discount.",
        "• Free 100GB Cloud Storage.",
        "• Free 1x Services.",
      ],
      tierNumber: 3,
    },
  ];

  return (
    <div className="loyalty-reward">
      <div
        className="loyalty-reward__section"
        style={{ justifyContent: "center" }}
      >
        <img
          src={iconloyalty}
          alt="iconloyalty"
          className="loyalty-reward__icon"
          style={{ height: "80px" }}
        />
        <h1
          className="loyalty-reward__title fw-bold"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "50px",
            margin: "20px 0",
          }}
        >
          Loyalty Rewards
        </h1>
        <div className="loyalty-reward__content">
          <p className="loyalty-reward__text">
            Pemesanan pertama akan mendapatkan{" "}
            <span className="loyalty-reward__highlight">150 poin</span>. <br />
            Jangan lupa kumpulkan poin yang kamu dapatkan dan tukar dengan
            hadiah. <br /> Tunggu apalagi ? Yuk, mulai perjalanan digital kamu
            bersama VisioBlend !
          </p>
          <div className="loyalty-reward__divider"></div>
          {/* <button className="loyalty-reward__button">Shop now</button> */}
        </div>
      </div>

      <div className="loyalty-reward__scroll-container">
        <section className="loyalty-reward__section-container">
          <h2 className="loyalty-reward__section-title fw-bold">Earn Points</h2>
          <div className="loyalty-reward__earn-points-container">
            {pointsData.map((item, index) => (
              <div key={index} className="loyalty-reward__point-item">
                {item.icon}
                <p className="loyalty-reward__point-item-text">{item.text}</p>
                <p className="loyalty-reward__point-item-points">
                  {item.points}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="loyalty-reward__section-container">
          <h2 className="loyalty-reward__section-title fw-bold">Rewards</h2>
          <div className="loyalty-reward__earn-points-container">
            {rewardsData.map((item, index) => (
              <div key={index} className="loyalty-reward__point-item">
                {item.icon}
                <p className="loyalty-reward__point-item-text">{item.text}</p>
                <p className="loyalty-reward__point-item-points">
                  {item.points}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="loyalty-reward__section-container">
          <h2 className="loyalty-reward__section-title fw-bold">Tiers</h2>
          <div className="loyalty-reward__tiers-container">
            {tiersData.map((tier, index) => (
              <div
                key={index}
                className={`loyalty-reward__tier-item loyalty-reward__tier-${tier.tier.toLowerCase()}`}
              >
                <div className="loyalty-reward__tier-header">
                  <p className="loyalty-reward__tier-number">
                    {tier.tierNumber}
                  </p>
                  <h3 className="loyalty-reward__tier-title">{tier.tier}</h3>
                  <p className="loyalty-reward__tier-points">{tier.points}</p>
                </div>
                <div className="loyalty-reward__tier-benefits">
                  <p className="loyalty-reward__benefit-label">Benefit :</p>
                  {tier.benefits.map((benefit, i) => (
                    <p key={i} className="loyalty-reward__benefit">
                      {benefit}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="loyalty-reward__section-container">
        <h2 className="loyalty-reward__section-title fw-bold">
          Claim Your Rewards
        </h2>
        <div className="loyalty-reward__form-container">
          <form className="loyalty-reward__form">
            <div className="loyalty-reward__input-row">
              <input
                type="text"
                className="loyalty-reward__input loyalty-reward__input--half-width"
                placeholder="First name"
              />
              <input
                type="text"
                className="loyalty-reward__input loyalty-reward__input--half-width"
                placeholder="Last name"
              />
            </div>
            <input
              type="email"
              className="loyalty-reward__input"
              placeholder="Email"
            />
            <input
              type="text"
              className="loyalty-reward__input"
              placeholder="Phone number"
            />
            <textarea
              className="loyalty-reward__textarea"
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="loyalty-reward__submit-button">
              Claim Your Rewards
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
export default LoyaltyReward;
