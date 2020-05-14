import React, {useState} from 'react';
import MaskedInput from 'react-text-mask';
import Toggle from 'react-toggle';
import { createNumberMask } from 'text-mask-addons';
import { 
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    Form, 
    FormGroup, 
    Label, 
    Input,
    Button,
    HeaderMain
} from './../../components';

const currencyMask = createNumberMask({ prefix: 'Rp. ' });

const CreateProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [active, setActive] = useState(false)

    return (
    <Container>
        <HeaderMain 
            title="Create Product"
            className="mb-5 mt-4"
        />
        <Row className="mb-5">
            <Col lg={ 12 }>
                <Card>
                    <CardBody>
                        <CardTitle tag="h6" className="mb-4">
                            Product Information
                        </CardTitle>
                            { /* START Form */}
                            <Form>
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="input" sm={3}>
                                        Name
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="text" 
                                            name="name" 
                                            id="input" 
                                            placeholder="" 
                                            onChange={(e)=>setName(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPrice" sm={3}>
                                        Price
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="Number" 
                                            name="price" 
                                            id="inputPrice"
                                            tag={ MaskedInput }
                                            mask={ currencyMask }
                                            onChange={(e)=>setPrice(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="category" sm={3}>
                                        Category
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="category" 
                                            id="category" 
                                            onChange={(e)=>setCategory(e.target.value)}
                                        >
                                            <option defaultValue="" disabled>Select Category</option>
                                            <option>Food</option>
                                            <option>Drink</option>
                                            <option>Dessert</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}                               
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="description" sm={3}>
                                        Description
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="description" 
                                            placeholder="Enter description..." 
                                            onChange={(e)=>setDescription(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Label for="active" sm={3}>
                                        Available
                                    </Label>
                                    <Col sm={9}>
                                        <Toggle
                                            id="active"
                                            defaultChecked={active} 
                                            onChange={() => setActive(!active)}/>
                                    </Col>
                                </FormGroup>

                                <Button color="primary">Create</Button>
                            </Form>
                            { /* END Form */}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
)};

export default CreateProduct;