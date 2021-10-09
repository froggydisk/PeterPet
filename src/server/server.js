const express = require("express");
const multer = require("multer")
const cors = require("cors");
const bodyParser = require("body-parser");

const port = 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/text", (req, res) => { //데이터 받는 곳
  const text1 = req.body.inText;
  console.log(text1);
});

//---------------------------------multer start---------------------------------

const Storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, './images')
  },
  filename(req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
  },
})

const upload = multer({ storage: Storage })

app.post('/api/upload', upload.single('image'), (req, res) => {
  console.log('file', req.file)
  console.log(JSON.stringify(req.body, null, 1));
  //console.log('body', req.body)
  res.status(200).json({
    message: 'success!',
  })
})

//---------------------------------multer end---------------------------------

app.listen(port, () => {
  console.log(`App server is running on http://localhost:${port}`);
});