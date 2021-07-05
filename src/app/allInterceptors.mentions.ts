import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DevInterceptorService} from './dev/dev-interceptor.service';


export  const allInterceptors = [
  {provider: HTTP_INTERCEPTORS , useClass: DevInterceptorService, multi: true }
]
