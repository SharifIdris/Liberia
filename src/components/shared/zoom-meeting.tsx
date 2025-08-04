'use client';

import { useEffect, useState, useRef } from 'react';

interface ZoomMeetingProps {
  signature: string;
  meetingNumber: string;
  password?: string;
  userName: string;
  userEmail: string;
  apiKey: string;
}

export default function ZoomMeeting({
  signature,
  meetingNumber,
  password,
  userName,
  userEmail,
  apiKey,
}: ZoomMeetingProps) {
  const [meetingStarted, setMeetingStarted] = useState(false);
  const zoomClientRef = useRef<any>(null);

  useEffect(() => {
    import('@zoom/meetingsdk/embedded').then((module) => {
      const client = module.default.createClient();
      zoomClientRef.current = client;

      const initMeeting = async () => {
        const meetingSDKElement = document.getElementById('meetingSDKElement');
        if (!meetingSDKElement) return;

        try {
          await client.init({
            zoomAppRoot: meetingSDKElement,
            language: 'en-US',
          });

          await client.join({
            sdkKey: apiKey,
            signature,
            meetingNumber,
            password: password,
            userName,
            userEmail,
          });
          setMeetingStarted(true);
        } catch (error) {
          console.error('Error initializing or joining Zoom meeting:', error);
        }
      };

      initMeeting();
    });

    return () => {
      if (zoomClientRef.current) {
        zoomClientRef.current.leaveMeeting();
        zoomClientRef.current = null;
      }
    };
  }, [apiKey, signature, meetingNumber, password, userName, userEmail]);

  return (
    <div id="meetingSDKElement" style={{ width: '100%', height: '100vh' }}>
      {!meetingStarted && <p>Joining meeting...</p>}
    </div>
  );
}
