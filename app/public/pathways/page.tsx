"use client";
import { useState } from "react";

const classOptions = ["9th", "10th", "11th", "12th"];
const streamOptions: { [key: string]: string[] } = {
  "9th": ["Science", "Commerce", "Arts", "Vocational"],
  "10th": ["Science", "Commerce", "Arts", "Vocational"],
  "11th": ["PCM", "PCB", "Commerce", "Arts"],
  "12th": ["Engineering", "Medical", "Commerce", "Arts"],
};
const courseOptions: { [key: string]: string[] } = {
  "Science": ["B.Tech", "MBBS", "BSc"],
  "Commerce": ["B.Com", "CA", "BBA"],
  "Arts": ["BA", "Fine Arts", "Design"],
  "Vocational": ["Diploma", "ITI", "Polytechnic"],
  "PCM": ["B.Tech", "BSc PCM"],
  "PCB": ["MBBS", "BDS", "BSc Biotech"],
  "Engineering": ["CSE", "ECE", "Mechanical"],
  "Medical": ["MBBS", "BDS", "Pharmacy"],
};
const collegeOptions: { [key: string]: string[] } = {
  "B.Tech": ["IIT Delhi", "NIT Trichy", "DTU", "IIIT Hyderabad"],
  "MBBS": ["AIIMS", "Maulana Azad", "CMC Vellore"],
  "B.Com": ["SRCC", "Hindu College", "Loyola"],
  "BA": ["Lady Shri Ram", "St. Stephen's", "Miranda House"],
};
const careerOptions: { [key: string]: string[] } = {
  "B.Tech": ["Software Engineer", "Data Scientist", "Product Manager"],
  "MBBS": ["Doctor", "Surgeon", "Medical Researcher"],
  "B.Com": ["Chartered Accountant", "Banker"],
  "BA": ["Civil Services", "Writer"],
};

export default function PathwaysPage() {
  const [selectedClass, setClass] = useState("");
  const [selectedStream, setStream] = useState("");
  const [selectedCourse, setCourse] = useState("");
  const [selectedCollege, setCollege] = useState("");

  return (
    <main className="max-w-xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Explore Education Pathways</h1>

      {/* Class */}
      <div className="mb-4">
        <label className="block mb-1">Step 1: Select Class</label>
        <select value={selectedClass} onChange={e => {
          setClass(e.target.value);
          setStream(""); setCourse(""); setCollege("");
        }} className="border p-2 w-full rounded">
          <option value="" disabled>Select Class</option>
          {classOptions.map(cls => <option key={cls} value={cls}>{cls}</option>)}
        </select>
      </div>

      {/* Stream */}
      {selectedClass && (
        <div className="mb-4">
          <label className="block mb-1">Step 2: Select Stream</label>
          <select value={selectedStream} onChange={e => {
            setStream(e.target.value);
            setCourse(""); setCollege("");
          }} className="border p-2 w-full rounded">
            <option value="" disabled>Select Stream</option>
            {(streamOptions[selectedClass] || []).map(stream => (
              <option key={stream} value={stream}>{stream}</option>
            ))}
          </select>
        </div>
      )}

      {/* Course */}
      {selectedStream && (
        <div className="mb-4">
          <label className="block mb-1">Step 3: Select Course</label>
          <select value={selectedCourse} onChange={e => {
            setCourse(e.target.value);
            setCollege("");
          }} className="border p-2 w-full rounded">
            <option value="" disabled>Select Course</option>
            {(courseOptions[selectedStream] || []).map(course => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
        </div>
      )}

      {/* College */}
      {selectedCourse && (
        <div className="mb-4">
          <label className="block mb-1">Step 4: Select College</label>
          <select value={selectedCollege} onChange={e => setCollege(e.target.value)} className="border p-2 w-full rounded">
            <option value="" disabled>Select College</option>
            {(collegeOptions[selectedCourse] || []).map(college => (
              <option key={college} value={college}>{college}</option>
            ))}
          </select>
        </div>
      )}

      {/* Career */}
      {selectedCourse && (
        <div className="mb-4">
          <label className="block mb-1">Step 5: Careers for {selectedCourse}</label>
          <ul className="list-disc ml-6">
            {(careerOptions[selectedCourse] || []).map(career => (
              <li key={career}>{career}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

