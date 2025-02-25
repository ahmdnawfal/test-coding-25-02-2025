const validateHeaders = (req, res, next) => {
  const userId = req.header('User-id');
  const scope = req.header('Scope');

  if (userId !== 'ifabula' || scope !== 'user') {
    return res.status(401).json({
      responseCode: 401,
      responseMessage: 'UNAUTHORIZED',
    });
  }

  next();
};

module.exports = validateHeaders;
