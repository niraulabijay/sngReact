import React, { useState, useEffect, Component } from "react";
import {
  Formik,
  Field,
  Form,
  setFieldValue,
  ErrorMessage,
  FieldArray,
} from "formik";
import * as Yup from "yup";
import { addDays, set, format } from "date-fns";
import FormikControl from "../Formik/FormikControl";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

function WhereTo() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 1));
  const initialValues = {
    occupancy: [{ adult: 1, child: 0, id: "" + Math.random() }],
    selectionRange: {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    },
  };
  const validationSchema = Yup.object({
    destination: Yup.string().required("This Field Cannot be Empty"),
  });
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  return (
    <div>
      <div
        className="bottom-search-bar-mobile d-flex d-lg-none"
        data-toggle="modal"
        data-target="#myModal"
      >
        <span>Where to</span>
        <span>
          <i className="fa fa-ellipsis-v"></i>
        </span>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Where to</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <div className="bottom-search-bar">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {(formik) => (
                    <Form>
                      <FormikControl
                        control="date"
                        type="text"
                        name="selectionRange"
                      />
                      <FormikControl control="occupancy" name="occupancy" />
                      <div className="button-container">
                        <button>Search</button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereTo;
