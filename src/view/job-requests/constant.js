
export const LIST_STATUS_JOB_REQUEST = [
  {
    id: 1,
    status: 'All'
  },
  {
    id: 2,
    status: 'Opened'
  },
  {
    id: 3,
    status: 'Closed'
  },
];

export const LIST_COMBOBOX = [
  {
    id: 1,
    label: 'Department',
    Value: 'department'
  },
  {
    id: 2,
    label: 'Department1',
    Value: 'department1'
  },
  {
    id: 3,
    label: 'Department2',
    Value: 'department2'
  }
]

export const DATA_JOB_REQUEST = [
  {
    key: '1',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '14',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '2',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '0',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '3',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '34',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '4',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '3',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '14',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '14',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '5',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '8',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '6',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '23',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '7',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '55',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '8',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '14',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Close',
  },
  {
    key: '9',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '14',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Opened',
    actions: 'Open',
  },
  {
    key: '10',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '5',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Closed',
    actions: 'Open',
  },
  {
    key: '11',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '5',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Closed',
    actions: 'Open',
  },
  {
    key: '12',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '8',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Closed',
    actions: 'Open',
  },
  {
    key: '13',
    job_title: 'Web App Developer (PHP/...',
    department: 'Tech department',
    building_no: '0002',
    applicants: '42',
    requester: 'Christopher',
    created_at: '10/07/2024',
    status: 'Closed',
    actions: 'Open',
  }
]
export const COLUMNS_JOB_REQUEST = [
  {
    title: 'Job title',
    dataIndex: 'job_title',
    key: 'job_title',
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Building No.',
    dataIndex: 'building_no',
    key: 'building_no',
  },
  {
    title: 'Applicants',
    dataIndex: 'applicants',
    key: 'applicants',
  },
  {
    title: 'Requester',
    dataIndex: 'requester',
    key: 'requester',
  },
  {
    title: 'Created at',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];

export const CONSTANTS_STATUS_CV = {
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
export const CONSTANTS_STATUS = {
  'Opened': 'text-green',
  'Closed': 'text-gray'
};
export const CONSTANTS_ACTION = {
  'default': 'text-purple'
};

export const CONSTANTS_DEPARTMENT = [
  {
    id: 0,
    label: '',
    value: ''
  },
  {
    id: 1,
    label: 'Department',
    value: 'department'
  },
  {
    id: 2,
    label: 'Department1',
    value: 'department1'
  },
  {
    id: 3,
    label: 'Department2',
    value: 'department2'
  },
  {
    id: 4,
    label: 'Department3',
    value: 'department3'
  },
]
export const CONSTANTS_LEVEL = [
  {
    id: 0,
    label: '',
    value: ''
  },
  {
    id: 1,
    label: 'Fresher',
    value: 'fresher'
  },
  {
    id: 2,
    label: 'Junior',
    value: 'junior'
  },
  {
    id: 3,
    label: 'Senior',
    value: 'senior'
  },
  {
    id: 4,
    label: 'Lead',
    value: 'Lead'
  },
  {
    id: 5,
    label: 'Mid-level',
    value: 'mid_level'
  },
  {
    id: 6,
    label: 'Senior Leader',
    value: 'senior_leader'
  },
]
export const JOB_INFOR = {
  job_title: "Web App Developer (PHP/C#/.Net/JavaScript)",
  department: 'Tech Department',
  requester: 'Christopher',
  building: '0002',
  skills: 'Java',
  level: 'Senior',
  start_date: '01/07/2024',
  end_date: '01/07/2024',
  number_of_vacancies: '4',
  status: "Opened",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem ut elit euismod dignissim et nec lacus. Cras volutpat nibh justo, quis tempor metus pulvinar nec. Aenean luctus feugiat odio, at finibus erat fringilla ac. Vivamus sit amet nulla id dui dapibus aliquet. Mauris sodales, leo sed fermentum gravida, erat ante vulputate elit, id elementum massa nisl vel risus. Vestibulum ante ipsum primis in faucibus orci luctus et ult f'
}

export const DATA_CV = [
  {
    id: 1,
    nameUser: "Savannah Nguyen",
    DateBirth: "08/11/1997",
    status: "New",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 2,
    nameUser: "Jerome Bell",
    DateBirth: "08/11/1997",
    status: "New",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 3,
    nameUser: "Kristin Watson",
    DateBirth: "08/11/1997",
    status: "Scheduled round 1",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 4,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Pass Round 1",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 5,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Scheduled round 2",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 6,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Pass Round 2",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 7,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Approved",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 8,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Rejected",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 9,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Fail",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
  {
    id: 10,
    nameUser: "Kathryn Murphy",
    DateBirth: "08/11/1997",
    status: "Rejected",
    WorkExperience: "3 years",
    CV: "JohnDoe_CV_English.PDF",
    AppliedAt: "10/07/2024, 20:18",
  },
];

export const STATUS_CV_NEXT =
{
  New: [
    {
      id: "reject",
      label: 'Reject',
      styleBtn: "text-red btn-gray",
    },
    {
      id: "nex",
      styleBtn: "btn-blue",
      label: "Schedule Round 1",
    }
  ],

  "Schedule Round 1": [],
  "Pass Round 1":
    [
      {
        id: "nex",
        styleBtn: "btn-gray",
        label: "Schedule Round 2",
      },
      {
        id: "approve",
        styleBtn: "btn-blue",
        label: "Approve",
      }
    ],
  'Scheduled round 2': [],
  "Pass Round 2": [
    {
      id: "approve",
      styleBtn: "btn-blue",
      label: "Approve",
    }
  ],
  "Approved": [
    {
      id: "onboard",
      styleBtn: "btn-blue",
      label: "Onboard",
    }
  ],
  Rejected: [
    {
      id: "nex",
      styleBtn: "btn-blue",
      label: "Schedule Round 2",
    }
  ],
  Fail: [
    {
      id: "nex",
      styleBtn: "btn-gray",
      label: "Schedule Round 1",
    },
    {
      id: "rejected",
      styleBtn: "btn-blue",
      label: "Reject",
    }
  ],
}


export const STATUS_JOB_CV = [
  {
    id: 1,
    status: "All",
    value: "All",
    counter: 90,
  },
  {
    id: 2,
    status: "New",
    value: "New",
    counter: 90,
  },
  {
    id: 3,
    status: "Waiting for Round 1",
    value: "Scheduled round 1",
    counter: 90,
  },
  {
    id: 4,
    status: "Completed Round 1",
    value: "Pass Round 1",
    counter: 90,
  },
  {
    id: 5,
    status: "Waiting for Round 2",
    value: "Scheduled round 2",
    counter: 90,
  },
  {
    id: 6,
    status: "Completed Round 2",
    value: "Pass Round 2",
    counter: 90,
  },
  {
    id: 7,
    status: "Approved",
    value: "Approved",
    counter: 90,
  },
  {
    id: 8,
    status: "Onboarded",
    value: "Onboarded",
    counter: 90,
  },
  {
    id: 9,
    status: "Rejected",
    value: "Rejected",
    counter: 90,
  },
];


