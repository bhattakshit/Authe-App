import {Router}  from "express"


const router= Router();

router.route("/signup").post(signUp)

router.route("/login").post(loginUser)

router.route("/logout").post(auth,logOut)

router.routes("referesh-token").post(refreshToken)

export default router

