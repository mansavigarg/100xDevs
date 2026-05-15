React Deeper Dive

react returns, re-rendering, key, Wrapper components, useEffect, useMemo, useCallback, useRef


What is the reason that is component need to return single child, not multiple siblings?
Ans ~ Make is easy to do reconciliation ----  the process of figuring out what dom need to under as your application grows




A render means that--
~ reacted some work to calculate what all should update in this component
~ the component actually got called. You can put a log to confirm this.
~ the inspector shows your bounding box around the component

It happens when
~ state variable that is being used inside a component changes
~ A parent component render triggers then all children re-render

You want to minimise the number of re-renders to make a highly optimal react app
The more the components that are getting re-rendered the worst