import { pool } from '../database.js';
export const getUsers = async (req, res) => {
    try {
        const response = await pool.query(`SELECT * FROM users`);
        // console.log(response.rows)
        // res.send('users')
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error');
    }
};
export const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    return res.json(response.rows);
};
export const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email]);
    return res.json({
        message: 'User created Succesfully',
        body: {
            user: {
                name,
                email
            }
        }
    });
};
export const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    await pool.query(`UPDATE users Set name = $1, email = $2 WHERE id = $3`, [name, email, id]);
    return res.json(`User ${id} Updated Succesfully`);
};
export const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.json(`User ${id} deleted succesfully`);
};
//# sourceMappingURL=index.controller.js.map