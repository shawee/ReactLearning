var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
	render: function () {
		return (
            <div>
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large-6 small-centered">
                        <h2>Main components</h2>
                        {this.props.children}
                    </div>
                </div>
            </div>
		);
	}
});

module.exports = Main;