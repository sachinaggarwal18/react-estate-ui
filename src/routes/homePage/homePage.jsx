import SearchBar from "../../components/searchBar/SearchBar"
import "./homePage.scss"

function homePage (){
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
            <h1 className="title" >Experience the Joy of Finding <span>Your Perfect Place</span></h1>
            <p>Finding the perfect home is more than just a transaction; It’s a journey to discovering a place where memories are made and dreams come true. At Sachin Real Estate, we understand the importance of this journey and are dedicated to guiding you every step of the way. Our experienced team of real estate professionals is committed to providing personalized service.</p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>20+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Satisfied Customers</h2>
                </div>
            </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg2.jpg" alt="" />
      </div>
    </div>
  )
}

export default homePage
