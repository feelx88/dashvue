var express = require("express"),
  jwt = require("jsonwebtoken"),
  path = require("path"),
  uuidv4 = require("uuid/v4"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
(config = require("./config.json")), (app = express());

app.use(bodyParser.json());

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(path.resolve("../frontend/index.html"));
});
app.use("/dist", express.static("../frontend/dist"));
app.use("/node_modules", express.static("../frontend/node_modules"));
app.use("/public", express.static("../frontend/public"));

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secret
    },
    (jwt_payload, done) => {
      if (jwt_payload.authenticated) {
        return done(null, true);
      } else {
        return done(null, false);
      }
    }
  )
);

app.post("/api/login", (req, res) => {
  for (const login of config.logins) {
    if (
      login.username === req.body.username &&
      login.password === req.body.password
    ) {
      let token = jwt.sign(
        { authenticated: true, nonce: uuidv4() },
        config.secret,
        { expiresIn: "100 years" }
      );

      res.send({
        success: true,
        token: token
      });
    }
  }
  res.sendStatus(401);
});

app.get(
  "/api/config",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.sendFile(path.resolve("../frontend/config.json"));
  }
);

app.listen(80);
