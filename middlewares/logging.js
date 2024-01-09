import fs from "fs/promises"; //the function will save logging code to file.

const logging = async (req, res, next) => {
  try {
    const text = `\nIP: ${req.ip}, Method ${req.method}, Endpoint ${req.originalUrl}`;
    await fs.appendFile("logs.txt", text);
  } catch {
    await fs.appendFile(
      "logs.txt",
      `\n Logging is error on IP: ${req.ip}, Method: ${req.medthod}, Endpoint: ${req.originalUrl}`
    );
  }

  next();
};

export default logging;
