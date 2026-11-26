const AWS_ACCESS_KEY = 'AKIAIOSFODNN7EXAMPLE';
const AWS_SECRET = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
function getUser(req) { const q = 'SELECT * FROM users WHERE id = ' + req.query.id; return db.query(q); }
module.exports = { AWS_ACCESS_KEY, AWS_SECRET, getUser };
