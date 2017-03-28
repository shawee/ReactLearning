var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
      return {
        isLoading: false
      };
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true});
      openWeatherMap.getTemp(location).then(function (temp){
          that.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
      }, function (errorMessage){
        that.setState({
           isLoading: false 
        });
         alert(errorMessage); 
      });
    },
    render: function () {
        var {isLoading, temp, location} = this.state;
        
        function Loading(){
            if (isLoading){
                return (
                    <h2>Fetching the weather data</h2>
                );
            }else {
                return (<WeatherMessage temp={temp} location={location}/>);
            }
        }
        
        return (
            <div>
                <h2>weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {Loading()}
            </div>
        );
    }
});

module.exports = Weather;