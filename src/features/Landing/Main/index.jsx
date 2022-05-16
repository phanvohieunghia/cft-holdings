import React from 'react'

import './style.scss'
import Icons from 'assets/icons'

const Main = () => {
  return (
    <>
      <nav className="row1">
        <div className="container">
          <div className="col-6">
            <h2>
              Invest for Future in
              <br />
              Stable Platform
              <br />
              <span>and Make Fast Money</span>
            </h2>
            <div className="content">
              Invest in an Industry Leader, Professional, and Reliable Company.
              We provide you with the most necessary features that will make
              your experience better. Not only we guarantee the fastest and the
              most exciting returns on your investments, but we also guarantee
              the security of your investment.
            </div>
            <div className="btn">
              <button>Sign up</button>
            </div>
          </div>
          <div className="col-6">
            <img src={require('assets/img/main/row1.png')} alt="error png" />
          </div>
        </div>
      </nav>
      <nav className="row2">
        <div className="container">
          <div className="item col-3">
            <div className="number">1,070</div>
            <div className="text">MEMBERS INVESTED</div>
          </div>
          <div className="item col-3">
            <div className="number">$157,368.91</div>
            <div className="text">PROFIT PAID</div>
          </div>
          <div className="item col-3">
            <div className="number">$651,800.00</div>
            <div className="text">INVESTMENT FUND VALUE</div>
          </div>
          <div className="item col-3">
            <div className="number">84 Days</div>
            <div className="text">TIME RUNNING PRODUCT</div>
          </div>
        </div>
      </nav>
      <nav className="row3">
        <div className="container">
          <div className="item col-6">
            <img src={require('assets/img/main/row3.png')} alt="error png" />
          </div>
          <div className="item col-6">
            <h2>
              About <span>Us</span>
            </h2>
            <div className="content">
              We provide you with the most necessary features that will make
              your experience better. Not only we guarantee the fastest and the
              most exciting returns on your investments, but we also guarantee
              the security of your investment.
            </div>
          </div>
        </div>
      </nav>
      <nav className="row4">
        <div className="container">
          <div className="left col-6">
            <h2>
              Five-year investment plan
              <br />
              <span>2022-2026</span>
            </h2>
            <div className="item">
              <img
                src={require('assets/img/main/row4-bullet.png')}
                alt="error png"
              />
              January 2022: Launching the project
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row4-bullet.png')}
                alt="error png"
              />
              April 2022: CFT token value doubled
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row4-bullet.png')}
                alt="error png"
              />
              June 2022: CFT token value reaches 6$ and is present on 3 major
              token markets
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row4-bullet.png')}
                alt="error png"
              />
              Launch of CFT Token Swap function for valuable coins on reputable
              Swap platforms
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row4-bullet.png')}
                alt="error png"
              />
              December 2022: Bringing CFT Token to the top 3 exchanges in the
              world.
            </div>
          </div>
          <div className="right col-6">
            <div className="item col-4">2022</div>
            <img
              src={require('assets/img/main/row4-img.png')}
              alt="error png"
            />
          </div>
        </div>
      </nav>
      <nav className="row5">
        <div className="container">
          <div className="item1">
            <div className="left col-4">
              <img src={require('assets/img/main/row5.png')} alt="" />
            </div>
            <div className="right col-8">
              <h2>CEO : Mark Butcher</h2>
              <div className="content">
                Nationality: British
                <br />
                Master Degree in Finance &#38; Business Administration
                University of Cambridge
                <br />
                <br />
                Utilizing many of the same tactics commonly used today. From my
                then unprecedented guerrilla operating and branding techniques
                to the continuously innovative ways in which I use brand
                integration, and remain a cutting edge business strategist.
              </div>
            </div>
          </div>
          <div className="item2">
            <div className="left col-6">
              <h2>Journey to us</h2>
              <div className="content">2010 - 2016</div>
              <div className="content">
                Co-founder - The Shark Group In a world saturated with marketing
                and advertising companies, The Shark Group distinguishes itself
                through non-traditional and innovative approaches in raising
                product awareness, while engaging the target audience and
                stirring emotion in consumers through entertainment.
              </div>
              <div className="content">2017 - 2020</div>
              <div className="content">
                Managing Partner - ARK Group Since 2017, ARK Group is offering
                sustainable food, eco-friendly packaging solutions and single
                use plastics alternatives. Safe, healthy and green are the
                values we cherish to protect our environment and lives from the
                pressure of globalization. Thanks to modern tools, remote
                communities can now share their traditions and natural
                delicacies
              </div>
            </div>
            <div className="right col-4">
              <div className="item title">
                <span className="text">Skills</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">English</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Leadership</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Strategic Planning</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Management</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Marketing &#38; Sale</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Critical Thinking</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Financial Analysis</span>
                <Rating />
              </div>
              <div className="item">
                <span className="text">Excutive Operating</span>
                <Rating />
              </div>
            </div>
          </div>
          <div className="item"></div>
        </div>
      </nav>
      <nav className="row6">
        <div className="container">
          <div className="left col-5">Swiper</div>
          <div className="right col-6">
            <h2>
              Hello, we are <span>BOT Trader</span>
            </h2>
            <div className="content">
              We are financial experts in the financial sector for more than 7
              years. With the ability to analyze and grasp the market through
              news and the desire to support everyone, we and our teammates have
              created a Semi Auto BOT with the ability to reduce risks and bring
              sustainable profit streams.
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row6-icon.png')}
                alt="error png"
              />
              <span className="text">
                BOT helps customers generate sustainable cash flow
              </span>
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row6-icon.png')}
                alt="error png"
              />
              <span className="text">
                Stable investment return from 9-15% per month
              </span>
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row6-icon.png')}
                alt="error png"
              />
              <span className="text">
                Help customers save effort, time and health
              </span>
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row6-icon.png')}
                alt="error png"
              />
              <span className="text">
                Customers can learn how to manage their finances smarter
              </span>
            </div>
            <div className="item">
              <img
                src={require('assets/img/main/row6-icon.png')}
                alt="error png"
              />
              <span className="text">
                Customers can learn investment thinking through BOT
              </span>
            </div>
            <div className="btn">
              <button className="signup">Sign up</button>
              <button className="joinnow">Join now</button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="row7">
        <div className="container">
          <h2>
            Why Choose <span>Us</span>
          </h2>
          <div className="content">
            We create a convenient, professional investment environment for
            individual
            <br />
            and institutional investors as well as provide optimal financial s
            <br />
            olutions for corporate customers.
          </div>
          <div className="container">
            <div className="row">
              <Item path="row7-icon1.png" />
              <Item path="row7-icon2.png" />
              <Item path="row7-icon3.png" />
            </div>
            <div className="row">
              <Item path="row7-icon4.png" />
              <Item path="row7-icon5.png" />
              <Item path="row7-icon6.png" />
            </div>
          </div>
          <div className="btn">
            <button>Join us</button>
          </div>
        </div>
      </nav>
      <nav className="row8">
        <div className="container">
          <h2>
            How we make <span>money for you</span>
          </h2>
          <div className="content">
            Get involved in our tremendous platform and Invest. We will utilize
            your
            <br />
            money and give you profit in your wallet automatically.
          </div>
          <div className="container">
            <Item2 path="row8-icon1.png" number="01" title="Create Account" />
            <Item2 path="row8-icon2.png" number="02" title="Invest To Plan" />
            <Item2 path="row8-icon3.png" number="03" title="Get Profit" />
          </div>
        </div>
      </nav>
      <nav className="row9">
        <div className="container">
          <h2>Free Consultation</h2>
          <div className="content">
            Enter your email for a free consultation
          </div>
          <div className="form">
            <div className="username col-6">
              <input type="text" placeholder="Email (Required)" />
            </div>
            <div className="phone col-6">
              <input
                type="text"
                placeholder="Phone number (Optional - Suggest Telegram)"
              />
            </div>
            <div className="btn">
              <button>Get a free consultation</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
const Rating = () => {
  return (
    <span className="rating">
      <Icons.Star height={'24'} />
      <Icons.Star height={'24'} />
      <Icons.Star height={'24'} />
      <Icons.Star height={'24'} />
      <Icons.Star height={'24'} />
    </span>
  )
}
const Item = ({ path }) => {
  return (
    <div className="wrapper col-3">
      <div className="item">
        <div className="title">
          <img src={require(`assets/img/main/${path}`)} alt="error" />
          &nbsp;Legal Company
        </div>
        <div className="content">
          Our company conducts absolutely legal activities in the legal field.
          We are certified to operate investment business, we are legal and
          safe.
        </div>
      </div>
    </div>
  )
}
const Item2 = ({ path, title, number }) => {
  return (
    <div className="item col-3">
      <div className="circle">
        <img src={require(`assets/img/main/${[path]}`)} alt="error png" />
        <div className="step">{number}</div>
      </div>
      <div className="title">{title}</div>
    </div>
  )
}
export default Main
