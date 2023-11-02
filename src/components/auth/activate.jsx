import { useState } from 'react';
import Copy from './copy';

const Activation = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    otp: '',
  });

  const [activationStatus, setActivationStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the OTP and new password to your server for validation and activation
      const response = await fetch('http://127.0.0.1:8000/auth/activate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setActivationStatus('Activation successful');
      } else {
        setActivationStatus('Activation failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setActivationStatus('Activation failed');
    }
  };

  return (
    <div>
      <div className="ctn h-screen justify-center flex flex-col bg-gray-100">
        <div className="from-wrapper w-full max-w-xl m-auto shadow-default bg-white rounded-lg border border-primary py-10 px-1">
          
          <div className="w-full max-w-sm m-auto">
            <div className="heading text-center py-10">
              <h1 className='font-bold text-2xl'>Verify Email</h1>
              <p className='text-gray-400'>A Verification code has been sent to your mail, 
enter code to login.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="otp">Verification Code</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-btn flex items-center justify-center">
                <button type="submit" className='bg-black text-white rounded-lg px-12 max-w-full my-5 py-2'>Activate Account</button>
              </div>
            </form>
          </div>
        </div>
        <Copy/>
      </div>


      {activationStatus && <p>{activationStatus}</p>}
    </div>
  );
}

export default Activation