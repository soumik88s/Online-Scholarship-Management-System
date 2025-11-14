import { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import useRole from '../../Hooks/useRole';

const PaymentForm = ({ price, setPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(null)
  const [newIntent, setNewIntent] = useState(true)
  const { user } = useRole()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`https://akademi-university-project.vercel.app/create-payment-intent`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        setClientSecret(data.clientSecret)
      })
      .catch(err => {
        toast.error('Error fetching client secret for payment.')
      })
  }, [newIntent, price])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please log in first!')
      return;
    }
    try {
      setLoading(true)
      const card = elements.getElement(CardElement);

      if (!stripe || !card) {
        return;
      }
      const { error, paymentIntent, } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'Unknown User',
          },
        },
      });

      if (error) {
        toast.error(error.message)
        setPaymentSuccess(false)
      } else if (paymentIntent.status === 'succeeded') {
        document.getElementById("my_modal_6").checked = false
        document.getElementById("my_modal_7").checked = true
        setPaymentSuccess(true)
        toast.success('Payment successful!')
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An unknown error happened. Please try again letter.'
      toast.error(message)
    } finally {
      setLoading(false)
      setNewIntent(!newIntent)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }} />
      <div className='flex mt-5 justify-center items-center gap-5'>
        <button className='btn transition duration-300 hover:bg-[#7CFF77] hover:text-[#14452F] bg-[#185137] text-white px-7' type="submit" disabled={!stripe || loading}>Pay Now{loading && <span className='loading bg-white'></span>}</button>

        <label className='btn transition duration-300 hover:bg-[#b12c2c] hover:text-[#ffffff] bg-[#ff2525] text-white px-7' htmlFor="my_modal_6">close</label>
      </div>
    </form>
  );
};

export default PaymentForm;
