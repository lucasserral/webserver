import http from "http";
import { v4 as uuidv4 } from "uuid";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    const person = {
      id: uuidv4(),
      name: "JJ",
      email: "lucasser21@gmail.com",
    };

    res.write(JSON.stringify(person));
    res.end();
  })
  .listen(8080);
