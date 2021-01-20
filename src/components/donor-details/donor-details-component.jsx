import React from 'react'
//import PaymentButton from '../stripe-component/stripe-component';
import FormComponent from '../../components/form-component/form-component';
import ScriptTag from 'react-script-tag';
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
                <form onSubmit={this.handleSubmit}>
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
                    {/* <FormComponent 
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
                    /> */}
                    
                    
                     <small className='text-muted'>
                        Amount is charged in Indian Rupees(INR), please use the following test data as Card credentials.
                    </small>
                    <small className='text-muted d-block'>
                        Card Number : 4111 1111 1111 1111
                    </small>
                    <small className='text-muted d-block'>
                        Expiry Date : any date from the current date
                    </small>
                    <small className='text-muted d-block pb-2'>
                        CVV : any three digit number 
                    </small>
                    
                    {/* <PaymentButton price={this.state.price}/> */}
                </form>
                <form onClick = {this.handleSubmit}>
                    
                    <ScriptTag src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_GQpHfzGbrBrz4D" async> </ScriptTag> 
                
                </form>
            </div>
        )
    }
}


export default DonorDetails