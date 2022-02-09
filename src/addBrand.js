import { items } from './config/env'
import axios from 'axios'
import { useCallback, useState } from 'react'

const AddBrand = () => {
    const [getBrand, setBrand] = useState('')
    const [getAlertError, setAlertError] = useState('')
    const [getAlertSuccess, setAlertSuccess] = useState('')
    const alertError = items.getAlertError(getAlertError)
    const alertSuccess = items.getAlertSuccessfully(getAlertSuccess)
    const postsBrand = useCallback(() => {
        if (!!getBrand) {
            axios.post(`${items.getAPI.getDevicesModul}/brand/posts`, { getBrand })
                .then((brick) => {
                    const result = brick.data
                    if (result.affectedRows) {
                        setAlertSuccess(`(Successfully)`)
                        setBrand('')
                    } else {
                        setAlertError(`(${result})`)
                    }
                    setTimeout(() => { setAlertError('') }, 3000)
                    setTimeout(() => { setAlertSuccess('') }, 3000)
                }
                )
        }

    }, [getBrand])
    return (
        <section>
            <header>
                <h6>ADD NEW A BRAND {items.getStateRuning} {alertError} {alertSuccess}</h6>
                <hr />
            </header>
            <article>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="name of brand"
                        value={getBrand}
                        onChange={(e) => { setBrand(e.target.value) }} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={postsBrand}>Submit</button>
            </article>
        </section>
    )
}

export default AddBrand