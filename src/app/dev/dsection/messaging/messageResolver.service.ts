import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {SocketConnectService} from '../../../socketConnect.service';


export class MessageResolverService implements Resolve<any>{
      constructor(private socketService: SocketConnectService ) {
      }

      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
                 if(!this.socketService.socket) {
                     return this.socketService.socket;
                  }
                 else return this.socketService.socket;
      }

}
