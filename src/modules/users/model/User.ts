import { v4 as uuidV4 } from "uuid";

export interface IUserProps {
  id?: string;
  name: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

class User {
  id?: string;
  name: string;
  admin?: boolean;
  email: string;
  created_at?: Date;
  updated_at?: Date;

  private constructor(props: IUserProps) {
    if (!this.id) {
      this.id = props.id || uuidV4();
    }

    this.name = props.name;
    this.admin = false;
    this.email = props.email;
    this.created_at = props.created_at || new Date();
    this.updated_at = props.updated_at || new Date();
  }

  public static create(props: IUserProps): User {
    return new User(props);
  }
}

export { User };
