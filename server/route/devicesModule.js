const express = require('express')
const router = express.Router()

const {
    getsBrand, getsModel, getsType,
    postsBrand, postsModel, postsType,
    putsBrand, putsModel, putsType,
    deletesBrand, deletesModel, deletesType } = require('../controller/devicesModule')

//brand


router.route('/brand/posts')
    .post(postsBrand)
router.route('/brand/gets')
    .get(getsBrand)
router.put('/brand/puts')
    .put(putsBrand)
router.route('/brand/delete/:id')
    .delete(deletesBrand)
/*
//model
router.route('/model/gets')
.get(getsModel)
router.route('/model/posts')
.post(postsModel)
router.put('/model/puts')
.put(putsModel)
router.route('/model/delete/:id')
.delete(deletesModel)
//type
router.route('/type/gets')
.get(getsType)
router.route('/model/posts')
.post(postsType)
router.put('/type/puts')
.put(putsType)
router.route('/type/delete/:id')
.delete(deletesType)
*/
module.exports = router