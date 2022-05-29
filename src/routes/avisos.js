var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

// Minhas Configs

router.post("/cadastrar_video/:idUsuario", function (req, res) {
    avisoController.cadastrar_video(req, res);
});

router.post("/update_img/:idUsuario", function (req, res) {
    avisoController.update_img(req, res);
});

router.post("/get_user", function (req, res) {
    avisoController.get_user(req, res);
});

router.post("/get_vid", function (req, res) {
    avisoController.get_vid(req, res);
});

router.get("/get_any", function (req, res) {
    avisoController.get_any(req, res);
});

router.get("/get_apb", function (req, res) {
    avisoController.get_apb(req, res);
});

router.get("/get_all", function (req, res) {
    avisoController.get_all(req, res);
});

router.get("/get_true", function (req, res) {
    avisoController.get_true(req, res);
});

router.get("/get_conq", function (req, res) {
    avisoController.get_conq(req, res);
});

router.get("/get_graf_run", function (req, res) {
    avisoController.get_graf_run(req, res);
});

module.exports = router;