import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

const toastr=inject(ToastrService)
const router=inject(Router)

  if(sessionStorage.getItem('username')){
    return true;
  }
  else{
    toastr.warning("Please Login First!!")
    router.navigateByUrl('')
    return false
  }
};
