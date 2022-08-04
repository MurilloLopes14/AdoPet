const multer = require("multer");
const path = require("path");

//Destination to store image
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    }

    cb(null, `uploads/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      // Just .png , .jpg and .jpeg images format

      return cb(
        new Error(
          "Por favor, Envie apenas imagens no formato .PNG, .JPG ou .JPEG"
        )
      );
    }
    cb(undefined, true);
  },
});

module.exports = {
  imageUpload,
};
