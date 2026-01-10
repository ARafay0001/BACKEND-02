export { asyncHandler }

const asyncHandler = (fn) => (req, res, next) => {

    try {

    } catch (error) {
        res.status(err.code || 500).json({ message: error.message || "Internal Server Error" })
    }    
}


//or same try catch with promises 
// const asyncHandler2 = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).
//         catch((err) => (err.message)) }
// }