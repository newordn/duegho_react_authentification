import React from "react";
import HeaderSetup from '../../components/Header/HeaderSetup';

class Step extends React.Component {

  render() {
    const {
      isActive,
      displayPrevious,
      displayNext,
      displaySubmit,
      component,
      children,
    } = this.props;

    if(isActive === false) return null;

    return (
      <React.Fragment>
        <div className="auth no-background">
          <HeaderSetup />
          <main>
            {component ? React.createElement(component) : children}
          </main>
          <footer className="setup_footer">
          <Previous
            isActive={displayPrevious}
            goToPreviousStep={() => this.props.goToPreviousStep()}
          />
          <Next
            isActive={displayNext}
            goToNextStep={() => this.props.goToNextStep()}
          />
          <Submit isActive={displaySubmit} />
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

class Next extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button onClick={() => this.props.goToNextStep()}>
        Next
      </button>
    );
  }
}

class Previous extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button onClick={() => this.props.goToPreviousStep()}>
        Previous
      </button>
    );
  }
}

class Submit extends React.Component {

  render() {
    const { isActive } = this.props;
    if (isActive === false) return null;

    return (
      <button type="submit">Démarrer</button>
    );

  }
}


export { Step };