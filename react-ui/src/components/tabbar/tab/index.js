import React, { Component } from 'react';
import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class Tab extends Component {
  render() {
    let classname = styles["tab"] + ( this.props.selected?" "+styles["selected"]:"" );
    classname += " " +styles[this.props.file.type];
    return (
      <div className={classname} onClick={this.props.changeTab}>
        <div className={styles["grid"]}>
            <div className={styles["filename"]}>{this.props.file.name}</div>
            <div className={styles["close-button"]}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
        </div>
      </div>
    );
  }
}

export default Tab;
