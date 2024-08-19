 UseCallback is a hook in react, a popular library for building user interfaces. It is used to memoize functions which can help in optimising the performance of your application, specially in cases involving child components that rely on reference equality to prevent unnecessary renders.



 let a = 1;
 let b = 1;
 bool(a==b) => true
 They are also equal but not referencly


 function sum(a,b) {return a+b};
 function sum2(a,b) {return a+b};
 bool{sum==sum2} => false
 They are not referencly equal 