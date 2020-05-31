import React from "react";
import Card from "../components/Card";
export default function About(props) {
  const team = [
    {
      name: "Mr. Bhushan Kumar",
      designation: "CEO",
      email: "abc@xyz.com",
      description: "Hi I am CEO of the company",
      mb: 2345678901,
    },
    {
      name: "Mr. Shiv Kumar",
      designation: "CFO",
      email: "abc@xyz.com",
      description: "Hi I am CFO of the company",
      mb: 1234567890,
    },
    {
      name: "Mr. Shivam Patel",
      designation: "CTO",
      email: "abc@xyz.com",
      description: "Hi I am CTO of the company",
      mb: 4567890123,
    },
    {
      name: "Mr. Prashant Agrawal",
      designation: "Developer",
      email: "abc@xyz.com",
      description: "Hi I am a developer",
      mb: 3456789012,
    },
  ];
  const { aboutData } = props;
  return (
    <div>
      <div class="about-section">
        <h1>About Us</h1>
        <p>{aboutData}</p>
      </div>
      <h2>Our Team</h2>
      <div className="cards-container">
        {team.map((person) => (
          <Card person={person} />
        ))}
      </div>
    </div>
  );
}
