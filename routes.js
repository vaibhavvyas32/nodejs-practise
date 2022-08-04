const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      //Used .on(data) to get the request and parse it into the body.
      console.log(chunk); //Printing those chunks
      body.push(chunk);
    });
    return req.on("end", () => {
      //This will be executed at the end of the request.
      const parsedBody = Buffer.concat(body).toString(); //As the output will be a text we used Buffer.concat.toString to make it into a readable form.
      const message = parsedBody.split("=")[1]; //To see the message given by the user. we have split the left side and made message display only the value in key-value pair
      fs.writeFile("message.txt", message, (err) => {
        //using fs write file method to write the message inside the message.txt
        //instead of writeFileSync we will use writeFile , it is good practise + works better in async
        console.log("Message Added Successfully!"); //For Verification nothing important
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-type", "text/html"); //Defining our own header of text html
  res.write("<html>");
  res.write("<head><title>First NodeJS Server</title></head>");
  res.write("<body>NodeJS Server is running.....</body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;
