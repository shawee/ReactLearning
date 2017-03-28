var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        if (temp && location){
            return (
                <h2>it is {temp} in {location}</h2>
            );
        }else {
            return (<p></p>);
        }
    }
});

module.exports = WeatherMessage;