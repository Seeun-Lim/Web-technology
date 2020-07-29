module.exports = (req, res, next) => {
    console.log('Test MiddleWare');
    next();
};