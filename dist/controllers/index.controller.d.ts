import { Request, Response } from 'express';
export declare const getUsers: (req: Request, res: Response) => Promise<Response>;
export declare const getUserById: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response>;
export declare const createUser: (req: Request, res: Response) => Promise<Response>;
export declare const updateUser: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response>;
export declare const deleteUser: (req: Request<{
    id: string;
}>, res: Response) => Promise<Response>;
//# sourceMappingURL=index.controller.d.ts.map