import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Get IP address
  const ip =
    req.headers['x-forwarded-for'] ||
    req.socket?.remoteAddress ||
    "Unknown";

  console.log("Visitor IP:", ip);

  try {
    // Read HTML file
    const filePath = path.join(process.cwd(), 'logger.html');
    const html = fs.readFileSync(filePath, 'utf8');

    // Send HTML as response
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send("Error loading page");
  }
}