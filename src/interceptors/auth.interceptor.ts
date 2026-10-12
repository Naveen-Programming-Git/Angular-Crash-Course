import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { PLATFORM_ID, inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  // Add the Authorization header with the token from localStorage.
  // Check if the code is running in the browser before accessing localStorage.
  //As localStorage/SessionStorage is not available on the server side.
  const platformId = inject(PLATFORM_ID);
  const authToken = isPlatformBrowser(platformId)
    ? localStorage.getItem('token')
    : null;
  if(authToken){
    // Clone the request and set the new header(s) in one step.
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }      
    });
    // Pass the modified request to the next handle.
    return next(clonedReq);
  }
  
  return next(req);
};
