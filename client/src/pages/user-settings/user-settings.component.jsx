import React from "react";
import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import "./user-settings.styles.scss";
const UserSettings = ({ signOutStart }) => {
  return (
    <div className="user-settings">
      <CustomButton width={"200px"} onClick={signOutStart}>
        sign out
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(null, mapDispatchToProps)(UserSettings);
