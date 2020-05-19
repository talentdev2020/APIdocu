import React from 'react';
import styled from 'styled-components';
import './guides.css';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';
import { Wrapper } from './Concept';

const P = styled.p`
  font-family: Montserrat;
  font-weight: 300;
  font-size: 20px;
  color: #2d292a;
  letter-spacing: 0;
  @media (max-width: 992px) and (min-width: 0) {
    font-size: 17px;
    line-height: 28px;
  }
  line-height: 32px;
`;

const Title = styled.div`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 15px;
  color: #2d292a;
  letter-spacing: 0.09px;
  opacity: 1;
`;
const PP = styled.div`
  font-size: 36px;
  margin-bottom:40px
  color: #2d292a;
  line-height: 44px;
  fontweight: 400;
  @media (max-width: 992px) and (min-width: 0) {
    font-size: 24px;
  }
`;
const Guides = () => {
  return (
    <Wrapper>
      <Title>GUIDES</Title>
      <PP>Learn everything you need to know</PP>

      <P>
        Welcome to the Venus platform developer guides. The resources available
        in this section teach you how to integrate with the Platform services to
        offer great Card Products to your customers.
      </P>
      <P>
        These guides explain the basic concepts of the platform, and how to
        combine them to build great products. They also explain how important
        processes like transaction authorization, settlement, reporting or PCI
        compliance work.
      </P>
      <div class="container">
        <Grid container className="equal">
          <Grid item lg={4} md={12} sm={12}>
            <div class="outer-box">
              <a href="/quickStart/concept">
                <div class="box regular">
                  <div class="icon-box">
                    <svg
                      width="40px"
                      height="40px"
                      viewBox="0 0 40 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="D.4.1.Developers---guides"
                          transform="translate(-216.000000, -679.000000)"
                        >
                          <g
                            id="01"
                            transform="translate(160.000000, 623.000000)"
                          >
                            <g id="Starred">
                              <g
                                id="24px"
                                transform="translate(52.000000, 52.000000)"
                              >
                                <polygon
                                  id="Path"
                                  points="0 0 48 0 48 48 0 48"
                                ></polygon>
                                <path
                                  d="M24,21.8 C22.78,21.8 21.8,22.78 21.8,24 C21.8,25.22 22.78,26.2 24,26.2 C25.22,26.2 26.2,25.22 26.2,24 C26.2,22.78 25.22,21.8 24,21.8 Z M24,4 C12.96,4 4,12.96 4,24 C4,35.04 12.96,44 24,44 C35.04,44 44,35.04 44,24 C44,12.96 35.04,4 24,4 Z M28.38,28.38 L12,36 L19.62,19.62 L36,12 L28.38,28.38 Z"
                                  id="Shape"
                                  fill="#FFFFFF"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="info-box">
                    <div class="title-box h3-dark-100">Key Concepts</div>
                    <div class="description-box content-dark-100">
                      This guide introduces the key concepts handled by the
                      Venus platform, and provides a high level overview of the
                      elements that define how cards are issued and how
                      transactions are handled.
                    </div>
                  </div>
                  <div class="triangle-box">
                    <img
                      class="triangle-plus"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAJJJREFUOBHtVVEOgCAIxc7RhbpI3Vu7hz1Yboy2cDL/ZLMAeUjwXESO1FoPrIKVWXfC/e03GV4i2UMkL4DT6JgE0bbVN+uI2ithtINEG4bYeCa8sA97hN1XtvA0wVEA2i1w0C5TpnyimnuwIg3jL71+Wc/R3CONWjdFd0P0KVP+nBJx9FSoKcXUiAlY065m1y/gASqre8K4rJ0/AAAAAElFTkSuQmCC"
                      alt="plus"
                    />
                  </div>
                </div>
              </a>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <div class="outer-box">
              <a href="/quickStart/issuance">
                <div class="box regular">
                  <div class="icon-box">
                    <svg
                      width="40px"
                      height="32px"
                      viewBox="0 0 40 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="D.4.1.Developers---guides"
                          transform="translate(-596.000000, -683.000000)"
                        >
                          <g
                            id="01"
                            transform="translate(160.000000, 623.000000)"
                          >
                            <g id="Starred">
                              <g
                                id="24px-(1)"
                                transform="translate(432.000000, 52.000000)"
                              >
                                <polygon
                                  id="Path"
                                  points="0 0 48 0 48 48 0 48"
                                ></polygon>
                                <path
                                  d="M40,8 L8,8 C5.78,8 4.02,9.78 4.02,12 L4,36 C4,38.22 5.78,40 8,40 L40,40 C42.22,40 44,38.22 44,36 L44,12 C44,9.78 42.22,8 40,8 Z M38,36 L10,36 C8.9,36 8,35.1 8,34 L8,24 L40,24 L40,34 C40,35.1 39.1,36 38,36 Z M40,16 L8,16 L8,14 C8,12.9 8.9,12 10,12 L38,12 C39.1,12 40,12.9 40,14 L40,16 Z"
                                  id="Shape"
                                  fill="#FFFFFF"
                                  fill-rule="nonzero"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="info-box">
                    <div class="title-box h3-dark-100">Card Issuance</div>
                    <div class="description-box content-dark-100">
                      Our APIs allow you to issue virtual and physical cards in
                      a matter of seconds. Read this guide to know all about
                      card issuance using the Venus platform.
                    </div>
                  </div>
                  <div class="triangle-box">
                    <img
                      class="triangle-plus"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAJJJREFUOBHtVVEOgCAIxc7RhbpI3Vu7hz1Yboy2cDL/ZLMAeUjwXESO1FoPrIKVWXfC/e03GV4i2UMkL4DT6JgE0bbVN+uI2ithtINEG4bYeCa8sA97hN1XtvA0wVEA2i1w0C5TpnyimnuwIg3jL71+Wc/R3CONWjdFd0P0KVP+nBJx9FSoKcXUiAlY065m1y/gASqre8K4rJ0/AAAAAElFTkSuQmCC"
                      alt="plus"
                    />
                  </div>
                </div>
              </a>
            </div>
          </Grid>
          <Grid item lg={4} md={12} sm={12}>
            <div class="column col-lg-4 col-md-12 col-sm-12">
              <div class="outer-box">
                <a href="/quickStart/transactions">
                  <div class="box regular">
                    <div class="icon-box">
                      <svg
                        width="36px"
                        height="26px"
                        viewBox="0 0 36 26"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="1.0.-Drafts"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="D.4.1.Developers---guides"
                            transform="translate(-975.000000, -686.000000)"
                          >
                            <g
                              id="01"
                              transform="translate(160.000000, 623.000000)"
                            >
                              <g id="Starred">
                                <g
                                  id="24px-(2)"
                                  transform="translate(809.000000, 52.000000)"
                                >
                                  <polygon
                                    id="Path"
                                    points="0 0 48 0 48 48 0 48"
                                  ></polygon>
                                  <path
                                    d="M12.28,23.72 L6.72,29.3 C6.34,29.7 6.34,30.32 6.72,30.72 L12.28,36.3 C12.9,36.94 13.98,36.48 13.98,35.6 L13.98,32 L26,32 C27.1,32 28,31.1 28,30 C28,28.9 27.1,28 26,28 L13.98,28 L13.98,24.42 C13.98,23.52 12.9,23.08 12.28,23.72 Z M41.3,17.3 L35.74,11.72 C35.12,11.08 34.04,11.54 34.04,12.42 L34.04,16 L22,16 C20.9,16 20,16.9 20,18 C20,19.1 20.9,20 22,20 L34.02,20 L34.02,23.58 C34.02,24.48 35.1,24.92 35.72,24.28 L41.28,18.7 C41.68,18.32 41.68,17.68 41.3,17.3 Z"
                                    id="Shape"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  ></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="info-box">
                      <div class="title-box h3-dark-100">
                        Transaction authorization
                      </div>
                      <div class="description-box content-dark-100">
                        Every transaction needs to be reviewed and authorised.
                        This process is fast and automatic, but also flexible.
                        The Venus platform supports different authorization
                        models.
                      </div>
                    </div>
                    <div class="triangle-box">
                      <img
                        class="triangle-plus"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAJJJREFUOBHtVVEOgCAIxc7RhbpI3Vu7hz1Yboy2cDL/ZLMAeUjwXESO1FoPrIKVWXfC/e03GV4i2UMkL4DT6JgE0bbVN+uI2ithtINEG4bYeCa8sA97hN1XtvA0wVEA2i1w0C5TpnyimnuwIg3jL71+Wc/R3CONWjdFd0P0KVP+nBJx9FSoKcXUiAlY065m1y/gASqre8K4rJ0/AAAAAElFTkSuQmCC"
                        alt="plus"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container style={{ marginTop: '0.5rem' }}>
          <Grid item lg={6} md={12} sm={12}>
            <div class="outer-box">
              <a href="/quickStart/pci">
                <div class="box regular">
                  <div class="icon-box">
                    <svg
                      width="38px"
                      height="46px"
                      viewBox="0 0 38 46"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="D.4.1.Developers---guides"
                          transform="translate(-597.000000, -1035.000000)"
                          fill="#FFFFFF"
                          fill-rule="nonzero"
                        >
                          <g
                            id="01"
                            transform="translate(160.000000, 623.000000)"
                          >
                            <g id="Starred">
                              <g
                                id="24px-(4)"
                                transform="translate(437.000000, 412.000000)"
                              >
                                <path
                                  d="M17.0921739,0.751304348 L2.48347826,7.24173913 C0.980869565,7.90956522 0,9.41217391 0,11.0608696 L0,20.8695652 C0,32.4521739 8.01391304,43.2834783 18.7826087,45.9130435 C29.5513043,43.2834783 37.5652174,32.4521739 37.5652174,20.8695652 L37.5652174,11.0608696 C37.5652174,9.41217391 36.5843478,7.90956522 35.0817391,7.24173913 L20.4730435,0.751304348 C19.4086957,0.271304348 18.1565217,0.271304348 17.0921739,0.751304348 Z M18.7826087,22.9356522 L33.3913043,22.9356522 C32.2852174,31.533913 26.546087,39.1930435 18.7826087,41.5930435 L18.7826087,22.9565217 L4.17391304,22.9565217 L4.17391304,11.0608696 L18.7826087,4.57043478 L18.7826087,22.9356522 Z"
                                  id="Shape"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="info-box">
                    <div class="title-box h3-dark-100">PCI</div>
                    <div class="description-box content-dark-100">
                      The information of our cards (card number, cvv, etc.) is
                      protected by following the PCI Standards. This guide
                      introduces the concepts around PCI and how to show the
                      protected data in your apps.
                    </div>
                  </div>
                  <div class="triangle-box">
                    <img
                      class="triangle-plus"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAJJJREFUOBHtVVEOgCAIxc7RhbpI3Vu7hz1Yboy2cDL/ZLMAeUjwXESO1FoPrIKVWXfC/e03GV4i2UMkL4DT6JgE0bbVN+uI2ithtINEG4bYeCa8sA97hN1XtvA0wVEA2i1w0C5TpnyimnuwIg3jL71+Wc/R3CONWjdFd0P0KVP+nBJx9FSoKcXUiAlY065m1y/gASqre8K4rJ0/AAAAAElFTkSuQmCC"
                      alt="plus"
                    />
                  </div>
                </div>
              </a>
            </div>
          </Grid>

          <Grid item lg={6} md={12} sm={12}>
            <div class="outer-box">
              <a href="/quickStart/integrations">
                <div class="box regular">
                  <div class="icon-box">
                    <svg
                      width="36px"
                      height="40px"
                      viewBox="0 0 36 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="1.0.-Drafts"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="D.4.1.Developers---guides"
                          transform="translate(-218.000000, -1039.000000)"
                        >
                          <g
                            id="01"
                            transform="translate(160.000000, 623.000000)"
                          >
                            <g id="Starred">
                              <g
                                id="24px-(8)"
                                transform="translate(52.000000, 412.000000)"
                              >
                                <polygon
                                  id="Path"
                                  points="0 0 48 0 48 48 0 48"
                                ></polygon>
                                <path
                                  d="M36,32.16 C34.48,32.16 33.12,32.76 32.08,33.7 L17.82,25.4 C17.92,24.94 18,24.48 18,24 C18,23.52 17.92,23.06 17.82,22.6 L31.92,14.38 C33,15.38 34.42,16 36,16 C39.32,16 42,13.32 42,10 C42,6.68 39.32,4 36,4 C32.68,4 30,6.68 30,10 C30,10.48 30.08,10.94 30.18,11.4 L16.08,19.62 C15,18.62 13.58,18 12,18 C8.68,18 6,20.68 6,24 C6,27.32 8.68,30 12,30 C13.58,30 15,29.38 16.08,28.38 L30.32,36.7 C30.22,37.12 30.16,37.56 30.16,38 C30.16,41.22 32.78,43.84 36,43.84 C39.22,43.84 41.84,41.22 41.84,38 C41.84,34.78 39.22,32.16 36,32.16 Z"
                                  id="Path"
                                  fill="#FFFFFF"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div class="info-box">
                    <div class="title-box h3-dark-100">
                      Integration Scenarios
                    </div>
                    <div class="description-box content-dark-100">
                      We built the Venus platform to be flexible and easy to
                      integrate with any system. This guide explains the
                      different ways to integrate with the Venus platform so you
                      can decide what's best for you.
                    </div>
                  </div>
                  <div class="triangle-box">
                    <img
                      class="triangle-plus"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAJJJREFUOBHtVVEOgCAIxc7RhbpI3Vu7hz1Yboy2cDL/ZLMAeUjwXESO1FoPrIKVWXfC/e03GV4i2UMkL4DT6JgE0bbVN+uI2ithtINEG4bYeCa8sA97hN1XtvA0wVEA2i1w0C5TpnyimnuwIg3jL71+Wc/R3CONWjdFd0P0KVP+nBJx9FSoKcXUiAlY065m1y/gASqre8K4rJ0/AAAAAElFTkSuQmCC"
                      alt="plus"
                    />
                  </div>
                </div>
              </a>
            </div>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </Wrapper>
  );
};
export default Guides;
