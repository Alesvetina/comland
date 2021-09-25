import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AlertService {

    constructor(
      private toastr: ToastrService
    ) { }

    show(message: string, type = 'info') {
        if(type == 'info') {
            this.toastr.success(message);
        } else {
            this.toastr.error(message);
        }
    }
}