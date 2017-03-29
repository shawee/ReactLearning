var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
      return {
          title: 'Error'
      };
    },
    componentDidMount: function () {
      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },
    propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
    },
    render: function () {
        var {title, message}=this.props;
        return (
            <div className="tiny reveal text-center" id="error-modal" data-reveal="">
                <p>{title}</p>
                <p>{message}</p>
                <button className="button hollow" data-close="">OK</button>
            </div>
        );
    }
});

module.exports = ErrorModal;