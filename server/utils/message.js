var moments = require('moment');


var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moments().valueOf()
    };
};


var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.tn/maps?q=${latitude},${longitude}`,
        createdAt: moments().valueOf()
    };
};

module.exports = {generateMessage, generateLocationMessage};