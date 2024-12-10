// Tasks file - Run worker Periodically

const { CheckCpfIsCreated, CheckCpfIsfirstLogin } = require ('../services/serviceCheckMvUser')

function startTask () {
    const interval = 60000
    setInterval(CheckCpfIsCreated, interval)
    setInterval(CheckCpfIsfirstLogin, interval)
}
module.exports = { startTask }