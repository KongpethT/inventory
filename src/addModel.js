import { items } from './config/env'

const AddModel = () => {
    return (
        <section>
            <header>
                <h6 className="text-link">ADD NEW A MODEL {items.getStateRuning}</h6>
                <hr />
            </header>
            <article>
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option value="0">Open this select Type</option>
                        <option value="1">Laptop</option>
                        <option value="2">Desktop</option>
                        <option value="3">Printer</option>
                    </select>
                </div>
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option value="0">Open this select Brand</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="name of model" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </article>

        </section >
    )
}

export default AddModel