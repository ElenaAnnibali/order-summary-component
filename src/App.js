/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const bgImageStyles = css`
  background: url(/bg-mobile.svg);
  position: absolute;
  width: 375px;
  height: 192px;
`;

const cardStyles = css`
  position: absolute;
  left: 6.4%;
  right: 6.4%;
  top: 8.74%;
  bottom: 21.31%;
  width: 327px;
  height: 568px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(114, 128, 167, 0.25);
  border-radius: 20px;

  img {
    position: relative;
    width: 327px;
    height: 160px;
    border-radius: 20px 20px 0px 0px;
  }

  h1 {
    position: absolute;
    width: 183px;
    height: 36px;
    left: 72px;
    top: 164px;
    font-size: 24px;
    color: #1f2f56;
  }

  p {
    position: absolute;
    width: 274px;
    height: 97px;
    left: 24px;
    top: 220px;
    text-align: center;
  }
`;

const annualPlanStyles = css`
  position: absolute;
  width: 279px;
  height: 80px;
  left: 24px;
  top: 339px;
  background: #f5f7ff;
  border-radius: 8px;

  img {
    position: absolute;
    left: 8.6%;
    right: 74.19%;
    top: 22.5%;
    bottom: 17.5%;
    width: 48px;
    height: 48px;
  }

  .plan {
    position: absolute;
    left: 2.26%;
    right: 35.48%;
    top: 5%;
    bottom: 42.5%;
    color: #1f2f56;
  }

  .price {
    position: absolute;
    left: 2.26%;
    right: 36.2%;
    top: 35%;
    bottom: 13.75%;
    font-weight: 700;
    font-size: 15px;
    line-height: 150%;
  }

  .change {
    position: absolute;
    left: 35.63%;
    right: 4.3%;
    top: 16.25%;
    bottom: 35%;
    font-size: 15px;
    text-decoration-line: underline;
    color: #3829e0;

    :hover {
      color: #655ae8;
    }
  }
`;

const buttonStyles = css`
  position: absolute;
  width: 279px;
  height: 48px;
  left: 24px;
  top: 442px;
  border-width: 0px;

  background-color: #3829e0;
  box-shadow: 0px 15px 15px rgba(56, 41, 224, 0.15);
  border-radius: 8px;
  color: #fff;
  font-family: 'RedHatDisplay', Georgia, serif;
  font-weight: 700;
  font-size: 16px;

  :hover {
    background-color: #655ae8;
  }
`;

const cancelStyles = css`
  position: absolute;
  width: 100px;
  height: 24px;
  left: 114px;
  top: 514px;
`;

function App() {
  return (
    <div>
      <div css={bgImageStyles} />
      <div css={cardStyles}>
        <img
          src="/illustration-hero.svg"
          alt="a draw of young girl listening to music on a blue background with skyscrapers"
        />
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div css={annualPlanStyles}>
          <img src="/icon-music.svg" alt="music icon" />
          <p className="plan">Annual Plan</p>
          <p className="price">$59.99/year</p>
          <p className="change">Change</p>
        </div>
        <button css={buttonStyles}>Proceed to Payment</button>
        <span css={cancelStyles}>Cancel Order</span>
      </div>
    </div>
  );
}

export default App;
