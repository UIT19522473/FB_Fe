import "../App.css";
import React, { useState } from "react";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import { authToken } from "../apis/apiCall";
import MeetingView from "../components/VideoCall/MeetingView";

const TestCall = () => {
  const search = window.location.search;
  const idRoom = new URLSearchParams(search).get("idRoom");

  // eslint-disable-next-line no-unused-vars
  const [meetingId, setMeetingId] = useState(null);

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return (
    <div className="h-[85vh] flex flex-col">
      {authToken && idRoom ? (
        <MeetingProvider
          config={{
            meetingId: idRoom,
            micEnabled: true,
            webcamEnabled: true,
            name: "C.V. Raman",
          }}
          token={authToken}
        >
          <MeetingView
            // setOpenMic={setOpenMic}
            // setOpenCamera={setOpenCamera}
            meetingId={idRoom}
            onMeetingLeave={onMeetingLeave}
          />
        </MeetingProvider>
      ) : (
        // <JoinScreen getMeetingAndToken={getMeetingAndToken} />
        // <ScreenWaiting>hello</ScreenWaiting>
        <p className="text-white">hellossssssssssssssssssssss</p>
      )}
    </div>
  );
};

export default TestCall;
