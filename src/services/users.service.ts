import IUser from '../interfaces/users.interface';
import usersModel from '../models/users.model';

const create = async (newUser: IUser): Promise<void> => usersModel.create(newUser);

export default { create };
