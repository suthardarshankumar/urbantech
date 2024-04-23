import React from 'react';
import styles from './ShippingAddress.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShippingAddress = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.heading}>Shipping address</h1>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Address 2</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-4">
                        <label for="inputState" class="form-label">State</label>
                        <select id="inputState" class="form-select">
                            <option>Choose...</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chhattisgarh</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Pradesh</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Sikkim</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                </form>
                <h1 className={styles.headingSec}>Contact information</h1>
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                </form>
                <h1 className={styles.headingSec}>Payment</h1>
                <form class="row g-3">
                    <fieldset class="row mb-3 mt-5">
                        <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                <label class="form-check-label" for="gridRadios1">
                                    Credit card
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    Debit card
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Card number</label>
                        <input type="number" class="form-control" id="inputAddress" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Name on card</label>
                        <input type="text" class="form-control" id="inputAddress2" />
                    </div>
                    <div class="col-md-10">
                        <label for="inputCity" class="form-label">Expiration date (MM/YY)</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">CVC</label>
                        <input type="number" class="form-control" id="inputZip" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary px-4 py-2">Continue Shipping</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ShippingAddress;