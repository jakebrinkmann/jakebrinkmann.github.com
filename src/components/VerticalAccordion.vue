<template>
  <div class="accordion vertical">
    <ul>
      <li>
        <input type="radio"
               id="radio-1"
               name="radio-accordion"
               checked="checked" />
        <label for="radio-1">Software</label>
        <div class="content">
          <dl>
            <dt><a href="balloon-party-cljs">
                balloon-party-cljs</a></dt>
            <dd>Build an arcade game in ClojureScript (play-cljs)</dd>
            <dt><a href="circular-almanac">
                circular-almanac</a></dt>
            <dd>Build a glowing seasons clock with CSS keyframes</dd>
            <dt><a href="my-home-screen">
                my-home-screen</a></dt>
            <dd>Create a productive home office</dd>
            <dt><a href="emergent-planner">
                emergent-planner</a></dt>
            <dd>Manage tasks and focus time</dd>
          </dl>
        </div>
      </li>
      <li>
        <input type="radio"
               id="radio-2"
               name="radio-accordion" />
        <label for="radio-2">Research</label>
        <div class="content">
          <dl>
            <dt><a href="//dx.doi.org/10.3390/rs8020158">
                Thermal Emissive Imaging Stability over Antarctica</a></dt>
            <dd>Use a weather research station (Dome-C) to inter-compare
              sensors (Aqua MODIS, NPP VIIRS)</dd>
            <dt><a href="//hyspiri.jpl.nasa.gov/downloads/2015_Symposium/day2/13_Multi-tempCross-calTerraMODIS_Landsat7ETM_ReflecBand_Angal.pdf">
                Reflective Stability over deserts</a></dt>
            <dd>A hyperspectral surface profile (EO1 Hyperion) used to
              inter-compare sensors (Terra MODIS, Landsat7 ETM+)</dd>
          </dl>
        </div>
      </li>
      <li>
        <input type="radio"
               id="radio-3"
               name="radio-accordion" />
        <label for="radio-3">News</label>
        <div class="content">
          <ul>
            <li>March 13th, 2014 - <a href="http://landsat.gsfc.nasa.gov/?p=8017">
                Landsat Cal/Val Team Receives 2013 Robert H. Goddard Award for
                Science</a></li>
            <li>March 3rd, 2014 - <a href="https://www.sdstate.edu/sites/default/files/2017-04/Impulse-Spring-2014.pdf#page=22">
                SDSU grad students among NASA award winners</a></li>
            <li>May 21st, 2012 - <a href="http://www.gojacks.com/news/2012/5/21/205429096.aspx">
                Jacks send five to NCAA Championships</a></li>
            <li>May 12th, 2012 - <a href="http://www.gojacks.com/news/2012/5/12/205426584.aspx">
                Brinkmann tops in discus</a></li>
            <li>May 5th, 2012 - <a href="http://www.gojacks.com/news/2012/5/5/205423823.aspx">
                Area athletes shine at first USF Relays</a></li>
            <li>May 4th, 2012 - <a href="http://www.gojacks.com/news/2012/5/4/205423487.aspx">
                SDSU honors senior student-athletes</a></li>
            <li>March 1st, 2010 - <a href="http://www.thesummitleague.org/sports/track/2009-10/releases/204898350_1">
                North Dakota State Leads After Day One</a></li>
            <li>August 14th, 2007 - <a href="http://www.gojacks.com/news/2007/8/14/1151253.aspx">
                SDSU Track and Field adds three</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const VerticalAccordion = {};
export default VerticalAccordion;
</script>

<style scoped>
/* Shared for all accordion types */
.accordion ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion li {
  margin: 0;
  padding: 0;
}
.accordion [type="radio"],
.accordion [type="checkbox"] {
  display: none;
}
.accordion label {
  display: block;
  font-size: 24px;
  line-height: 24px;
  background: #ccc;
  border: 1px solid #616161;
  color: #000;
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
}
.accordion ul li label:hover,
.accordion [type="radio"]:checked ~ label,
.accordion [type="checkbox"]:checked ~ label {
  background: #228dff;
  color: #fff;
}
.accordion .content {
  padding: 0 10px;
  overflow: hidden;
  border: 1px solid #fff; /* Make the border match the background so it fades in nicely */
  transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
}
.accordion a {
  color: #616161;
  padding: 0;
  margin: 10px 0;
}

/* Vertical */
.vertical ul li {
  overflow: hidden;
  margin: 0 0 1px;
}
.vertical ul li label {
  padding: 10px;
}
.vertical [type="radio"]:checked ~ label,
.vertical [type="checkbox"]:checked ~ label {
  border-bottom: 0;
}
.vertical ul li label:hover {
  border: 1px solid #616161; /* We don't want the border to disappear on hover */
}
.vertical ul li .content {
  height: 0px;
  border-top: 0;
}
.vertical [type="radio"]:checked ~ label ~ .content,
.vertical [type="checkbox"]:checked ~ label ~ .content {
  height: auto;
  border: 1px solid #616161;
}
</style>
