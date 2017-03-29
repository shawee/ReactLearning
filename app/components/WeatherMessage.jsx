var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        if (temp && location){
            return (
                <h1 className="text-center">it is {temp} in {location}</h1>
            );
        }else {
            return (<p></p>);
        }
    }
});

module.exports = WeatherMessage;