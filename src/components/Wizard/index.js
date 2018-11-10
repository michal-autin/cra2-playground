import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

class Wizard extends Component {
  render() {
    const {
      hasProgress: { progress }
    } = this.props;
    return <div className={styles.wizard}>{progress && "30% "}Hello</div>;
  }
}

Wizard.propTypes = {
  hasProgress: PropTypes.bool
};

Wizard.defaultProps = {
  hasProgress: true
};

export default Wizard;
