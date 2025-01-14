import jwt from 'jsonwebtoken';

export const createToken = (req, res) => {
    const token = jwt.sign({user: 'Md Jahidul islam'}, process.env.JWT_SECRET || 'secretKey', {
        expiresIn: '24h',
    });
    res.json({ token });
};
