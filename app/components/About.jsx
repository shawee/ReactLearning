var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="text-center">About</h1>
                <p>This is a learning example of react</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a>
                    </li>
                    <li>
                        <a href="http://openweathermap.org">Open Weather Map API</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = About;