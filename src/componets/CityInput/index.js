import React from 'react';
import {Form ,Button, Container} from 'react-bootstrap';

const CityInput = ({city,setCity ,fetchCityWeather}) => {
    const [error,setError] = React.useState("");
    //const [city,setCity] = React.useState("");
    const handleInputChange=(event) =>{
        setCity(event.target.value);
    };
    const handleSumbit=() =>{
        if(!city){
            setError("city field is empty");
        }else{
            setError("");
            //make api call ;
            fetchCityWeather()
        }
    };

    return (
   <Container>
    <Form>
    <Form.Group controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control value = {city} type="text" placeholder="Enter city"  onChange = {handleInputChange} />
        <p className = "text-danger">{Error}</p>
    </Form.Group>
    <Button variant="primary" type="button" onClick = {handleSumbit}>
        Submit
    </Button>
  </Form> 
  </Container> 
    );
};

export default CityInput;




// import { Button } from 'react-bootstrap';
// import React from './node_modules/react'
// import {Form,Button} from "./node_modules/react-bootstrap"

// const CityInput = () =>{
// return (
//     <Form>
//         <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//         </Form.Group>
//         <Form.Group controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//             Submit
//         </Button>
//     </Form>  
// )
// }


// export default CityInput