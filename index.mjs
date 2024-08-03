// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-dsumpw@v0.2.2-esm/index.mjs";function t(r,n,t,s){var i,a,d,f,o,u,m;if(u=r-n,r<=0||u<=0)return NaN;if(1===r||0===s)return 0;for(i=e(r,t,s)/r,a=s<0?(1-r)*s:0,d=0,f=0,m=0;m<r;m++)d+=(o=t[a]-i)*o,f+=o,a+=s;return d/u-f/r*(f/u)}function s(r,e,t,s,i){var a,d,f,o,u,m,l;if(m=r-e,r<=0||m<=0)return NaN;if(1===r||0===s)return 0;for(a=n(r,t,s,i)/r,d=i,f=0,o=0,l=0;l<r;l++)f+=(u=t[d]-a)*u,o+=u,d+=s;return f/m-o/r*(o/m)}r(t,"ndarray",s);export{t as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
