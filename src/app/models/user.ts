export class User {
  id:string;
  first_name:string;
  last_name:string;
  gender:string;
  email:string;
  phone:string;
  status:string;

  constructor(options:{
    id?: string,
    first_name?: string
    last_name?: string
    gender?: string
    email?: string
    phone?: string
    status?: string
  } = {}) {
    this.id = options.id || '';
    this.first_name = options.first_name || '';
    this.last_name = options.last_name || '';
    this.gender = options.gender || '';
    this.email = options.email || '';
    this.phone = options.phone || '';
    this.status = options.status || '';
  }
}
