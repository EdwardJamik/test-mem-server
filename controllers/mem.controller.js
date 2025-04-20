require('dotenv').config();

module.exports.memList = async (req, res, next) => {
    try {
        const memData = require('../memList.json');

        res.status(200).json(memData);
    } catch (e) {
        console.error("Error fetching mem list:", e);
        res.status(500).json({ error: 'Internal server error' });
    }
};

