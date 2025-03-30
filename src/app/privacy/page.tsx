"use client";

import React from 'react';

export default function page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900 pt-16 lg:pt-40 pb-11">
      <div className="w-3/4 p-6 bg-neutral-700 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Privacy Policy</h1>
        
        <p className="text-white text-lg mb-4">
          At ExoVerse, we respect your privacy and are committed to ensuring a safe experience for all users. This privacy policy clarifies that we do not collect, store, or share any personal data.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">1. No Data Collection</h2>
        <p className="text-white mb-4">
          ExoVerse does not collect or process any user data, including personal details, location information, or device identifiers. Your interactions within the app remain entirely private to you.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">2. No Third-Party Tracking</h2>
        <p className="text-white mb-4">
          Our application does not use third-party analytics, advertising, or tracking services. We ensure that your activities within ExoVerse remain confidential.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">3. No AI Processing or Cloud Storage</h2>
        <p className="text-white mb-4">
          ExoVerse operates entirely on your device without sending data to external servers. All computations, including augmented reality (AR) interactions, happen locally, ensuring full privacy.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">4. Permissions</h2>
        <p className="text-white mb-4">
          ExoVerse may request certain device permissions, such as camera access for AR functionality. However, this access is only used within the app and is not recorded or shared.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-6 mb-4">5. Changes to This Policy</h2>
        <p className="text-white mb-4">
          If any changes are made to this privacy policy, they will be reflected on this page. However, our core principle of not collecting data will remain unchanged.
        </p>

        <p className="text-white text-sm mt-6">
          Effective Date: 30-03-2025
        </p>
      </div>
    </div>
  );
}
