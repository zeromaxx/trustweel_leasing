import React from 'react'

export default function Contact() {
  return (
    <div> <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2>Contact details</h2>
        <p>Fill in the fields below to receive a quote.</p>
        <form>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name*" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name*" />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="What is your e-mail?*" />
          </div>
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">📞</span>
              <input type="tel" className="form-control" placeholder="Telephone*" aria-label="Telephone" aria-describedby="basic-addon1" />
            </div>
          </div>

          <h2>Additional details</h2>
          <div className="mb-3">
            <select className="form-select" required>
              <option value="">Please select</option>
            </select>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Company name*" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="VAT number*" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="City*" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
