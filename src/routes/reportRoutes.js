const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const apiKeyMiddleware = require('./../config/apiKey')

//Rota para exportar CSV

router.use(apiKeyMiddleware);
router.get("/report/csv", reportController.exportWizardCSV);
router.get("/report/pdf", reportController.exportWizardPDF);

module.exports = router;