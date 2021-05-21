export const logHandler = (err, req, res, next) => {
  console.error('[' + new Date() + ']\n' + (err.msg || err.message));
  next(err);
};
export const errorHandler = (err, req, res, next) => {
  if (err.code === 'P2002') {
    res.status(409);
    res.type('json').send(JSON.stringify({ error: err || 'Uncaught Error !' }, null, 4));
  } else {
    res.status(err.status || 500);
    res.type('json').send(JSON.stringify({ err }, null, 4));
  }
};
