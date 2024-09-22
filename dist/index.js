"use strict";var q=function(r,v){return function(){return v||r((v={exports:{}}).exports,v),v.exports}};var m=q(function(C,d){
var R=require('@stdlib/blas-ext-base-dsumpw/dist');function _(r,v,p,a){var c,t,s,n,e,i,u;if(i=r-v,r<=0||i<=0)return NaN;if(r===1||a===0)return 0;for(c=R(r,p,a)/r,a<0?t=(1-r)*a:t=0,s=0,n=0,u=0;u<r;u++)e=p[t]-c,s+=e*e,n+=e,t+=a;return s/i-n/r*(n/i)}d.exports=_
});var x=q(function(D,y){
var E=require('@stdlib/blas-ext-base-dsumpw/dist').ndarray;function O(r,v,p,a,c){var t,s,n,e,i,u,o;if(u=r-v,r<=0||u<=0)return NaN;if(r===1||a===0)return 0;for(t=E(r,p,a,c)/r,s=c,n=0,e=0,o=0;o<r;o++)i=p[s]-t,n+=i*i,e+=i,s+=a;return n/u-e/r*(e/u)}y.exports=O
});var l=q(function(F,j){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=m(),g=x();b(M,"ndarray",g);j.exports=M
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=l(),f,w=k(h(__dirname,"./native.js"));z(w)?f=A:f=w;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
