import IAuditTrail from '../audit-trail.model';

export interface UserFormDTO {
  id?: number;
  name: string;
  age: number;
}

export interface IUser extends IAuditTrail {
  name: string;
  age: number;
}
