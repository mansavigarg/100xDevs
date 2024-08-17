Two jargons before we start 

1) Side effects : Anything that is not related to rendering, puting thing on dom, taking thing out of the dom are called side effects.
There are specific process that are happening during rendering Functions get called components, get called et cetera, et cetera, and These other set of things are to happen on the side. That's why it is called as side-effect.

Ex: 
setTimeout
fetch
setInterval 
document.getElementById("").innerHTML = ""

2) Hooks : Hooks are the feature introduce in React 16.8 that allow you to use state and other react features without writing a class. They enable functional components to have access to straight logic and life-cycle features which are previously only possible in class components. This has lead to a more concise and readable way of writing components in react.

useState 
useEffect
useCallback
useMemo
useRef
useContext