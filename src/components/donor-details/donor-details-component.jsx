import React from 'react'
import PaymentButton from '../stripe-component/stripe-component';
import FormComponent from '../../components/form-component/form-component';

class DonorDetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name: '',
            address: '',
            price: '',
            contact: ''
        }   

    }

    handleSubmit = e =>
    {
        e.preventDefault();
        this.setState({name:'',address:'',price:'',contact:''})
    }

    handleChange = e =>
    {
        const {name,value} = e.target
        this.setState({[name]:value});
    }

    
    render()
    {
        return(
            <div className='donor-details'>
                <form onSubmit ={this.handleSubmit}>
                    <FormComponent 
                        name = 'name'
                        type= 'text'
                        label='NAME'
                        value = {this.state.name}
                        handleChange = {this.handleChange}
                        required
                    />
                    <FormComponent 
                        name = 'address'
                        type= 'text'
                        label='ADDRESS'
                        value = {this.state.address}
                        handleChange = {this.handleChange}
                        required
                    />
                    <FormComponent 
                        name = 'contact'
                        type= 'text'
                        label='CONTACT NUMBER :'
                        value = {this.state.contact}
                        handleChange = {this.handleChange}
                        required
                    />
                    <FormComponent 
                        name = 'price'
                        type= 'text'
                        label='AMOUNT'
                        value = {this.state.price}
                        handleChange = {this.handleChange}
                        required
                    />
                    <PaymentButton price={this.state.price}/>
                </form>
            </div>
        )
    }
}


export default DonorDetails