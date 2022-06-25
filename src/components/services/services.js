/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import './services.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from 'antd';
// import { Carousel } from 'antd';
import Carousel from 'react-bootstrap/Carousel';
import service from './images/our-services.png';

export default function Service() {
  return (
    <div className="servicemain">

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>

          <Grid item xs={12} md={5}>
            <div className="heading1">
              <p>OUR</p>
            </div>
            <div className="heading2">
              <p>SERVICES</p>
            </div>
          </Grid>

          <Grid item xs={12} md={7}>
            <div className="heading3">
              <img className="serimg" src={service} />
            </div>
          </Grid>

          <Grid item xs={6} md={4}>
            <div className="servicediv1">
              <div className="txt4">
                Real Estate Consultation
              </div>
              <div className="txt5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={4}>
            <div className="servicediv2">
              <div className="txt6">
                Construction Services
              </div>
              <div className="txt7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={4}>
            <div className="servicediv3">

              <div className="txt8">
                Property Management
              </div>
              <div className="txt9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={4}>
            <div className="servicediv4">
              <div className="txt4">
                Real Estate Consultation
              </div>
              <div className="txt5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={4}>
            <div className="servicediv5">
              <div className="txt6">
                Construction Services
              </div>
              <div className="txt7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

          <Grid item xs={6} md={4}>
            <div className="servicediv6">

              <div className="txt8">
                Property Management
              </div>
              <div className="txt9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </Grid>

        </Grid>
      </Box>

    </div>
  );
}
