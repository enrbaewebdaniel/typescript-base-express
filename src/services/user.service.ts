import { AppDataSource } from "../config/data-source";
import { User } from "../models/user.model";

const userRepository = AppDataSource.getRepository(User);

export class UserService {
    static async getAllUsers() {
        return await userRepository.find();
    }

    static async createUser(name: string, email: string) {
        const user = userRepository.create({ name, email });
        return await userRepository.save(user);
    }
}
