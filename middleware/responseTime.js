module.exports = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`→ ${req.method} ${req.originalUrl} (${ms}ms)`);
  });
  next();
};
