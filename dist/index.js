"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var d=c(function(D,y){
var _=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function w(r,e,i,a,p){var f,t,s,n,v,u,q;if(u=r-e,r<=0||u<=0)return NaN;if(r===1||a===0)return 0;for(f=_(r,i,a,p)/r,t=p,s=0,n=0,q=0;q<r;q++)v=i[t]-f,s+=v*v,n+=v,t+=a;return s/u-n/r*(n/u)}y.exports=w
});var x=c(function(F,m){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=d();function b(r,e,i,a){return O(r,e,i,a,E(r,a))}m.exports=b
});var M=c(function(G,l){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),h=d();g(j,"ndarray",h);l.exports=j
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=M(),o,R=z(k(__dirname,"./native.js"));A(R)?o=B:o=R;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
