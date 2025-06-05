import http from "http";
import fs from "fs";

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile("./index.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error Loading HTML");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/about") {
      fs.readFile("./about.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error Loading HTML");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/contact-me") {
      fs.readFile("./contact-me.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error Loading HTML");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    } else if (req.url === "/style.css") {
      fs.readFile("./style.css", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error Loading CSS");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      });
    } else {
      fs.readFile("./404.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error Loading HTML");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }
  })
  .listen(8000, () => {
    console.log("server running at localhost 8000");
  });
