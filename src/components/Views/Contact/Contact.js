import React, { Component } from "react";
import classes from "./Contact.module.css";
import { createArrayFromObject, checkValidity } from "../../../shared/utility";
import Spinner from "../../UI/Spinner/Spinner";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { contactControl } from "../../../shared/Controls/contact";

class Contact extends Component {
  state = {
    controls: contactControl,
    formIsValid: false
  };

  checkIfFormIsValid = () => {
    let isFormValid = true;
    for (let key in this.state.controls) {
      if (!this.state.controls[key].valid) {
        isFormValid = false;
      }
    }
    if (this.state.formIsValid !== isFormValid) {
      this.setState({ formIsValid: isFormValid });
    }
  };

  onInputChangeHandler = (event, controlName) => {
    let updated = { ...this.state.controls };
    let control = updated[controlName];
    control["value"] = event.target.value;
    control["valid"] = checkValidity(
      event.target.value,
      this.state.controls[controlName].validation
    );
    control["touched"] = true;
    updated[controlName] = control;

    this.setState({ controls: updated }, this.checkIfFormIsValid);
  };

  createInputs = formElementsArray => {
    let inputs = formElementsArray.map(formElement => {
      const {
        id,
        config: {
          value,
          elementType,
          valid,
          touched,
          validation,
          elementConfig
        }
      } = formElement;

      return (
        <Input
          elementType={elementType}
          key={id}
          invalid={!valid}
          touched={touched}
          shouldValidate={validation}
          elementConfig={elementConfig}
          value={value}
          changed={event => this.onInputChangeHandler(event, id)}
        />
      );
    });
    return inputs;
  };

  createTitle = () => {
    let title = "צור קשר";
    let res = (
      <div className={classes.Title}>
        <h2>{title}</h2>
      </div>
    );
    return res;
  };

  createSubmitButton = () => {
    let button = (
      <div onClick={event => {
          if (this.state.formIsValid) {
            this.submitHandler(event);
          }
        }}
        className={this.state.formIsValid ? classes.Submit: classes.SubmitDisabled + " " + classes.Submit}>
        <button disabled={!this.state.formIsValid} className={classes.Btn}>שלח</button>  
      </div>
    );

    return button;
  };
  submitHandler = event => {
    event.preventDefault();
    console.log("contact our server and send pniel an email.");
  };

  createFormOfInputs = formElementsArray => {
    let title = this.createTitle();
    let subTitle = <h4>אנה מלאו את פרטיכם ונחזור אליכם בהקדם האפשרי</h4>;
    let inputs = this.createInputs(formElementsArray);
    let button = this.createSubmitButton();
    let form = (
      <form className={classes.AuthForm} onSubmit={this.submitHandler}>
        {title}
        {subTitle}
        {inputs}
        {button}
      </form>
    );

    if (this.props.loading) {
      form = <Spinner />;
    }

    return form;
  };

  render() {
    let formElementsArray = createArrayFromObject(this.state.controls);
    let form = this.createFormOfInputs(formElementsArray);
    let authForm = <div className={classes.Auth}>{form}</div>;

    return authForm;
  }
}

export default Contact;
