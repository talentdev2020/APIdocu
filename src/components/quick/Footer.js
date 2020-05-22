import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
const Footer = () => {
  return (
    <div>
      <Grid container>
        <Grid item md={12} lg={12}>
          <div className="info alert-c">
            <div className="left-content">
              <div className="icon-wrapper">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="1.0.-Drafts"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="D.4.2.Developers---components"
                      transform="translate(-423.000000, -2432.000000)"
                    >
                      <g
                        id="Content"
                        transform="translate(380.000000, 206.000000)"
                      >
                        <g
                          id="note"
                          transform="translate(2.000000, 2178.000000)"
                        >
                          <g
                            id="24px-(1)"
                            transform="translate(39.000000, 46.000000)"
                          >
                            <polygon
                              id="Path"
                              points="0 0 24 0 24 24 0 24"
                            ></polygon>
                            <path
                              d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,17 C11.45,17 11,16.55 11,16 L11,12 C11,11.45 11.45,11 12,11 C12.55,11 13,11.45 13,12 L13,16 C13,16.55 12.55,17 12,17 Z M13,9 L11,9 L11,7 L13,7 L13,9 Z"
                              id="Shape"
                              fill="#FFFFFF"
                              fillRule="nonzero"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="right-content">
              <h4 className="h4-dark-100">Where to go from here?</h4>
              <div className="information-links">
                <div className="content-dark-100">
                  <span className="arrow">
                    <svg
                      width="16px"
                      height="8px"
                      viewBox="0 0 16 8"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          className="arrow-color"
                          id="6.0.Careers"
                          transform="translate(-1219.000000, -4530.000000)"
                          fill="#0055FF"
                          fillRule="nonzero"
                        >
                          <g
                            id="Openings"
                            transform="translate(160.000000, 4134.000000)"
                          >
                            <g
                              id="round-arrow_right_alt-24px"
                              transform="translate(1055.000000, 388.000000)"
                            >
                              <path
                                d="M16.01,11 L5,11 C4.45,11 4,11.45 4,12 C4,12.55 4.45,13 5,13 L16.01,13 L16.01,14.79 C16.01,15.24 16.55,15.46 16.86,15.14 L19.64,12.35 C19.83,12.15 19.83,11.84 19.64,11.64 L16.86,8.85 C16.55,8.53 16.01,8.76 16.01,9.2 L16.01,11 Z"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  To know more about Transaction authorization, please refer to
                  our{' '}
                  <Link className="link" to="/quickStart/transactions">
                    Transaction authorization guide
                  </Link>
                </div>
                <div className="content-dark-100">
                  <span className="arrow">
                    <svg
                      width="16px"
                      height="8px"
                      viewBox="0 0 16 8"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          className="arrow-color"
                          id="6.0.Careers"
                          transform="translate(-1219.000000, -4530.000000)"
                          fill="#0055FF"
                          fillRule="nonzero"
                        >
                          <g
                            id="Openings"
                            transform="translate(160.000000, 4134.000000)"
                          >
                            <g
                              id="round-arrow_right_alt-24px"
                              transform="translate(1055.000000, 388.000000)"
                            >
                              <path
                                d="M16.01,11 L5,11 C4.45,11 4,11.45 4,12 C4,12.55 4.45,13 5,13 L16.01,13 L16.01,14.79 C16.01,15.24 16.55,15.46 16.86,15.14 L19.64,12.35 C19.83,12.15 19.83,11.84 19.64,11.64 L16.86,8.85 C16.55,8.53 16.01,8.76 16.01,9.2 L16.01,11 Z"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  To know more about PCI compliance and how Venus can help you,
                  please refer to our{' '}
                  <Link className="link" to="/quickStart/pci">
                    PCI guide
                  </Link>
                </div>
                <div className="content-dark-100">
                  <span className="arrow">
                    <svg
                      width="16px"
                      height="8px"
                      viewBox="0 0 16 8"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          className="arrow-color"
                          id="6.0.Careers"
                          transform="translate(-1219.000000, -4530.000000)"
                          fill="#0055FF"
                          fillRule="nonzero"
                        >
                          <g
                            id="Openings"
                            transform="translate(160.000000, 4134.000000)"
                          >
                            <g
                              id="round-arrow_right_alt-24px"
                              transform="translate(1055.000000, 388.000000)"
                            >
                              <path
                                d="M16.01,11 L5,11 C4.45,11 4,11.45 4,12 C4,12.55 4.45,13 5,13 L16.01,13 L16.01,14.79 C16.01,15.24 16.55,15.46 16.86,15.14 L19.64,12.35 C19.83,12.15 19.83,11.84 19.64,11.64 L16.86,8.85 C16.55,8.53 16.01,8.76 16.01,9.2 L16.01,11 Z"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  If you want to check out the details of our APIs, check our{' '}
                  <Link className="link" to="/coreAPI">
                    API reference
                  </Link>
                  .
                </div>
                <div className="content-dark-100">
                  <span className="arrow">
                    <svg
                      width="16px"
                      height="8px"
                      viewBox="0 0 16 8"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          className="arrow-color"
                          id="6.0.Careers"
                          transform="translate(-1219.000000, -4530.000000)"
                          fill="#0055FF"
                          fillRule="nonzero"
                        >
                          <g
                            id="Openings"
                            transform="translate(160.000000, 4134.000000)"
                          >
                            <g
                              id="round-arrow_right_alt-24px"
                              transform="translate(1055.000000, 388.000000)"
                            >
                              <path
                                d="M16.01,11 L5,11 C4.45,11 4,11.45 4,12 C4,12.55 4.45,13 5,13 L16.01,13 L16.01,14.79 C16.01,15.24 16.55,15.46 16.86,15.14 L19.64,12.35 C19.83,12.15 19.83,11.84 19.64,11.64 L16.86,8.85 C16.55,8.53 16.01,8.76 16.01,9.2 L16.01,11 Z"
                                id="Path"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  If you’re interested in integrating our SDKs, go to our{' '}
                  <Link className="link" to="/coreAPI">
                    Venus SDKs section
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
