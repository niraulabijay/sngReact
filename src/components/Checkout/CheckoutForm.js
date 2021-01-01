import React from "react";

function CheckoutForm() {
  return (
    <div>
      <form action="">
        <div className="form-group radio">
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Mrs.</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Mr.</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other">Other</label>
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="first-name"
            placeholder="First name"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Last name"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="last-name"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <select class="form-control" id="select">
            <option>Country or Region</option>
          </select>
        </div>

    
      
      </form>
    </div>
  );
}

export default CheckoutForm;
