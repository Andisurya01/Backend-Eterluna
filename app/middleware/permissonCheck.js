exports.permissionCheck = ({ target }) => {
    return (req, res, next) => {
        const user = req.user;
        console.log('User:', user.role);
        
        if (!user) {
            return res.status(403).json({
                status: 'FAIL',
                message: 'You do not have permission to access this resource',
            });
        }

        if (user.role === 'SUPERADMIN') {
            return next();
        }

        if (!user.permissions) {
            return res.status(403).json({
                status: 'FAIL',
                message: 'You do not have permission to access this resource',
            });
        }

        const permissionNames = user.permissions.map(p => {
            return p?.dataValues?.menuName || p?.menuName || 'UNKNOWN';
        });

        console.log('User permissions:', permissionNames);

        if (!permissionNames.includes(target)) {
            return res.status(403).json({
                status: 'FAIL',
                message: 'You do not have permission to access this resource',
            });
        }

        next();
    };
};
