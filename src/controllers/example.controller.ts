import { NextFunction, Request, Response } from 'express';

export default class ExampleController {
    public static index(req: Request, res: Response, next: NextFunction) {
        res.send('Hello World!');
    }
}
