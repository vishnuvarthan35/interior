function Counter() {
    return (
        <>
        <div id="counter">
            <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
        <div className="counterbox">
          <div className="counter-icon">
            <i className="fa fa-home" aria-hidden="true" />
          </div>
          <span
            className="counter-number"
            data-from={1}
            data-to={1456}
            data-speed={1000}
          >
            1456
          </span>{" "}
          <span className="counter-text">Projects Completed</span>{" "}
        </div>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
        <div className="counterbox">
          <div className="counter-icon">
            <i className="fa fa-bullhorn" aria-hidden="true" />
          </div>
          <span
            className="counter-number"
            data-from={1}
            data-to={144}
            data-speed={2000}
          >
            144
          </span>{" "}
          <span className="counter-text">Fresh Ideas</span>{" "}
        </div>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
        <div className="counterbox">
          <div className="counter-icon">
            <i className="fa fa-users" aria-hidden="true" />
          </div>
          <span
            className="counter-number"
            data-from={1}
            data-to={917}
            data-speed={3000}
          >
            917
          </span>{" "}
          <span className="counter-text">Satistied Clients</span>{" "}
        </div>
      </div>
      <div className="col-md-3 col-sm-3 col-xs-12 counter-item">
        <div className="counterbox">
          <div className="counter-icon">
            <i className="fa fa-coffee" aria-hidden="true" />
          </div>
          <span
            className="counter-number"
            data-from={1}
            data-to={261}
            data-speed={4000}
          >
            261
          </span>{" "}
          <span className="counter-text">Cups of Coffee</span>{" "}
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    );
}
export default Counter;
