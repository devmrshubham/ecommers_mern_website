const getRamdomImageName = (name) => {
    return new Date().getTime() + "" + Math.floor(Math.random() * 1000) + name
}

const getDistination = (module, name) => {
    return __dirname + `/public/uploads/${module}/${name}`
}


module.exports = { getRamdomImageName, getDistination }