import { useState } from "react";
import "./App.css";
import Band from "./components/Band";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Upcoming Bands at The Garden</h1>
      <div className="bands-container">
        <Band
          name="Garter Snake"
          image="https://thumbs.dreamstime.com/b/music-band-performing-stage-multiracial-59011607.jpg"
          link=""
        />
        <Band
          name="Coffee Stain"
          image="https://media.istockphoto.com/id/74075509/photo/portrait-of-a-rock-band.jpg?s=612x612&w=0&k=20&c=XX9NvoFTA1VCLov9Dj97fhPjxXZaywY40XagdOJmjHE="
          link=""
        />
        <Band
          name="Ha ha & ha"
          image="https://media.istockphoto.com/id/157189693/photo/rock-concert.jpg?s=612x612&w=0&k=20&c=VYxtDoBfKBVPS5IJv-1oIcVmoF4gZVR6FM44E2Xyblk="
          link=""
        />
        <Band
          name="Power Cord"
          image="https://media.istockphoto.com/id/157190615/photo/rock-band-in-action.jpg?s=612x612&w=0&k=20&c=vCRV6skatsPZE-g3MfNpNiIpS8M0HI3Sw3xaqHXKx5U="
          link=""
        />
        <Band
          name="Giving Away Tuesday"
          image="https://media.istockphoto.com/id/1155893561/photo/rock-concert.jpg?s=612x612&w=0&k=20&c=FNkOEB56IALovUlfT2dSD9_39MEKedFZDaFOLtfrtc4="
          link=""
        />
        <Band
          name="Road Kill Souls"
          image="https://media.istockphoto.com/id/966649486/photo/rock-band-playing-on-a-concert.jpg?s=612x612&w=0&k=20&c=1WuTOaDlHrrQt7IZkybVcQO7YJ3h-aYZxYFEWFJT4wg="
          link=""
        />
        <Band
          name="It’s its is"
          image="https://media.istockphoto.com/id/683690938/photo/person-showing-sign-of-the-horns-while-rock-band-playing-on-stage.jpg?s=612x612&w=0&k=20&c=BpG5wnhSYlDqw2HwMAJ5SkQ3uVPk3OMbuU-gLl8DmyI="
          link=""
        />
        <Band
          name="Szechuan Boys"
          image="https://media.istockphoto.com/id/919303684/photo/rock-band-playing-on-the-concert.jpg?s=612x612&w=0&k=20&c=dSrcp7PMfaXyWwpXRhUJZ6jtpgTgsSl4nXSGpqTxUO8="
          link=""
        />
        <Band
          name="Plant Matter"
          image="https://media.istockphoto.com/id/1080797152/photo/talented-group-of-young-musicians.jpg?s=612x612&w=0&k=20&c=92ArPTlRRHZBDPJoqIAxBlMDkPtq1V8ZcknblHx9i44="
          link=""
        />
        <Band
          name="Got Milk"
          image="https://media.istockphoto.com/id/848715924/photo/rock-music-band.jpg?s=612x612&w=0&k=20&c=vqPEtNhfGXGZXiMlCK4l5A7xFsvZUdbinNIheRRCEbY="
          link=""
        />
      </div>
    </div>
  );
}

export default App;
