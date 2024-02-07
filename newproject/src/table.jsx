import React from "react";
class Tableclass extends React.Component
{
   render()
   {

      let data = [
         {
           StudentID :2125600,
           Tittle : "MIDIMessageEvent",
           LastName : "AudioDestinationNode",
           FirstName : "Christiana",
           Othername : "null",
           Gender : "FileSystemHandle"
           ,DOB :"6/30/1981",
           POB : "Tema"}, 
     
           {
              StudentID :2125600,
              Tittle : "MIDIMessageEvent",
              LastName : "AudioDestinationNode",
              FirstName : "Christiana",
              Othername : "null",
              Gender : "FileSystemHandle"
              ,DOB :"6/30/1981",
              POB : "Tema"}, 
     
              {
                 StudentID :2125600,
                 Tittle : "MIDIMessageEvent",
                 LastName : "AudioDestinationNode",
                 FirstName : "Christiana",
                 Othername : "null",
                 Gender : "FileSystemHandle"
                 ,DOB :"6/30/1981",
                 POB : "Tema"}, 
     
                 {
                    StudentID :2125600,
                    Tittle : "MIDIMessageEvent",
                    LastName : "AudioDestinationNode",
                    FirstName : "Christiana",
                    Othername : "null",
                    Gender : "FileSystemHandle"
                    ,DOB :"6/30/1981",
                    POB : "Tema"}, 
        ];
     
      return(
<table id="table">
      <thead>
         <tr>
            <th>StudentID</th>
            <th>Tittle</th>
            <th>LastName</th>
            <th>Firstname</th>
            <th>OtherName</th>
            <th>Gender</th>
            <th>Dob</th>
            <th>POB</th>
            
         </tr>
      </thead>
      
      <tbody>
         {
            data.map((value,i)=>
               <tr>
                  <td>{value.StudentID}</td>
                  <td>{value.Tittle}</td>
                  <td>{value.LastName}</td>
                  <td>{value.FirstName}</td>
                  <td>{value.Othername}</td>
                  <td>{value.Gender}</td>
                  <td>{value.DOB}</td>
                  <td>{value.POB}</td>
               </tr>
            )
         }
      </tbody>
   </table>
      )
   }
}

export default Tableclass;