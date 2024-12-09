const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// localhost:8000/ → index.ejs render
router.get('/', controller.home);

// localhost:8000/visitor → visitor.ejs render
router.get('visitors', controller.visitor);

// 방명록 등록
router.post('/visitor', controller.postVisitor);

// 방명록 수정
router.patch('/visitor');

// 방명록 하나 조회
router.get('/visitor');

// 방명록 삭제
router.delete('/visitor');

module.exports = router;
