import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/users';
import { hashPassword, compareHashedPassword } from '../utils';
import config from '../config/config';
import IUser from '../interfaces/user';

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    };

    // creating password hash and adding it to userData
    let newHashedPassword = hashPassword(userData.password);
    userData.password = newHashedPassword;
    console.log('user', userData);

    const user = new User(userData);
    await user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                message: 'Error'
            });
        }
        // create jwt as user will not sign in again
        if (config.jwt_secret) {
            const token = jwt.sign({ _id: user._id }, config.jwt_secret);
            //set token as 't' om cookie
            res.cookie('t', token, { expires: new Date(new Date().getHours() + 4) });
            // send user and toke to client
            const { _id, email, password } = user;

            return res.status(200).json({
                message: 'signed in',
                user: { _id, email, password },
                token
            });
        }
    });
};

export const logIn = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    console.log('body', req.body);

    // check for user exists

    User.findOne({ email }, (err: any, user: IUser) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User does not exists'
            });
        }

        // compare password
        // req.profile = user;
        const result = compareHashedPassword(password, user.password);
        if (result) {
            // create jwt
            if (config.jwt_secret) {
                const token = jwt.sign({ _id: user._id }, config.jwt_secret);

                //set token as 't' om cookie
                res.cookie('t', token, { expires: new Date(new Date().getHours() + 4) });
                // send user and toke to client
                const { _id, email } = user;
                // req.user = user;
                return res.status(200).json({ token, user: { _id, email } });
            }
        } else {
            return res.status(401).json({
                err: 'Password mismatch'
            });
        }
    });
};
