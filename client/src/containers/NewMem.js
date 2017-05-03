import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';

import { uploadPic, clearUplodedPic } from './../actions/filestack';
import { uploadMem } from './../actions/memes';

class NewMem extends Component {
  componentWillMount() {
    this.props.clearUplodedPic();
  }
  
  uploadImg() {
    this.props.uploadPic();
  }

  renderError() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          Error!{this.props.errorMessage}
        </div>
      )
    }
  }

  handleFormSubmit(formValues) {
    let sumVals = {...formValues};
    console.log(formValues)
    if(this.props.uploadedPic) {
      sumVals = {...sumVals, imgUrl: this.props.uploadedPic}
    }
    console.log(sumVals)
    this.props.uploadMem(sumVals);
  }

  renderField(field) {
    return (
      <fieldset className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input}/>
        {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
      </fieldset>
    )
  }

  renderUploadedPic() {
    if(this.props.uploadedPic) {
      return (
        <div className="text-center">
          <img src={this.props.uploadedPic} alt="uploaded pic" className="img-thumbnail" />     
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div>
        <Link to="/browse" className="btn btn-danger">Back</Link>

        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <Field 
            name="title" 
            type="text" 
            label="Title" 
            component={this.renderField}/>
          <Field 
            name="description" 
            label="Description" 
            component={this.renderField}/>

          {this.renderUploadedPic()}

          <div className="text-center">
            <button type="button" className="btn btn-info" onClick={this.uploadImg.bind(this)}>Upload Pic</button>
          </div>
          <hr />
          <div className="text-center">
            <button action="submit" className="btn btn-primary">Upload meme</button>
          </div>
        </form>

        {this.renderError()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    uploadedPic: state.filestack.uploadedPic,
    errorMessage: state.filestack.error
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({uploadPic, uploadMem, clearUplodedPic}, dispatch);
}

const validate = formProps => {
  const errors = {};

  if(!formProps.title) {
    errors.title = 'Please enter the title'
  }

  return errors;
}

NewMem = reduxForm({
  form: 'addMem',
  validate
})(NewMem)

export default connect(mapStateToProps, mapDispatchToProps)(NewMem);