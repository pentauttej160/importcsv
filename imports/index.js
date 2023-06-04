const multer = require('multer');

const importController = require("./controller/importController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});
  
const upload = multer({storage:storage});

app.post('/api/import', upload.single('csvFile'), importController.importCsv);

