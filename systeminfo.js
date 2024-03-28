const os = require('os');
const si = require('systeminformation');

// Function to get basic OS information
function getOSInfo() {
    return {
        hostname: os.hostname(),
        type: os.type(),
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        totalMemory: os.totalmem(),
    };
}

// Function to get CPU information
function getCPUInfo() {
    return si.cpu()
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
}

// Function to get graphics card information
function getGraphicsInfo() {
    return si.graphics()
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        });
}

module.exports = {
    getOSInfo,
    getCPUInfo,
    getGraphicsInfo
};
