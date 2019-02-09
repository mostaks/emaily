 // SurveyNew shows SurveyForm and SurveyFormReview
import React, {Component} from 'react';
import { reduxForm } from "redux-form";
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return(
        <SurveyFormReview
          onCancel={() => this.setState({showFormReview: false})}
        />
      );
    }

    return(
      <SurveyForm
        onSurveySubmit={ () => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  };
};

// This is a nice trick to rid of the form values when we navigate away from the survey form flow. If we navigate away from here by default our values will reset. However if you look at SurveyForm we set destroyOnUnmount to false so that when we are in that flow we actually save the values the user has provided
export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
