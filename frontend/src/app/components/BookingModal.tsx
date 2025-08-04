'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PayPalPayment from './PayPalPayment';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingFormData {
  name: string;
  date: string;
  time: string;
  email: string;
  contact: string;
  message: string;
  mentorName: string;
  address: string;
  postalCode: string;
  city: string;
  demo1: string;
  demo2: string;
  demo3: string;
  demo4: string;
  demo5: string;
}

const mentors = [
  'Swami Pratik',
  'Acharya Shyam Chetan',
  'Naga Baba',
  'RAM Baba'
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<any>(null);
  const [sessionAmount] = useState(99); // Default session amount in USD

  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    date: '',
    time: '',
    email: '',
    contact: '',
    message: '',
    mentorName: '',
    address: '',
    postalCode: '',
    city: '',
    demo1: '',
    demo2: '',
    demo3: '',
    demo4: '',
    demo5: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Clean up form data - convert empty strings to null
    const cleanedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key, 
        value === '' ? null : value
      ])
    );

    // Show payment screen instead of directly creating booking
    setShowPayment(true);
  };

  const handlePaymentSuccess = async (paymentDetails: any) => {
    setIsLoading(true);
    setError('');

    // Clean up form data - convert empty strings to null
    const cleanedFormData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [
        key, 
        value === '' ? null : value
      ])
    );

    // Add payment information to booking data
    const bookingWithPayment = {
      ...cleanedFormData,
      paymentDetails: {
        orderID: paymentDetails.orderID,
        payerID: paymentDetails.payerID,
        paymentID: paymentDetails.paymentID,
        amount: paymentDetails.amount,
        currency: paymentDetails.currency,
        status: paymentDetails.status,
        timestamp: paymentDetails.timestamp
      }
    };

    try {
      const response = await fetch('http://localhost:3001/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingWithPayment),
      });

      const result = await response.json();

      if (response.ok) {
        setPaymentDetails(paymentDetails);
        setSuccess(true);
        setFormData({
          name: '',
          date: '',
          time: '',
          email: '',
          contact: '',
          message: '',
          mentorName: '',
          address: '',
          postalCode: '',
          city: '',
          demo1: '',
          demo2: '',
          demo3: '',
          demo4: '',
          demo5: ''
        });
        setTimeout(() => {
          setSuccess(false);
          setShowPayment(false);
          setPaymentDetails(null);
          onClose();
        }, 3000);
      } else {
        setError(result.message || 'Failed to create booking');
        setShowPayment(false);
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setShowPayment(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
  };

  const handlePaymentError = (error: string) => {
    setError(error);
    setShowPayment(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Book Your Session</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {success && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              <div className="font-semibold mb-2">🎉 Booking & Payment Successful!</div>
              <div className="text-sm space-y-1">
                <p>Your booking has been confirmed and payment processed.</p>
                {paymentDetails && (
                  <div className="mt-2 p-2 bg-green-50 rounded">
                    <p><strong>Payment ID:</strong> {paymentDetails.paymentID}</p>
                    <p><strong>Amount:</strong> ${paymentDetails.amount} {paymentDetails.currency}</p>
                    <p><strong>Status:</strong> {paymentDetails.status}</p>
                  </div>
                )}
                <p className="mt-2">We'll contact you soon to confirm your session details.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          {showPayment ? (
            <PayPalPayment
              amount={sessionAmount}
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
              onError={handlePaymentError}
              bookingData={formData}
            />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Enter your contact number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Mentor
                </label>
                <select
                  name="mentorName"
                  value={formData.mentorName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                >
                  <option value="">Select a mentor</option>
                  {mentors.map((mentor) => (
                    <option key={mentor} value={mentor}>
                      {mentor}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Enter postal code"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                placeholder="Tell us about your spiritual journey and what you're seeking..."
              />
            </div>

            {/* Demo Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level (Optional)
                </label>
                <input
                  type="text"
                  name="demo1"
                  value={formData.demo1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="e.g., Beginner, Intermediate, Advanced"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Techniques (Optional)
                </label>
                <input
                  type="text"
                  name="demo2"
                  value={formData.demo2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="e.g., Vipassana, Kundalini, Pranayama"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience (Optional)
                </label>
                <input
                  type="text"
                  name="demo3"
                  value={formData.demo3}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="e.g., Years of practice, workshops attended"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Spiritual Goals (Optional)
                </label>
                <input
                  type="text"
                  name="demo4"
                  value={formData.demo4}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="e.g., Inner peace, enlightenment, healing"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information (Optional)
                </label>
                <input
                  type="text"
                  name="demo5"
                  value={formData.demo5}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#576F9F]"
                  placeholder="Any other information you'd like to share"
                />
              </div>
            </div>

                         {/* Pricing Information */}
             <div className="bg-blue-50 p-4 rounded-lg mb-6">
               <h4 className="font-medium text-blue-800 mb-2">Session Pricing</h4>
               <div className="text-sm text-blue-700">
                 <p><strong>Standard Session:</strong> ${sessionAmount} USD</p>
                 <p className="text-xs mt-1">* Payment is required to confirm your booking</p>
               </div>
             </div>

             {/* Submit Button */}
             <div className="flex justify-end space-x-4 pt-6">
               <button
                 type="button"
                 onClick={onClose}
                 className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
               >
                 Cancel
               </button>
               <button
                 type="submit"
                 disabled={isLoading}
                 className="px-6 py-2 bg-[#576F9F] text-white rounded-md hover:bg-[#4A5F8A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 {isLoading ? 'Processing...' : `Proceed to Payment ($${sessionAmount})`}
               </button>
             </div>
           </form>
          )}
        </div>
      </div>
    </div>
  );
} 