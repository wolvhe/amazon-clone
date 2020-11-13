import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWphase4/2DAYS/Phase4_Unrec_PC_Hero_1X_ENGLISH._CB416930067_.jpg"
            />
            <div className="home__row">
                <Product
                    id="12321341"
                    title="Think Like A Monk by Jay Shetty"
                    price={400}
                    rating={5}
                    image="https://d2t3xdwbh1v8qy.cloudfront.net/content/B07Y5S56DK/resources/1271579965"
                />
                <Product
                        id="12321341"
                        title="The Hunger Games Catching Fire by Suzanne Collins"
                        price={265}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/91arRlaZT-L._AC_UY218_.jpg"
                    />
                
            </div>
            <div className="home__row">
                <Product
                        id="12321341"
                        title="OnePlus Nord 5g (Glacier Green 8GB RAM + 128GB Storage)"
                        price={54999}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61n6Ovq6EdL._AC_UL320_.jpg"
                />
                <Product
                        id="12321341"
                        title="Samsung Galaxy Note10 Lite (Aura Black, 8GB RAM, 128GB Storage)"
                        price={36999}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/71nUj6kF+ML._AC_UY218_.jpg"
                />
                <Product
                        id="12321341"
                        title="iPhone 11 New 64G - Purple"
                        price={50999}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY218_.jpg"
                />
                <Product
                        id="12321341"
                        title="Google Pixel 5 5G (Sorta Sage, 8GB RAM, 128GB Storage)"
                        price={81700}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/815ihLrHsTL._AC_UY218_.jpg"
                />
            </div>
            <img
            className="home__imageBottom"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/SNS/DYK/Generic/DID_440_200._CB1198675309_.jpg"
            />
            <div className="home__row">
                <Product
                        id="12321341"
                        title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
                        price={179990}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY218_.jpg"
                    />
                    <Product
                        id="12321341"
                        title="Dell Inspiron i3277(Intel 7th Generation Core i3 7130u / 4GB / 1TB)"
                        price={2110}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51jIHPsUtUL._AC_UY218_.jpg"
                    />
                    <Product
                    id="12321341"
                    title="Acer Nitro 5 Intel Core i5-9th Gen (8GB Ram+16GB Optane/1TB HDD/GTX 1650 Graphics)"
                    price={53990}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71QXJg8uOCL._AC_UY218_.jpg"
                    />
                    
            </div> 
            <div className="home__row">
                <Product
                        id="12321341"
                        title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawidescreen"
                        price={64999}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UL320_.jpg"
                    />
            </div> 
            <div className="home__row">
                <Product
                        id="12321341"
                        title="Amazon Brand - Symbol
                        Men's Slim Fit Shirt"
                        price={379}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/9100+O4vuuL._AC_UL320_.jpg"
                />
                <Product
                        id="12321341"
                        title="Urbano Fashion
                        Men's Black Slim Fit Denim Jeans Stretchable"
                        price={1360}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/51UlwkHPtmL._AC_UL320_.jpg"
                />          
            </div>
            
            
            
                        
        </div>
    )
}

export default Home
