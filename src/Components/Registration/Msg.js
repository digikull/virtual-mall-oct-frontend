import React from "react";
import { Link } from "react-router-dom";
import Registration from './Registration.css'

class Msg extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="container">
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              <h4 class="modal-title">Virtual Mall</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                
              </div>
              <div class="modal-body">
                <p>email has been sent to your email account please check it out!!!.</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Msg;
