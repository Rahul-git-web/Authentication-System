const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.User = decoded;

    next();
  } catch(err){
    res.status(401).json({
        message: "Invalid token"
    })
  }
};

module.exports = authMiddleWare;
