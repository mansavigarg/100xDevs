import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, myNetworkAtom, notificationAtom } from './atoms'

function App() {
  return (  
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
  )

}

function MainApp(){
  const networkNotificationCount = useRecoilValue(myNetworkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const [notoficationCount, setNotificationCount] = useRecoilState(notificationAtom);
  

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notification ({notoficationCount})</button>
      <button onClick={() => {
        setNotificationCount(c => c + 1)
      }}>Me</button>
    </div>
  )
}

export default App
