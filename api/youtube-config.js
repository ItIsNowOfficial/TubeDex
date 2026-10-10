module.exports = function handler(_request, response) {
  const configuredKey = String(process.env.YOUTUBE_API_KEY || '').trim();
  const apiKey = configuredKey.replace(/^(['"])([\s\S]*)\1$/, '$2').trim();

  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('Content-Type', 'application/json');
  response.status(200).json({
    apiKey
  });
};
