import reactImg from "./images/react-logo.svg";

function Middle() {
  return (
    <div className="main-center">
      <div className="text">
        <h1>Say hello to ReactJS</h1>
        <div className="main-text">
          <p>
            You will learn how to use the most poular frontend library, and
            become a super Ninja developer.
          </p>
        </div>
        <div>
          <button type="button" class="my-btn btn btn-light">
            Awesome!
          </button>
        </div>
      </div>

      <div className="behind-right">
        <div>
          <img className="react-behind-center" src={reactImg} />
        </div>
        <div>
          <img className="react-behind-center" src={reactImg} />
        </div>
        <div>
          <img className="react-behind-center" src={reactImg} />
        </div>
      </div>
    </div>
  );
}

export default Middle;
