import express from 'express';
import controller from '../controller/users-controller.js'


const router = express.Router();

router
    .route('/')
        .post(controller.postUser)

export default router