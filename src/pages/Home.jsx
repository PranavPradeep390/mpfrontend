import React from 'react'
import './home.css'
import Header from './Header'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <Header/>
   <div id='firstbox'>
    <h1>Find your next <span style={{color:"black",fontSize:"80px"}}>perfect </span><br /> place with ease</h1>
    <br />
    <p>EpicEstateHub will help you find your home fast, easy and comfortable.
      <br />Our expert support are always available.</p>
      <br />
    <Link to={'/search'}style={{textDecoration:'none'}}> <h4>Lets Starts Now...</h4></Link>

   </div>

   <div id='sbox'>
    <div className='sboxes'>
<h2><i>Recent offers</i></h2>
<p>Show More Offers</p>
  <div className='sboxin'>
  
  <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>



        
  </div>
    </div>

    <div className='sboxes'>
<h2><i>Recent places for rent</i></h2>
<p>Show More Offers</p>
  <div className='sboxin'>
  
  <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>



        
  </div>
    </div>

    <div className='sboxes'>
<h2><i>Recent places for sale</i></h2>
<p>Show More Offers</p>
  <div className='sboxin'>
  
  <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>

        <Card className='cards'>
        <Card.Img className='cardimg'  src="https://img.freepik.com/premium-vector/real-estate-logo-design_260747-324.jpg?w=2000" />
        <Card.Body className='crdbody'>
         <h2><i>Real estate</i></h2>
         <Card.Text style={{margin:"5px"}}>
          FOR RENT / SALE
          </Card.Text>
          <Button className='cardbtn'>Check Details</Button>
        </Card.Body>
        </Card>



        
  </div>
    </div>
   

   </div>
    </>
  )
}

export default Home