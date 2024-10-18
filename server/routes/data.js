const express = require('express');

const db = require('../middleware/database');

const router = express.Router();

router.get("/user",
    async (req, res) => {
        req_obj = req.json();
        let {error, data} = await db.from("users")
                                    .select("*")
                                    .where({id: req_obj.id});
        
        if (error) {
            res.json({error: error, from: "data/user"});
            res.redirect(req.get('host') + "/error");
        } else {
            res.json(usr);
        }
    }
);

router.get("/room",
    async (req, res) => {
        req_obj = req.json();
        let {error, data} = await db.from("rooms")
                                    .select("*")
                                    .where({id: req_obj.id});
        
        if (error) {
            res.json({error: error, from: "data/room"});
            res.redirect(req.get('host') + "/error");
        } else {
            res.json(usr);
        }
    }
);

module.exports = router;