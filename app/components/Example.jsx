var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>here are some examples</p>
            <ol>
                <li>
                    <Link to='/?location=Hangzhou'>Hangzhou, Zhejiang, CN</Link>
                </li>
                <li>
                    <Link to='/?location=Los Angeles'>Los Angeles, CA, U.S</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Example;