export const listNumber = [
  {
    id: 1,
    title: "New Applicants",
    count: "10",
  },
  {
    id: 2,
    title: "Approved",
    count: "10",
  },
  {
    id: 3,
    title: "Rejected",
    count: "10",
  },
  {
    id: 4,
    title: "Onboarded",
    count: "10",
  },
];

export const dataNewApplicants = [
  {
    key: 1,
    candidate_name: 'Guy Hawkins',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department'
  },
  {
    key: 2,
    candidate_name: 'Theresa Webb',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department'
  },
  {
    key: 3,
    candidate_name: 'Marvin McKinney',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department'
  },
  {
    key: 4,
    candidate_name: 'Bessie Cooper',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department'
  },
  {
    key: 5,
    candidate_name: 'Kristin Watson',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department'
  },
]

export const COLUMN_TABLE__NEW_APPLICANTS = [
  {
    key: 1,
    dataIndex: "candidate_name",
    title: "Candidate name",
    width: 200,
  },
  {
    key: 2,
    dataIndex: "job_title",
    title: "Job title",
    width: 600,
  },
  {
    key: 3,
    dataIndex: "department",
    title: "Department",
    width: 300
  },
]
export const dataOpenedJobs = [
  {
    key: 1,
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department',
    applicant: 14
  },
  {
    key: 2,
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department',
    applicant: 0
  },
  {
    key: 3,
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department',
    applicant: 34
  },
  {
    key: 4,
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department',
    applicant: 3
  },
  {
    key: 5,
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech department',
    applicant: 8
  },
]

export const COLUMN_TABLE_OPENED_JOBS = [
  {
    key: 1,
    dataIndex: "job_title",
    title: "Job title",
    width: 600,
  },
  {
    key: 2,
    dataIndex: "department",
    title: "Department",
    width: 300
  },
  {
    key: 3,
    dataIndex: "applicant",
    title: "Applicants",
    width: 200
  },
]

export const dataInterview = [
  {
    id: 1,
    name_interview: 'John Doe',
    status: 'Waiting for Round 1',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
  {
    id: 2,
    name_interview: 'John Doe',
    status: 'Waiting for Round 1',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
  {
    id: 3,
    name_interview: 'John Doe',
    status: 'Waiting for Round 1',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
  {
    id: 4,
    name_interview: 'John Doe',
    status: 'New',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
  {
    id: 5,
    name_interview: 'John Doe',
    status: 'Waiting for Round 1',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
  {
    id: 6,
    name_interview: 'John Doe',
    status: 'New',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
  {
    id: 7,
    name_interview: 'John Doe',
    status: 'Waiting for Round 1',
    time: '15:30',
    job_title: 'Web App Developer (PHP/C#/.Net/JavaScript)',
    department: 'Tech Department',
    interviewer: 'Christopher'
  },
]

export const CONSTANTS_STATUS_INTERVIEWER = {
  New: "text-blue",
  "Waiting for Round 1": "text-orange",
  "Completed Round 1": "text-green",
  Approved: "text-green",
  "Waiting for Round 2": "text-orange",
  "Completed Round 2": "text-green",
  Approved: "text-green",
  Onboarded: "text-green",
  Rejected: "text-red",
  "Scheduled round 1": "text-yellow",
  "Pass Round 1": "text-green",
  "Pass Round 2": "text-green",
  'Scheduled round 2': 'text-yellow',
  Fail: "text-red",
};