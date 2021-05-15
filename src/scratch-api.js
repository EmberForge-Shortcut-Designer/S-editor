const https = require('https');
const fetch = require('node-fetch');

const API = 'https://trampoline.turbowarp.org/proxy/projects/$id';
const OPTIONS = {
    agent: new https.Agent({
        keepAlive: true
    }),
    timeout: 5000
};

const getProjectMeta = async (id) => {
    const response = await fetch(API.replace('$id', id), OPTIONS);
    if (!response.ok) {
        throw new Error(`Unexpected status code: ${response.status}`);
    }
    return response.json();
};

module.exports = {
    getProjectMeta
};
