export class User {
  id:string;
  name:string;
  gender:string;
  email:string;
  phone:string;
  status:string;

  constructor(options: {
    id?: string,
    name?: string
    gender?: string
    email?: string
    phone?: string
    status?: string
  } = {}) {
    this.id = options.id || '';
    this.name = options.name || '';
    this.gender = options.gender || '';
    this.email = options.email || '';
    this.phone = options.phone || '';
    this.status = options.status || '';
  }
}
