import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { WorkshopIntro } from "../components/workshopIntro";
import { Venue } from "../components/venue";
import { Instructor } from "../components/instructor";

const response = await fetch('http://localhost:4000/api/workshops/0');
const wData = await response.json()

const instructorName = wData.data.instructor.name
const instructorBio = wData.data.instructor.bio 
const workshopData = wData.data
const workshopVenue = wData.data.venue

console.log (instructorName)
console.log (workshopData.title)
console.log (workshopVenue)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <div className="logo"></div>
    <WorkshopIntro title = {workshopData.title}
                   description = {workshopData.description}/>
    <div className="containerBody">
    <WorkshopIntro intro = {workshopData.intro}/>
    
    <Venue  name = {workshopVenue.name}
            street = {workshopVenue.street}
            city = {workshopVenue.city}/>

    <Instructor name = {instructorName}
                bio = {instructorBio}/>
    </div>
  </div>
);
