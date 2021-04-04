import { NextFunction, Request, Response } from 'express';
import Covid from '../models/covid';
import ICovid from '../interfaces/covid';

export const filterCases = async (req: Request, res: Response, next: NextFunction) => {
    const { startDate, endDate } = req.body;
    console.log('data', startDate, endDate);

    //Quering Data for active cases
    await Covid.find({ statusChangeDate: { $gte: new Date(startDate).toLocaleDateString() } }, (err: any, data: any) => {
        if (err || !data) {
            return res.status(400).json({
                error: 'not found',
                data
            });
        } else {
            console.log('data', data);
            return res.json({ data });
        }
    });
};
