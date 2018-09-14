import { Component } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';

class Error extends Component {
  componentDidMount = () => {
    M.toast({ html: this.renderMessage() });
  };

  renderMessage = () => {
    return `
      <span>${this.props.error.message}</span>
      <a class="btn-flat toast-action" onclick="${this.dismissToast()}">&times;</a>
    `;
  };

  dismissToast = () => {
    return `
      const toastElement = document.querySelector('.toast');
      const toastInstance = M.Toast.getInstance(toastElement);
      toastInstance.dismiss();
    `;
  };

  render() {
    return null;
  }
}

const mapStateToProps = ({ error }) => ({
  error,
});

export default connect(mapStateToProps)(Error);
