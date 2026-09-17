import express from "express"
import {Register} from "/controller/crud_contorller.js"

const Domain =express.Router();

Domain.post("/rgister",Register);
Domain.get ("/login",Login)