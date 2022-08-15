

exports.errorParser = (req, res, next) => {
    const newError = new Error("Error we created");
    next(newError);
    // next()

}