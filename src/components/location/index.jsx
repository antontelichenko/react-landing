import React, {Component} from 'react';

class Location extends Component {
    render() {
        return (
            <div className="location_wrapper">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10162.673544602912!2d30.445923699999998!3d50.447277199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cc24d030cf41%3A0xfbed7f422ec96831!2z0KLQoNCmINCa0L7RgdC80L7Qv9C-0LvQuNGC!5e0!3m2!1sru!2sua!4v1535992872430"
                    width="100%"
                    height="500px"
                    frameBorder="0"
                    allowFullScreen
                >
                </iframe>

                <div className="location_tag">

                    <div>Location</div>

                </div>

            </div>
        );
    }
}

export default Location;