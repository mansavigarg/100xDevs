import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, myNetworkAtom, notificationAtom, totalNotificationSelector } from './atoms'
import { useMemo } from 'react';

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
  const notoficationCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  
  // without useMemo it will rerender always when another rerender happens in the app but with useMemo it will only rerender if these value canges {networkNotificationCount + jobsCount + messagingCount + notoficationCount}
      // const totalNotificationCount = useMemo(() => {
      //   return networkNotificationCount + jobsCount + messagingCount + notoficationCount ;
      // },[networkNotificationCount, jobsCount, messagingCount, notoficationCount]) 
  // this is great but there is something better which is given by recoil i.e. selectors

  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notification ({notoficationCount})</button>
      {/* lets say that a person needs to see the sum of all the Notification on top of the avatar
      then how will you do it -- so we use ~selectors~ */}
      <button>Me ({totalNotificationCount})</button>
    </div>
  )
}

export default App
