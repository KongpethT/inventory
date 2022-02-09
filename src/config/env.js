const colors = {
    getPageBackgroupDefault: '#0f2442'
}
let host = 'http://localhost:3002'
if (process.env.NODE_ENV !== 'development') { host = 'http://thbkk1sv0004:3002' }
const stateRuning = () => {
    if (process.env.NODE_ENV === 'development') {
        return <span className='text-warning'>(development)</span>
    }
}

const alertError = (text) => {
    return <span className='text-danger'>({text})</span>
}
const alertSuccessfully = (text) => {
    return <span className='text-success'>({text})</span>
}
const api = {
    getComputer: `${host}/api/computer`,
    getDevicesModul: `${host}/api/devicesModule`,
}

const items = {
    getStateRuning: stateRuning(),
    getColor: colors,
    getAPI: api,
    getAlertError: (text) => {
        return <span className='text-danger'>{text}</span>
    },
    getAlertSuccessfully: (text) => {
        return <span className='text-success'>{text}</span>
    },
}
export { items }