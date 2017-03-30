var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function () {
      return {
        isLoading: false,
        error: undefined
      };
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
            isLoading: true,
            error: undefined,
            location: undefined,
            temp: undefined
        });
        
      openWeatherMap.getTemp(location).then(function (temp){
          that.setState({
            location: location,
            temp: temp,
            isLoading: false
          });
      }, function (errorMessage){
        console.log(errorMessage);
        that.setState({
           isLoading: false,
            error: errorMessage.message
        }); 
      });
    },
    componentDidMount: function () {
        var location = this.props.location.query.location;
        
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function (newProps) {
        console.log(newProps);
        var location = newProps.location.query.location;
        
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function () {
        var {isLoading, temp, location, error} = this.state;
        
        function Loading(){
            if (isLoading){
                return (
                    <h1 className="text-center">Fetching the weather data</h1>
                );
            }else if(temp && location) {
                return (<WeatherMessage temp={temp} location={location}/>);
            }
        }
        
        function ErrorMessage () {
            if (typeof error === 'string') {
                return (
                    <ErrorModal message={error}/>
                );
            }
        }
        
        return (
            <div>
                <h1 className="text-center page-title">Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {Loading()}
                {ErrorMessage()}
            </div>
        );
    }
});

module.exports = Weather;