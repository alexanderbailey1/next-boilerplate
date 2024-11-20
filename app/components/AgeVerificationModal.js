'use client'

import React, { useState } from 'react';

const AgeVerificationModal = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    // Perform age verification logic here (e.g., check date of birth)
    setIsVerified(true); 
  };

  if (isVerified) {
    return null; // Don't render the modal if already verified
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="flex justify-center">Age Verification</h2>
      <p style={{padding: '5vw'}}>Please confirm you are 21 years or older to enter this site.</p>
      <div className="flex justify-center">
        <button style={{padding: '5vw'}} onClick={handleVerify}>Yes, I am 21+</button>
        <button style={{padding: '5vw'}}>No, I am not</button>
      </div>
    </div>
    </div>
  );
};

export default AgeVerificationModal;