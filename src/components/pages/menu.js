import React from 'react'
import '../styles/Testimonials.scss'
import testi from '../assets/testi.png'
import b1 from '../assets/1.png'
import b2 from '../assets/2.png'
import b3 from '../assets/3.png'



const Testimonials = () => {
    return (
        <section className='testimonials'>

        <div className="grid__testimonials">
            <div className="testimonials__container">
                
                    <div className="test__card">
                        <img src={testi} alt="" />
                        <div className="test__card__menu">
                            <h2>BURGERS</h2>
                            <h4>Served with hand-cut fries, Kettle Chips, potato salad, or coleslaw </h4>
                            <h3>Hamburger  8.25</h3>
                            <h5>fresh ground beef with mustard, mayo, lettuce, tomato, pickle, onion</h5>
                             
                            <h3>Bacon Cheeseburger 8.50</h3>
                            <h5>fresh ground beef, hickory bacon, Swiss, mozzarella, or cheddar</h5>
                             
                            <h3>Veggie Burger 7.00</h3>
                            <h5>tomato, onion, lettuce, garlic mayo</h5>
                             
                            <h3>Organic Sirloin Burger 9.50</h3>
                            <h5>with sharp cheddar, heirloom tomatoes & caramelized onions</h5>
                             
                            <h3>Mushroom Swiss Burger 10.25</h3>
                            <h5>with sautéed mushrooms & melted Swiss on a home-baked roll</h5>
                             
                            <h3>Bison Burger 10.75</h3>
                            <h5>grass-fed organic bison with avocado, sprouts & tangy house dressing</h5>
                             
                            <h3>Chicken Burger 9.75</h3>
                            <h5>grilled chicken breast with heirloom tomatoes, avocado, tomato & fresh mozzarella on a home-baked roll</h5>
                             
                            <h3>Lamb Burger 10.75</h3>
                            <h5>grilled lamb patty with mint aioli, fresh cucumbers & dill on a home-baked roll</h5>

                        </div>
                    </div>

                    <div className="test__img">
                        <img src={b1} alt="" /> 
                        <br></br>
                        <img src={b2} alt="" /> 
                        <br></br>
                        <img src={b3} alt="" />
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Testimonials
