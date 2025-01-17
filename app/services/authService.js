const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SALT = 10;
const userRepository = require('../repositories/userRepository');
const ApplicationError = require('../../config/errors/ApplicationError');

const JWT_SECRET_KEYY = "KTIJAWARA";
const TOKEN_EXPIRATION = '10h'; // Token valid selama 1 jam

const encryptedPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, SALT);
        return hash;
    } catch (err) {
        throw new Error(err);
    }
};

const checkPassword = async (password, hash) => {
    try {
        const result = await bcrypt.compare(password, hash);
        return result;
    } catch (err) {
        throw new Error(err);
    }
};

const createToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET_KEYY, { expiresIn: TOKEN_EXPIRATION });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEYY);
        console.log("decoded :", decoded);
        return decoded;
    } catch (err) {
        console.error('Token tidak valid:', err.message);
        return null;
    }
};

const authorize = async (bearerToken) => {
    try {
        if (!bearerToken) {
            throw new ApplicationError('Unauthorized', 401);
        }
        const token = bearerToken.split("Bearer ")[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            throw new ApplicationError('Unauthorized', 401);
        }

        const { id } = decoded;
        const user = await userRepository.getUserById(id);
        console.log("user :", user);
        

        if (!user) {
            throw new ApplicationError('Unauthorized', 401);
        }

        return user;
    } catch (err) {
        throw new ApplicationError(err.message, err.statusCode || 500);
    }
};

const login = async (email, password) => {
    try {
        const user = await userRepository.getUserByEmail(email);
        if (!user) {
            throw new ApplicationError('User not found', 404);
        }

        const isPasswordMatch = await checkPassword(password, user.password);

        if (!isPasswordMatch) {
            throw new ApplicationError('Wrong Password', 401);
        }

        const token = createToken({ id: user.id });
        return {
            user,
            token
        };
    } catch (err) {
        throw new ApplicationError(err.message, err.statusCode || 500);
    }
};

const logout = (req, res) => {
    res.clearCookie('token'); 
    return res.status(200).json({ message: 'Successfully logged out' });
};

module.exports = {
    encryptedPassword,
    checkPassword,
    authorize,
    createToken,
    verifyToken,
    login,
    logout
};
