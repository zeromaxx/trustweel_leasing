import React from 'react'

export default function Contact() {
  return (
    <div> <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Contact details</h2>
        <p>Fill in the fields below to receive a quote.</p>
        <form>
          <div class="mb-3">
            <div class="row">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name*" required>
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name*" required>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" placeholder="What is your e-mail?*" required>
          </div>
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon1">📞</span>
              <input type="tel" class="form-control" placeholder="Telephone*" aria-label="Telephone" aria-describedby="basic-addon1" required>
            </div>
          </div>

          <h2>Additional details</h2>
          <div class="mb-3">
            <select class="form-select" required>
              <option value="">Please select</option>
              <!-- Other options here -->
            </select>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Company name*" required>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="VAT number*" required>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="City*" required>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
