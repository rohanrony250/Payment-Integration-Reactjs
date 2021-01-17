import React from 'react'
import './stripe-styles.scss'
import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'react-bootstrap';


const PaymentButton = ({price}) =>
{
    const PublishableKey = 'pk_test_51IAFMbDYKI7yj4wxU7tgymRL3RlIJsb9sy4CMmt1HkwMOGM3xdFD9RbZNSJFRPZy10mzLEKK7iM3ppij2FYH7xnW00mbNxeUEX'
    const StripeAmount = price*100;
    const onToken = token =>
    {
        console.log(token);
        alert('Donation Successful! :)');
    }
    return(
        <div>
            <StripeCheckout 
                name='GRIP DONOR'
                description={`TOTAL AMOUNT : $${price!=0?price:0}.00`}
                token = {onToken}
                stripeKey = {PublishableKey}
                amount = {StripeAmount}
                currency='USD'
                allowRememberMe = {false}
            >
                <Button variant='outline-light' block>
                    <p className='button1'>
                        DONATE
                    </p>
                </Button>
            </StripeCheckout>

            <small className='text-muted'>
                Amount is charged in U.S Dollars, please use the following test data as Card credentials.
            </small>
            <small className='text-muted d-block'>
                Card Number : 4242 4242 4242 4242
            </small>
            <small className='text-muted d-block'>
                Expiry Date : any date from the current date
            </small>
            <small className='text-muted d-block'>
                CVC : 123
            </small>
        </div>
        
            
        
    )
}

export default PaymentButton;