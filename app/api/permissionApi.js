const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissonController');
const { authorize, isSuperAdmin } = require('../middleware/auth');
const { permissionCheck } = require('../middleware/permissonCheck');

router
    .get('/', permissionController.getPermissions)
    .get('/:id', permissionController.getPermissionById)
    .post('/userid', authorize, isSuperAdmin, permissionController.getPermissionByUserId)
    .post('/', authorize, isSuperAdmin, permissionController.createPermission)
    .put('/:id', authorize, isSuperAdmin, permissionController.updatePermission)
    .delete('/:id', authorize, isSuperAdmin, permissionController.deletePermission)
    .delete('/:userId/:menuName', authorize, isSuperAdmin, permissionController.deletePermissionByUserIdAndMenuName);;

module.exports = router;