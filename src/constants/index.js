import { labels } from "../locales";
import { v4 as uuidv4 } from "uuid";

export const navigation = [
  { id: uuidv4(), title: labels.findJobs, link: "/" , isActive: true},
  { id: uuidv4(), title: labels.topCompanies, link: "/" ,  isActive: false},
  { id: uuidv4(), title: labels.jobTracker, link: "/" ,  isActive: false},
  { id: uuidv4(), title: labels.myCalendar, link: "/" ,  isActive: false},
  { id: uuidv4(), title: labels.documents, link: "/" ,  isActive: false},
  { id: uuidv4(), title: labels.messages, link: "/" ,  isActive: false},
  { id: uuidv4(), title: labels.notifications, link: "/" ,  isActive: false},
];

export const jobKeyWords = [
  { id: uuidv4(), title: "Frontend" },
  { id: uuidv4(), title: "Backend" },
  { id: uuidv4(), title: "Graphic Designer" },
];
export const profile = {
  cover:
    "https://images.pexels.com/photos/7972728/pexels-photo-7972728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  firstName: "Albert",
  lastName: "Flores",
  headline:
    "Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...",
  location: "Clinton, Maryland",
  stats: {
    profile_visitors: 40,
    resume_viewers: 20,
    my_jobs: 88,
  },
};
export const jobs = [
  {
    id: uuidv4(),
    title: "Featured Jobs",
    jobs: [
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: true,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: true,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: true,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: true,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: true,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Recommended Jobs",
    jobs: [
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: false,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: false,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: false,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: false,
      },
      {
        id: uuidv4(),
        title: "UI/UX Designer",
        company: {
          logo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png",
          name: "teams",
        },
        location: "Seattle, USA",
        locationType: "Remote",
        createdAt: "",
        numberOfApplicants: 22,
        isPromoted: false,
      },
    ],
  },
];
