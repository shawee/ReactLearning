var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');


var ErrorModal = React.createClass({
    getDefaultProps: function () {
      return {
          title: 'Error'
      };
    },
    componentDidMount: function () {
      
      
      var {title, message}=this.props;
      var modalMarkup = (
          <div className="tiny reveal text-center" id="error-modal" data-reveal="">
                <p>{title}</p>
                <p>{message}</p>
                <button className="button hollow" data-close="">OK</button>
          </div>
      );
        
      var $modal = $(ReactDOMServer.renderToString(modalMarkup));
      $(ReactDOM.findDOMNode(this)).html($modal);
        
      var modal = new Foundation.Reveal($('#error-modal'));  
      modal.open();
    },
    propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
    },
    render: function () {
        
        return (
            <div></div>
        );
    }
});

module.exports = ErrorModal;