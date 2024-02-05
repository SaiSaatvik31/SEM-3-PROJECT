import React from 'react'
import '../styles/SearchBar.css'
import {Col, Form, FormGroup} from 'reactstrap'
import { Apartment, LocalHospital, Person, Search } from '@mui/icons-material'

function SearchBar() {
  return (
    <Col lg='12'>
        <div className="search__bar">
            <h4 style={{paddingBottom:'22px',textDecoration:'underline',textAlign:'center'}}>Search Your Doctors</h4>
            <Form className="d-flex align-items-center gap-4">
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><Person/></span>
                    <div className="">
                        <h6>Doctor</h6>
                        <input type="text" name="" id="" />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><LocalHospital/></span>
                    <div className="">
                        <h6>Department</h6>
                        <input type="text" name="" id="" />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group form__group-fast">
                    <span><Apartment/></span>
                    <div className="">
                        <h6>Hospital</h6>
                        <input type="text" name="" id="" />
                    </div>
                </FormGroup>
                
                <span className="search__icon" type='submit'><Search/></span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar