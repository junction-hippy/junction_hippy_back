export const hi = async (req, res, next) => {
  try {
    res.send('Hi!!!!!!!!');
  } catch (err) {
    console.error(err);
    next(err);
  }
};
