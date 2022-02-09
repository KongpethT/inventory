const AddType = (req, res) => {
    return (
        <section>
            <header>
                <h6 className="text-link">ADD NEW A TYPE</h6>
                <hr />
            </header>
            <article>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="name of type" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </article>
        </section>
    )
}

export default AddType