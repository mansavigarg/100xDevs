Hooks:

Until now, we have discussed useState

These function that start with {use} are called hooks

Hooks in react are function that allow to "hook into" React State and life-cycle features from the function component

useEffect, 
useMemo, 
useCallback, 
useRef, 
useReducer, 
useContext, 
useLayoutEffect


The way to know that the component has mounted in function base is by using useEffect.


If we have a component, the first time it is put on the website is when we say that it is mounted or mount.

Now this could render 100,000 times then the life cycle of mount should not run, the first time it is put on the website it will only run for the first time.



Difference between memo and useEffect:

~ memo lets you skip re-rendering a component when its props are unchanged


~ useEffect(()=>{
    ..//
},[])

it lets you run a certain part of a code whatever the function a defined , whenever anything inside [ ] array changes and if this is a empty array then when it gets mounted it will run
