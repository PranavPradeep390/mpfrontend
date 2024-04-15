import React from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './search.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




function Search() {
  return (
    <div>
       <Header/>
       <div id='mainbox'>
        <div id='fbox'>
        Search Item : <Form.Control id='sbtn' type="text" placeholder="Search Here..." readOnly />
        <br />

        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" /> Rent
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" /> Sale
        </InputGroup>
        <br />

        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" /> Parking
        </InputGroup>
<br />
        <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" /> Furbished
        </InputGroup><br />


        <Button className='cardbtn'>Search</Button>



        </div>
        <div id='secbox'>

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
  )
}

export default Search