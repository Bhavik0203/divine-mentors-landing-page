'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface PayPalPaymentProps {
  amount: number;
  onSuccess: (paymentDetails: any) => void;
  onCancel: () => void;
  onError: (error: string) => void;
  bookingData: any;
}

declare global {
  interface Window {
    paypal: any;
  }
}

export default function PayPalPayment({ amount, onSuccess, onCancel, onError, bookingData }: PayPalPaymentProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [paymentError, setPaymentError] = useState('');

  useEffect(() => {
    // Load PayPal script
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD&intent=capture`;
    script.async = true;
    script.onload = () => {
      setIsLoading(false);
      initializePayPal();
    };
    script.onerror = () => {
      setPaymentError('Failed to load PayPal. Please try again.');
      setIsLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializePayPal = () => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount.toString(),
                  currency_code: 'USD'
                },
                description: `Divine Mentors Booking - ${bookingData.mentorName || 'Spiritual Session'}`,
                custom_id: `booking_${Date.now()}`,
                soft_descriptor: 'DivineMentors'
              }
            ],
            application_context: {
              shipping_preference: 'NO_SHIPPING'
            }
          });
        },

        onApprove: async (data: any, actions: any) => {
          try {
            const order = await actions.order.capture();
            
            // Payment successful
            onSuccess({
              orderID: order.id,
              payerID: order.payer.payer_id,
              paymentID: order.purchase_units[0].payments.captures[0].id,
              status: order.status,
              amount: order.purchase_units[0].amount.value,
              currency: order.purchase_units[0].amount.currency_code,
              timestamp: new Date().toISOString()
            });
          } catch (error) {
            console.error('Payment capture error:', error);
            onError('Payment processing failed. Please try again.');
          }
        },

        onCancel: () => {
          onCancel();
        },

        onError: (err: any) => {
          console.error('PayPal error:', err);
          onError('Payment failed. Please try again.');
        }
      }).render('#paypal-button-container');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#576F9F]"></div>
        <span className="ml-3 text-gray-600">Loading payment...</span>
      </div>
    );
  }

  if (paymentError) {
    return (
      <div className="p-6 text-center">
        <div className="text-red-600 mb-4">{paymentError}</div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#576F9F] text-white rounded-md hover:bg-[#4A5F8A] transition-colors"
        >
          Retry Payment
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Your Payment</h3>
        <p className="text-gray-600 mb-4">
          Amount to pay: <span className="font-bold text-[#576F9F]">${amount}</span>
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-medium text-gray-800 mb-2">Booking Summary:</h4>
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Mentor:</strong> {bookingData.mentorName || 'Not specified'}</p>
            <p><strong>Date:</strong> {bookingData.date || 'Not specified'}</p>
            <p><strong>Time:</strong> {bookingData.time || 'Not specified'}</p>
            <p><strong>Name:</strong> {bookingData.name || 'Not specified'}</p>
          </div>
        </div>
      </div>

      <div id="paypal-button-container" className="mb-4"></div>

      <div className="text-center">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          Cancel Payment
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-800 mb-2">Payment Security</h4>
        <p className="text-sm text-blue-700">
          Your payment is secured by PayPal. We never store your payment information.
        </p>
      </div>
    </div>
  );
} 