import React from 'react';
import { Container } from 'react-bootstrap';

const Covid = () => {
    return (
        <div>
            <h2 className="mt-5 text-info">Covid 19 Vaccine Registration</h2>
            <p className="text-success">We provide Vaccine at low cost</p>

            <Container className="mb-2">
                
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://www.buffalo.edu/content/authoritative/issues-management/health-and-safety/posters/print/get-vaccinated/_jcr_content/par/image.img.original.png/1623170021286.png" alt="" className="w-50" />
                    </div>
                    <div className="col-12 col-md-6 text-start">
                    <form className="mt-5">
                    <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputEmail3" placeholder="Name"/>
    </div>
  </div>
  <br />
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <br />
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile Number</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="inputPassword3" placeholder="Mobile No"/>
    </div>
  </div>
  <br />
  
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Doses</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
            One dose
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
            Two doses
          </label>
        </div>
        
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2">Valid Information</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          I recheck all the given information
        </label>
      </div>
    </div>
  </div>
  <br />
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Covid;