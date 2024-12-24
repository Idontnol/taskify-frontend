  export const statusConverter=(stat)=>{
    console.log(stat,"sssssssssssssssssssssssssss");
    if(stat==="To Do") return "toDo";
    else if(stat==="In Progress") return "inProgress";
    else if(stat==="In Review") return "inReview";
    else if(stat==="Completed") return "completed";
    if(stat==="toDo") return "toDo";
    else if(stat==="inpProgress") return "inProgress";
    else if(stat==="inReview") return "inReview";
    else return "completed";
  }
  // export const projects = [
  //   {
  //     id: 0,
  //     name: "Freelance Project",
  //     details: {
  //       toDo: [
  //         { title: "Design Wireframes", startDate: "2024-01-10", endDate: "2024-01-15", status: "toDo" },
  //         { title: "Set Up Backend", startDate: "2024-01-16", endDate: "2024-01-20", status: "toDo" }
  //       ],
  //       inProgress: [
  //         { title: "Frontend Development", startDate: "2024-01-21", endDate: "2024-01-25", status: "inProgress" }
  //       ],
  //       inReview: [
  //         { title: "Code Review", startDate: "2024-01-26", endDate: "2024-01-28", status: "inReview" }
  //       ],
  //       completed: [
  //         { title: "Requirement Gathering", startDate: "2024-01-01", endDate: "2024-01-05", status: "completed" }
  //       ]
  //     }
  //   },
  //   {
  //     id: 1,
  //     name: "SBI Outsource",
  //     details: {
  //       toDo: [
  //         { title: "Initial Setup", startDate: "2024-02-01", endDate: "2024-02-05", status: "toDo" }
  //       ],
  //       inProgress: [
  //         { title: "Database Integration", startDate: "2024-02-06", endDate: "2024-02-10", status: "inProgress" }
  //       ],
  //       inReview: [
  //         { title: "Security Audit", startDate: "2024-02-11", endDate: "2024-02-12", status: "inReview" }
  //       ],
  //       completed: [
  //         { title: "Initial Planning", startDate: "2024-01-20", endDate: "2024-01-25", status: "completed" },
  //         { title: "Requirement Documentation", startDate: "2024-01-26", endDate: "2024-01-30", status: "completed" }
  //       ]
  //     }
  //   },
  //   {
  //     id: 2,
  //     name: "HPCL Project 1",
  //     details: {
  //       toDo: [
  //         { title: "User Interface Design", startDate: "2024-03-01", endDate: "2024-03-05", status: "toDo" }
  //       ],
  //       inProgress: [
  //         { title: "API Development", startDate: "2024-03-06", endDate: "2024-03-15", status: "inProgress" }
  //       ],
  //       inReview: [
  //         { title: "Client Feedback Session", startDate: "2024-03-16", endDate: "2024-03-17", status: "inReview" }
  //       ],
  //       completed: [
  //         { title: "Project Kickoff", startDate: "2024-02-20", endDate: "2024-02-22", status: "completed" }
  //       ]
  //     }
  //   }
  // ];
export const url="https://taskify-backend-xi.vercel.app";
