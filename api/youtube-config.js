module.exports = function handler(_request, response) {
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json');
  response.status(200).json({
    apiKey: process.env.YOUTUBE_API_KEY || ''
  });
};
