// Types
import { UserFormDTO } from '../types/user/user.model';
// Model
import User from '../model/User';

export class UserService {
  static getAllUsers = async () => {
    return await User.find().exec();
  };

  static getUserById = async (id: string) => {
    return User.findById(id)
      .exec()
      .then((user) => {
        if (!user) {
          throw new Error('NoDocumentFound');
        }

        return user;
      });
  };

  static saveUser = async (user: UserFormDTO) => {
    return await User.create(user);
  };

  static editUser = async (userChanges: UserFormDTO, id: string) => {
    return User.findByIdAndUpdate(id, userChanges)
      .exec()
      .then((user) => {
        if (!user) {
          throw new Error('NoDocumentFound');
        }
      });
  };

  static deleteUser = async (id: string) => {
    return User.findByIdAndDelete(id)
      .exec()
      .then((user) => {
        if (!user) {
          throw new Error('NoDocumentFound');
        }

        return user;
      });

    // May implement Soft Delete in the future
  };
}
