import {Request, Response} from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database.js'

export const getUsers = async (req: Request, res: Response): Promise<Response>  =>{
    try{
        const response: QueryResult = await pool.query(`SELECT * FROM users`)
    // console.log(response.rows)
    // res.send('users')
        return res.status(200). json(response.rows);
    } catch (e) {
        console.log(e)
        return res.status(500).json('Internal Server error');
    }

}

export const getUserById = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return res.json(response.rows);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    const {name, email} = req.body;
    const response: QueryResult = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email]);
    return res.json({
        message: 'User created Succesfully',
        body: {
            user: {
                name,
                email
            }
        }
    })
}

export const updateUser = async(req: Request<{id: string}>, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    await pool.query(`UPDATE users Set name = $1, email = $2 WHERE id = $3`, [name, email, id]);
    return res.json(`User ${id} Updated Succesfully`);
}

export const deleteUser = async (req: Request<{ id: string }>, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.json(`User ${id} deleted succesfully`)
}
