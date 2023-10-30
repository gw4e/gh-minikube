function getBackendApiUrl() {
    const host = process.env.REACT_APP_BACKEND_HOST
    const url=  `http://${host}/crud`;
    console.log("url")
    console.log(url)
    return url
}


module.exports = { getBackendApiUrl };
