import React from "react";
//add a ref to the consturctor below to access the height in the DOM
class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //passing a callback to an eventlistener here on image load
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    // "spans:spans" can be written as just "spans" in ES2015
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      //inline style with ES2015 template string for the sate of spans
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <a href={urls.regular}>
          <img ref={this.imageRef} alt={description} src={urls.regular} />
        </a>
      </div>
    );
  }
}

export default ImageCard;
