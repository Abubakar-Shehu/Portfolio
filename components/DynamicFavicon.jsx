'use client';

import { useEffect } from 'react';

export default function DynamicFavicon() {
  useEffect(() => {
    // List of your personal pictures
    const personalPics = [
      // Original JPG files
      '/personal-pics/faces/IMG_0164.JPG',
      '/personal-pics/faces/IMG_0227.JPG', 
      '/personal-pics/faces/IMG_0232.JPG',
      '/personal-pics/formal/IMG_0436.JPG',
      '/personal-pics/formal/IMG_0438.JPG',
      // Converted HEIC to JPG files
      '/personal-pics/faces/IMG_0031.jpg',
      '/personal-pics/faces/IMG_0358.jpg',
      '/personal-pics/faces/IMG_0359.jpg',
      '/personal-pics/faces/IMG_0360.jpg',
      '/personal-pics/faces/IMG_0361.jpg',
      '/personal-pics/faces/IMG_0362.jpg',
      '/personal-pics/faces/IMG_0363 2.jpg',
      '/personal-pics/formal/IMG_0248.jpg',
      '/personal-pics/formal/IMG_0251.jpg',
      '/personal-pics/formal/IMG_0255.jpg',
      '/personal-pics/formal/IMG_0297.jpg'
    ];

    // Function to set favicon
    const setFavicon = (imagePath) => {
      // Remove existing favicon links
      const existingLinks = document.querySelectorAll('link[rel*="icon"]');
      existingLinks.forEach(link => link.remove());

      // Create new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/jpeg';
      link.href = imagePath;
      document.head.appendChild(link);

      // Also set apple-touch-icon for mobile devices
      const appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      appleLink.href = imagePath;
      document.head.appendChild(appleLink);
    };

    // Get random picture
    const randomPic = personalPics[Math.floor(Math.random() * personalPics.length)];
    
    // Set the favicon
    setFavicon(randomPic);

    // Optional: Change favicon on page visibility change (when user switches tabs)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const newRandomPic = personalPics[Math.floor(Math.random() * personalPics.length)];
        setFavicon(newRandomPic);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
}
