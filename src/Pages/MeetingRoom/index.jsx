import { JitsiMeeting } from "@jitsi/react-sdk";

const MeetingRoom = () => {
    return (
        <JitsiMeeting
        domain = "live.cloudpaco.com.br"
        roomName = "PleaseUseAGoodRoomName"
        configOverwrite = {{
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false
        }}
        interfaceConfigOverwrite = {{
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
        }}
        userInfo = {{
            displayName: 'Chico Freitas'
        }}
        onApiReady = { (externalApi) => {
            // here you can attach custom event listeners to the Jitsi Meet External API
            externalApi.addListener('videoConferenceLeft', ()=> {
              alert("Saí da meet. Redirecionar para home!");
            });
            // you can also store it locally to execute commands
        } }
        getIFrameRef = { (iframeRef) => { iframeRef.style.height = '861px'; iframeRef.style.width = '400px';} }
    />
      )
}

export default MeetingRoom;