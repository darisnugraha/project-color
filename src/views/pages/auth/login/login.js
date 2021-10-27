import React from "react";
import { Link, withRouter } from "react-router-dom";
import { PageSettings } from "../../../../infrastructure/config/page-settings";
import FormLogin from "../../../components/login/form-login";

class Login extends React.Component {
  static contextType = PageSettings;

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.context.handleSetPageSidebar(false);
    this.context.handleSetPageHeader(false);
    this.context.handleSetBodyWhiteBg(true);
  }

  componentWillUnmount() {
    this.context.handleSetPageSidebar(true);
    this.context.handleSetPageHeader(true);
    this.context.handleSetBodyWhiteBg(false);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div className="login login-with-news-feed">
        <div className="news-feed">
          <div
            className="news-image"
            style={{
              backgroundImage:
                "url(../../../../infrastructure/assets/img/login-bg/login-bg-11.jpg)",
            }}
          ></div>
          <div className="news-caption">
            <h4 className="caption-title">
              <b>AMG</b> CADP
            </h4>
            {/* <p>
							Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p> */}
          </div>
        </div>
        <div className="right-content">
          <div className="login-header">
            <div className="brand">
              <span className="logo"></span> <b>AMG</b> CADP
              {/* <small>responsive bootstrap 4 admin template</small> */}
            </div>
            <div className="icon">
              <i className="fa fa-sign-in"></i>
            </div>
          </div>
          <div className="login-content">
            <FormLogin />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
