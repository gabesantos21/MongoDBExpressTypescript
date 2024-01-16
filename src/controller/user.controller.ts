import { NextFunction, Request, Response } from 'express';
// Type
import { UserFormDTO } from '../types/user/user.model';
// Service
import { UserService } from '../service/user.service';

export class UserController {
  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return next(error);
    }
  };

  static getOneById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await UserService.getUserById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      return next(error);
    }
  };

  static save = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserService.saveUser(req.body as UserFormDTO);
      return res
        .status(201)
        .json({ message: 'User has been successfully added.' });
    } catch (error) {
      return next(error);
    }
  };

  static edit = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserService.editUser(req.body as UserFormDTO, req.params.id);
      return res.status(204).json();
    } catch (error) {
      return next(error);
    }
  };

  static delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await UserService.deleteUser(req.params.id);
      return res.status(204).json();
    } catch (error) {
      return next(error);
    }
  };
}
