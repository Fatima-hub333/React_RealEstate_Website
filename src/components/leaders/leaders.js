/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './leaders.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import leader1 from './images/leaders-1.png';
import leader2 from './images/leader--2.png';
import leader3 from './images/leader--3.png';
import leader4 from './images/leader--4.png';

export default function Leaders() {
  return (
    <div className="leadermain">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className="leaders">
              <img className="limg" src={leader1} />
            </div>
            <div>
              <p className="ldpos">DIRECTOR OPERATIONS</p>
              <p className="ldname">ch. mehmood akhter</p>
            </div>
            <div className="ltext">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                <br />
                labore et dolore magna aliqua.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leaders">
              <img className="limg" src={leader2} />
            </div>
            <div>
              <p className="ldpos">DIRECTOR COMPANY AFFAIRS</p>
              <p className="ldname" id="idnm">Zia Ullah Abbasi </p>
            </div>
            <div className="ltext">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                <br />
                labore et dolore magna aliqua.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leaders">
              <img className="limg" src={leader3} />
            </div>
            <div>
              <p className="ldpos">DIRECTOR PUBLIC RELATIONS</p>
              <p className="ldname">Sheikh Hassan Shakoor</p>
            </div>
            <div className="ltext">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                <br />
                labore et dolore magna aliqua.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="leaders">
              <img className="limg" src={leader4} />
            </div>
            <div>
              <p className="ldpos">MARKETING CONSULTANT</p>
              <p className="ldname">Dr. Muhammad Umar</p>
            </div>
            <div className="ltext">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                <br />
                labore et dolore magna aliqua.
              </p>
            </div>
          </Grid>

        </Grid>
      </Box>
    </div>

  );
}
