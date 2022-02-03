import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

export default class Form extends Component {
  state = {
    date: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null; //If error is falsy, return null

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validatePropery = ({ name, value }) => {
    const obj = { [name]: value }; // Computed property of ES6
    const schema = { [name]: this.schema[name] }; // Computed property name ]}
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null; // If error is defined return the error message
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return; // If there are errors, do not submit

    this.doSubmit();
  };

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    const errors = { ...this.state.errors };
    const errorMessage = this.validatePropery(target);

    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];

    this.setState({
      data: {
        ...this.state.data, // save the old state first
        [name]: value,
      },
      errors,
    });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}
