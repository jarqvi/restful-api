function notFound(req, res) {
    try {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ message: 'Not Found.' }));
        res.end();
    } catch (err) {
        console.log(err);
    }
}


const ErrorHandler = {
    notFound
};

module.exports = ErrorHandler;