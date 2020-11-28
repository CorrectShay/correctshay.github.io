const dispoTemplate = [
    {
      "id": 1,
      "role": "SECURITY  MANAGER",
      "icp": "",
      "shiftLabel": "Fitzgerald, Michael",
      "permanent": true
    },
    {
      "id": 2,
      "role": "6-6 Security PCO",
      "icp": "",
      "shiftLabel": "PCO 2-"
    },
    {
      "id": 3,
      "role": "Security PCO Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 4,
      "role": "6-6 Security PCO - NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW PCO 4-"
    },
    {
      "id": 5,
      "role": "8-4 Security Admin PCO",
      "icp": "",
      "shiftLabel": "PCO 5-"
    },
    {
      "id": 6,
      "role": "Workforce Manager",
      "icp": "",
      "shiftLabel": "Francis, Sean",
      "permanent": true
    },
    {
      "id": 7,
      "role": "6-12 GATEHOUSE  AM SCO",
      "icp": "",
      "shiftLabel": "GH- 07-"
    },
    {
      "id": 8,
      "role": "12-6 GATEHOUSE PM SCO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 9,
      "role": "Out of Service Broken",
      "icp": "",
      "shiftLabel": "",
      "permanent": true
    },
    {
      "id": 10,
      "role": "6-12 GATEHOUSE AM CO2",
      "icp": "",
      "shiftLabel": "GH1 10-13"
    },
    {
      "id": 11,
      "role": "12-6 GATEHOUSE PM CO1",
      "icp": "",
      "shiftLabel": "MC1-7"
    },
    {
      "id": 12,
      "role": "12-6 GATEHOUSE PM CO2",
      "icp": "",
      "shiftLabel": "MC2-6"
    },
    {
      "id": 13,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess MC/GH-4"
    },
    {
      "id": 14,
      "role": "6-12 GATEHOUSE AM CO1",
      "icp": "",
      "shiftLabel": "GH2 09-3"
    },
    {
      "id": 15,
      "role": "TRANSPORT OFFICER",
      "icp": "",
      "shiftLabel": "TRAN-1"
    },
    {
      "id": 16,
      "role": "7-7 RO SCO",
      "icp": "",
      "shiftLabel": "RO 21-1"
    },
    {
      "id": 17,
      "role": "7-7 RO CO1",
      "icp": "Y",
      "shiftLabel": "RO 24-6"
    },
    {
      "id": 18,
      "role": "8-8 RO CO2",
      "icp": "Y",
      "shiftLabel": "RO 25-4"
    },
    {
      "id": 19,
      "role": "8-8 RO CO3",
      "icp": "Y",
      "shiftLabel": ""
    },
    {
      "id": 20,
      "role": "8-4 RO AVL",
      "icp": "Y",
      "shiftLabel": "AVL 17-13"
    },
    {
      "id": 21,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": "RO-1"
    },
    {
      "id": 22,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 23,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": "RO-14"
    },
    {
      "id": 24,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 25,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 26,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 27,
      "role": "RO Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 28,
      "role": "EMPTY RO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 29,
      "role": "EMPTY RO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 30,
      "role": "8-4 RO PCO",
      "icp": "",
      "shiftLabel": "Bouman, Daniel"
    },
    {
      "id": 31,
      "role": "CHAPLIN 1",
      "icp": "",
      "shiftLabel": "MORRISON C",
      "permanent": true
    },
    {
      "id": 32,
      "role": "CHAPLIN 2",
      "icp": "",
      "shiftLabel": "SMITH W",
      "permanent": true
    },
    {
      "id": 33,
      "role": "CHAPLIN 3",
      "icp": "",
      "shiftLabel": "CHAPLAIN ASST",
      "permanent": true
    },
    {
      "id": 34,
      "role": "Op Intel Officer",
      "icp": "",
      "shiftLabel": "JONES-SEXTON N",
      "permanent": true
    },
    {
      "id": 35,
      "role": "Op Intel Analyst",
      "icp": "",
      "shiftLabel": "FLOCKTON R",
      "permanent": true
    },
    {
      "id": 36,
      "role": "7-7 RUNNER OE1 | 34",
      "icp": "Y",
      "shiftLabel": "OE1 36-13"
    },
    {
      "id": 37,
      "role": "EMPTY ORE",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 38,
      "role": "7-7 Programmes CO | 35",
      "icp": "Y",
      "shiftLabel": "PROG 38-1"
    },
    {
      "id": 39,
      "role": "7-7 Programmes CO | 33",
      "icp": "Y",
      "shiftLabel": "PROG 39-3"
    },
    {
      "id": 40,
      "role": "8-6 Programmes CO",
      "icp": "Y",
      "shiftLabel": "PROG 40-5"
    },
    {
      "id": 41,
      "role": "8-8 Visits SCO",
      "icp": "Y",
      "shiftLabel": "VIS 41-8"
    },
    {
      "id": 42,
      "role": "8-6 Visits CO1",
      "icp": "Y",
      "shiftLabel": "VIS 42-1"
    },
    {
      "id": 43,
      "role": "8-6 Visits CO2",
      "icp": "Y",
      "shiftLabel": "VIS 43-2"
    },
    {
      "id": 44,
      "role": "8-6 Visits CO3",
      "icp": "",
      "shiftLabel": "VIS 44-4"
    },
    {
      "id": 45,
      "role": "EMPTY Visits",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 46,
      "role": "Parole Liaison",
      "icp": "",
      "shiftLabel": "KELL E",
      "permanent": true
    },
    {
      "id": 47,
      "role": "7-7 RUNNER 1",
      "icp": "Y",
      "shiftLabel": "R1 47-5"
    },
    {
      "id": 48,
      "role": "7-7 RUNNER 2 | U34",
      "icp": "Y",
      "shiftLabel": "R2 48-15"
    },
    {
      "id": 49,
      "role": "8-8 RUNNER 3",
      "icp": "Y",
      "shiftLabel": "R3 49-1"
    },
    {
      "id": 50,
      "role": "8-8 RUNNER 4",
      "icp": "Y",
      "shiftLabel": "R4 50-11"
    },
    {
      "id": 51,
      "role": "8-8 RUNNER 5",
      "icp": "Y",
      "shiftLabel": "R5 51-14"
    },
    {
      "id": 52,
      "role": "EMPTY Runner",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 53,
      "role": "8-6 District Court SCO",
      "icp": "",
      "shiftLabel": "CRT 385-3"
    },
    {
      "id": 54,
      "role": "8-6 District Court CO1",
      "icp": "",
      "shiftLabel": "CRT 202-12"
    },
    {
      "id": 55,
      "role": "8-6 District Court CO2",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 56,
      "role": "EMPTY Court Radio",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 57,
      "role": "7-7 Self Care SCO",
      "icp": "",
      "shiftLabel": "ISC 57-1"
    },
    {
      "id": 58,
      "role": "EMPTY Self Care",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 59,
      "role": "EMPTY Self Care",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 60,
      "role": "EMPTY Self Care",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 61,
      "role": "Visitor Reception",
      "icp": "",
      "shiftLabel": "FLEMING M",
      "permanent": true
    },
    {
      "id": 62,
      "role": "Visitor Reception",
      "icp": "",
      "shiftLabel": "MURDOCH J",
      "permanent": true
    },
    {
      "id": 63,
      "role": "Visitor Reception",
      "icp": "",
      "shiftLabel": "STEPHEN R",
      "permanent": true
    },
    {
      "id": 64,
      "role": "Visitor Reception",
      "icp": "",
      "shiftLabel": "BURROWS C",
      "permanent": true
    },
    {
      "id": 65,
      "role": "Courier",
      "icp": "",
      "shiftLabel": "STEVENSON C",
      "permanent": true
    },
    {
      "id": 66,
      "role": "Property",
      "icp": "",
      "shiftLabel": "HALL T",
      "permanent": true
    },
    {
      "id": 67,
      "role": "Property",
      "icp": "",
      "shiftLabel": "MAXWELL C",
      "permanent": true
    },
    {
      "id": 68,
      "role": "Property",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 69,
      "role": "Prog. Facilitator",
      "icp": "",
      "shiftLabel": "GRANT A",
      "permanent": true
    },
    {
      "id": 70,
      "role": "Prog. Facilitator",
      "icp": "",
      "shiftLabel": "HELIER M",
      "permanent": true
    },
    {
      "id": 71,
      "role": "Prog. Facilitator",
      "icp": "",
      "shiftLabel": "SHANNON F",
      "permanent": true
    },
    {
      "id": 72,
      "role": "Prog. Facilitator",
      "icp": "",
      "shiftLabel": "WAHANUI M",
      "permanent": true
    },
    {
      "id": 73,
      "role": "PCO Unit 30",
      "icp": "",
      "shiftLabel": "Bray, Mark"
    },
    {
      "id": 74,
      "role": "8-4 ADMIN SCO",
      "icp": "",
      "shiftLabel": "B30 74-1"
    },
    {
      "id": 75,
      "role": "7-7 Unit 30 SCO",
      "icp": "Y",
      "shiftLabel": "B30 75-1"
    },
    {
      "id": 76,
      "role": "6-6 Unit 30 CO1",
      "icp": "Y",
      "shiftLabel": "PUK 79-5"
    },
    {
      "id": 77,
      "role": "7-7 Unit 30 CO2",
      "icp": "Y",
      "shiftLabel": "PUK 78-3"
    },
    {
      "id": 78,
      "role": "7-7 Unit 30 CO3",
      "icp": "Y",
      "shiftLabel": "PUK 80-7"
    },
    {
      "id": 79,
      "role": "7-7 Unit 30 CO4",
      "icp": "",
      "shiftLabel": "PUK 81-9"
    },
    {
      "id": 80,
      "role": "Unit 30 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 81,
      "role": "Unit 30 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 82,
      "role": "Unit 30 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 83,
      "role": "Unit 30 PRE NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW PUK 196-11"
    },
    {
      "id": 84,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 85,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 86,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 87,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 88,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 89,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 90,
      "role": "EMPTY Unit 30",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 91,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 92,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 93,
      "role": "PCO  Unit 33",
      "icp": "",
      "shiftLabel": "Draper, Jan"
    },
    {
      "id": 94,
      "role": "7-7 Unit 33 SCO",
      "icp": "",
      "shiftLabel": "B33 95-1"
    },
    {
      "id": 95,
      "role": "6-6 Unit 33 CO1",
      "icp": "Y",
      "shiftLabel": "PIWAKA 97-2"
    },
    {
      "id": 96,
      "role": "8-6 Unit 33 CO2",
      "icp": "Y",
      "shiftLabel": "PIWAKA 103-13"
    },
    {
      "id": 97,
      "role": "8-6 Unit 33 CO3",
      "icp": "Y",
      "shiftLabel": "PIWAKA 98-3"
    },
    {
      "id": 98,
      "role": "8-6 Unit 33 CO4",
      "icp": "Y",
      "shiftLabel": "PIWAKA 96-14"
    },
    {
      "id": 99,
      "role": "8-6 Unit 33 CO5",
      "icp": "Y",
      "shiftLabel": "PIWAKA 100-6"
    },
    {
      "id": 100,
      "role": "8-8 Unit 33 CO6",
      "icp": "Y",
      "shiftLabel": "PIWAKA 101-12"
    },
    {
      "id": 101,
      "role": "Unit 33 Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess PIWAKA-8"
    },
    {
      "id": 102,
      "role": "Unit 33 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 103,
      "role": "Unit 33 Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess PIWAKA-18"
    },
    {
      "id": 104,
      "role": "Unit 33 Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess PIWAKA-20"
    },
    {
      "id": 105,
      "role": "Unit 33 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 106,
      "role": "Unit 33 PRE NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW PIWAKA 198-4"
    },
    {
      "id": 107,
      "role": "EMPTY Unit 33",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 108,
      "role": "EMPTY Unit 33",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 109,
      "role": "EMPTY Unit 33",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 110,
      "role": "EMPTY Unit 33",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 111,
      "role": "7-7 Town Van 1 SCO | U35",
      "icp": "",
      "shiftLabel": "TV 111-4"
    },
    {
      "id": 112,
      "role": "7-7 Town Van 1 CO | U33",
      "icp": "",
      "shiftLabel": "TV 112-3"
    },
    {
      "id": 113,
      "role": "EMPTY Town Van",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 114,
      "role": "EMPTY Town Van",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 115,
      "role": "8-6 Escort SCO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 116,
      "role": "8-6 Escort CO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 117,
      "role": "EMPTY Escorts",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 118,
      "role": "EMPTY Escorts",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 119,
      "role": "EMPTY Escorts",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 120,
      "role": "EMPTY Escorts",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 121,
      "role": "PCO Unit 31",
      "icp": "",
      "shiftLabel": "Murphy, Brent"
    },
    {
      "id": 122,
      "role": "7-7 Unit 31 SCO",
      "icp": "",
      "shiftLabel": "B31 123-1"
    },
    {
      "id": 123,
      "role": "6-6 Unit 31 CO1",
      "icp": "",
      "shiftLabel": "WEKA 126-5"
    },
    {
      "id": 124,
      "role": "7-7 Unit 31 CO2",
      "icp": "",
      "shiftLabel": "WEKA 127-7"
    },
    {
      "id": 125,
      "role": "8-4 Unit 31 CO DTP",
      "icp": "",
      "shiftLabel": "PRG WEKA 125-3"
    },
    {
      "id": 126,
      "role": "Unit 31 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 127,
      "role": "Unit 31 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 128,
      "role": "Unit 31 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 129,
      "role": "Unit 31 PRE NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW WEKA 197-9"
    },
    {
      "id": 130,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 131,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 132,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 133,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 134,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 135,
      "role": "DTU Counselor",
      "icp": "",
      "shiftLabel": "CLEVERLY C",
      "permanent": true
    },
    {
      "id": 136,
      "role": "DTU Counselor",
      "icp": "",
      "shiftLabel": "CLARK C",
      "permanent": true
    },
    {
      "id": 137,
      "role": "DTU Counselor",
      "icp": "",
      "shiftLabel": "BEALE S",
      "permanent": true
    },
    {
      "id": 138,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 139,
      "role": "EMPTY Unit 31",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 140,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 141,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 142,
      "role": "PCO Unit 34",
      "icp": "",
      "shiftLabel": "Manning, Paul"
    },
    {
      "id": 143,
      "role": "7-7 Unit 34 SCO",
      "icp": "",
      "shiftLabel": "B34 144-1"
    },
    {
      "id": 144,
      "role": "6-6 Unit 34 CO1",
      "icp": "Y",
      "shiftLabel": "TAKAHE 145-2"
    },
    {
      "id": 145,
      "role": "8-6 Unit 34 CO2",
      "icp": "Y",
      "shiftLabel": "TAKAHE 147-6"
    },
    {
      "id": 146,
      "role": "8-6 Unit 34 CO3",
      "icp": "Y",
      "shiftLabel": "TAKAHE 151-12"
    },
    {
      "id": 147,
      "role": "8-6 Unit 34 CO4",
      "icp": "Y",
      "shiftLabel": "TAKAHE 149-13"
    },
    {
      "id": 148,
      "role": "8-6 Unit 34 CO5",
      "icp": "Y",
      "shiftLabel": "TAKAHE 150-15"
    },
    {
      "id": 149,
      "role": "8-8 Unit 34 CO6",
      "icp": "Y",
      "shiftLabel": "TAKAHE 148-11"
    },
    {
      "id": 150,
      "role": "Unit 34 Site Staff",
      "icp": "Y",
      "shiftLabel": "Non Ess TAKAHE-3"
    },
    {
      "id": 151,
      "role": "Unit 34 Site Staff",
      "icp": "Y",
      "shiftLabel": ""
    },
    {
      "id": 152,
      "role": "Unit 34 Site Staff",
      "icp": "Y",
      "shiftLabel": "Non Ess TAKAHE-17"
    },
    {
      "id": 153,
      "role": "Unit 34 Site Staff",
      "icp": "Y",
      "shiftLabel": "Non Ess TAKAHE-19"
    },
    {
      "id": 154,
      "role": "Unit 34 PRE NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW TAKAHE 199-4"
    },
    {
      "id": 155,
      "role": "EMPTY Unit 34",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 156,
      "role": "EMPTY Unit 34",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 157,
      "role": "EMPTY Unit 34",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 158,
      "role": "EMPTY Unit 34",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 159,
      "role": "EMPTY Unit 34",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 160,
      "role": "Tutor",
      "icp": "",
      "shiftLabel": "KAVANAGH M",
      "permanent": true
    },
    {
      "id": 161,
      "role": "Gym Instructor",
      "icp": "",
      "shiftLabel": "MckSkimming K",
      "permanent": true
    },
    {
      "id": 162,
      "role": "8-4 PROSECUTOR",
      "icp": "",
      "shiftLabel": "PROS- 162-1"
    },
    {
      "id": 163,
      "role": "EMPTY Prosecutor",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 164,
      "role": "CONSTRUCTION",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 165,
      "role": "8-4 CULTURAL OFFICER",
      "icp": "",
      "shiftLabel": "Van Der Laan K"
    },
    {
      "id": 166,
      "role": "Movement Coordinator",
      "icp": "",
      "shiftLabel": "CAHILL B",
      "permanent": true
    },
    {
      "id": 167,
      "role": "8-4 BUSINESS COACH",
      "icp": "",
      "shiftLabel": "Non Ess SCO 167-1"
    },
    {
      "id": 168,
      "role": "7-5 PE CO1",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 169,
      "role": "7-5 PE CO2",
      "icp": "",
      "shiftLabel": "PES 169-3"
    },
    {
      "id": 170,
      "role": "8-6 PE CO3",
      "icp": "",
      "shiftLabel": "PES 170-4"
    },
    {
      "id": 171,
      "role": "7-7 HEALTH CO1 | U35",
      "icp": "Y",
      "shiftLabel": "HLTH 172-3"
    },
    {
      "id": 172,
      "role": "8-8 HEALTH CO2",
      "icp": "",
      "shiftLabel": "HLTH 171-1"
    },
    {
      "id": 173,
      "role": "8-6 HEALTH CO3",
      "icp": "",
      "shiftLabel": "HLTH 173-5"
    },
    {
      "id": 174,
      "role": "DTU",
      "icp": "",
      "shiftLabel": "MOORE T",
      "permanent": true
    },
    {
      "id": 175,
      "role": "DTU",
      "icp": "",
      "shiftLabel": "ROXBURGH R",
      "permanent": true
    },
    {
      "id": 176,
      "role": "DTU",
      "icp": "",
      "shiftLabel": "MAY S",
      "permanent": true
    },
    {
      "id": 177,
      "role": "PCO ISU",
      "icp": "",
      "shiftLabel": "KAKAPO 177-1"
    },
    {
      "id": 178,
      "role": "7-7 ISU SCO",
      "icp": "Y",
      "shiftLabel": "KAKAPO B24 178-1"
    },
    {
      "id": 179,
      "role": "6-6 ISU CO1",
      "icp": "",
      "shiftLabel": "KAKAPO 179-2"
    },
    {
      "id": 180,
      "role": "8-6 ISU CO2",
      "icp": "Y",
      "shiftLabel": "KAKAPO 180-6"
    },
    {
      "id": 181,
      "role": "ISU Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess KAKAPO-8"
    },
    {
      "id": 182,
      "role": "ISU Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 183,
      "role": "EMPTY ISU",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 184,
      "role": "EMPTY ISU",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 185,
      "role": "EMPTY ISU",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 186,
      "role": "RM - Low Security",
      "icp": "",
      "shiftLabel": "GROEN L",
      "permanent": true
    },
    {
      "id": 187,
      "role": "Ops Support Manager",
      "icp": "",
      "shiftLabel": "MILES J",
      "permanent": true
    },
    {
      "id": 188,
      "role": "RM - High Security",
      "icp": "",
      "shiftLabel": "MEADS P",
      "permanent": true
    },
    {
      "id": 189,
      "role": "Industries Manager",
      "icp": "",
      "shiftLabel": "YOUNG W",
      "permanent": true
    },
    {
      "id": 190,
      "role": "CSM",
      "icp": "",
      "shiftLabel": "POTTER M",
      "permanent": true
    },
    {
      "id": 191,
      "role": "Prison Director",
      "icp": "",
      "shiftLabel": "MILLER D",
      "permanent": true
    },
    {
      "id": 192,
      "role": "Deputy Prison Director",
      "icp": "",
      "shiftLabel": "MILES L",
      "permanent": true
    },
    {
      "id": 193,
      "role": "6-6 ISU CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW KAKAPO 193-4"
    },
    {
      "id": 194,
      "role": "6-6 Unit 32 CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW TE KAHU 194-17"
    },
    {
      "id": 195,
      "role": "6-6 NIGHTWATCH Site Staff 2",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 196,
      "role": "6-6 Unit 30 CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW PUK 196-11"
    },
    {
      "id": 197,
      "role": "6-6 Unit 31 CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW WEKA 197-9"
    },
    {
      "id": 198,
      "role": "6-6 Unit 33 CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW PIWAKA 198-4"
    },
    {
      "id": 199,
      "role": "6-6 Unit 34 CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW TAKAHE 199-4"
    },
    {
      "id": 200,
      "role": "6-6 Unit 35 CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW TOKO 200-4"
    },
    {
      "id": 201,
      "role": "6-6 NIGHTWATCH Site Staff 1",
      "icp": "",
      "shiftLabel": "NW Non Ess IM-9"
    },
    {
      "id": 202,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 203,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 204,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 205,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 206,
      "role": "8-6 High Court CO1",
      "icp": "",
      "shiftLabel": "HCRT 206"
    },
    {
      "id": 207,
      "role": "8-6 High Court CO2",
      "icp": "",
      "shiftLabel": "HCRT 207"
    },
    {
      "id": 208,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 209,
      "role": "PI - Kitchen / Laundry",
      "icp": "",
      "shiftLabel": "RUPENE K",
      "permanent": true
    },
    {
      "id": 210,
      "role": "Kitchen Instructor",
      "icp": "",
      "shiftLabel": "LUDLOW T",
      "permanent": true
    },
    {
      "id": 211,
      "role": "Kitchen Instructor",
      "icp": "",
      "shiftLabel": "MCGARRY S",
      "permanent": true
    },
    {
      "id": 212,
      "role": "Kitchen Instructor",
      "icp": "",
      "shiftLabel": "TEMPERO.C",
      "permanent": true
    },
    {
      "id": 213,
      "role": "Kitchen Instructor",
      "icp": "",
      "shiftLabel": "ALVAREZ-REY P",
      "permanent": true
    },
    {
      "id": 214,
      "role": "Kitchen Instructor",
      "icp": "",
      "shiftLabel": "SCOTT S",
      "permanent": true
    },
    {
      "id": 215,
      "role": "Kitchen Instructor",
      "icp": "",
      "shiftLabel": "MADISON.V",
      "permanent": true
    },
    {
      "id": 216,
      "role": "PI - Engineering",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 217,
      "role": "OE Tutor",
      "icp": "",
      "shiftLabel": "Evans, Graeme",
      "permanent": true
    },
    {
      "id": 218,
      "role": "Engineering Instructor",
      "icp": "",
      "shiftLabel": "GREY C",
      "permanent": true
    },
    {
      "id": 219,
      "role": "Engineering Instructor",
      "icp": "",
      "shiftLabel": "TAPP A",
      "permanent": true
    },
    {
      "id": 220,
      "role": "Painting Instructor",
      "icp": "",
      "shiftLabel": "McARTHUR A",
      "permanent": true
    },
    {
      "id": 221,
      "role": "C & R INSTRUCTOR 1",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 222,
      "role": "C & R INSTRUCTOR 2",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 223,
      "role": "ACR STORE",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 224,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess MC/GH-2"
    },
    {
      "id": 225,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess MC/GH-8"
    },
    {
      "id": 226,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess GH/MC-12"
    },
    {
      "id": 227,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess VIS-6"
    },
    {
      "id": 228,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess VIS-8"
    },
    {
      "id": 229,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 230,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess SCO-2"
    },
    {
      "id": 231,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 232,
      "role": "Security Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 233,
      "role": "7-7 SERT SCO | RO",
      "icp": "Y",
      "shiftLabel": "SERT 233-1"
    },
    {
      "id": 234,
      "role": "7-7 SERT CO1 | RO",
      "icp": "Y",
      "shiftLabel": "S2 238-8"
    },
    {
      "id": 235,
      "role": "7-7 SERT CO2 | RO",
      "icp": "Y",
      "shiftLabel": "S1 237-6"
    },
    {
      "id": 236,
      "role": "8-6 SERT CO3",
      "icp": "Y",
      "shiftLabel": "S3 235-2"
    },
    {
      "id": 237,
      "role": "8-6 SERT CO4",
      "icp": "Y",
      "shiftLabel": "S4- 234-4"
    },
    {
      "id": 238,
      "role": "8-6 SERT Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess SERT-10"
    },
    {
      "id": 239,
      "role": "8-6 SERT Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 240,
      "role": "7-7 SERT Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 241,
      "role": "7-7 SERT Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 242,
      "role": "8-4 DRUG TESTER 1",
      "icp": "",
      "shiftLabel": "DC1 239-13"
    },
    {
      "id": 243,
      "role": "8-4 DRUG TESTER 2",
      "icp": "",
      "shiftLabel": "DC2 240-14"
    },
    {
      "id": 244,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 245,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 246,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 247,
      "role": "Dog Handler",
      "icp": "",
      "shiftLabel": "BOTHA W",
      "permanent": true
    },
    {
      "id": 248,
      "role": "8-4 VEHICLE SALLYPORT",
      "icp": "",
      "shiftLabel": "SP 248-12"
    },
    {
      "id": 249,
      "role": "PCO Unit 32",
      "icp": "",
      "shiftLabel": "Dalton, Justine"
    },
    {
      "id": 250,
      "role": "7-7 Unit 32 SCO",
      "icp": "Y",
      "shiftLabel": "B32 250-1"
    },
    {
      "id": 251,
      "role": "6-6 Unit 32 CO1",
      "icp": "Y",
      "shiftLabel": "TEKAHU 252-3"
    },
    {
      "id": 252,
      "role": "8-6 Unit 32 CO2",
      "icp": "Y",
      "shiftLabel": "TEKAHU 253-8"
    },
    {
      "id": 253,
      "role": "8-6 Unit 32 CO3",
      "icp": "Y",
      "shiftLabel": "TEKAHU 251-4"
    },
    {
      "id": 254,
      "role": "8-6 Unit 32 Site Staff",
      "icp": "",
      "shiftLabel": "Non Ess TEKAHU-6"
    },
    {
      "id": 255,
      "role": "8-6 Unit 32 Site Staff",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 256,
      "role": "Unit 32 PRE NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW TE KAHU 194-17"
    },
    {
      "id": 257,
      "role": "EMPTY Unit 32",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 258,
      "role": "Honeywell",
      "icp": "",
      "shiftLabel": "DREW M",
      "permanent": true
    },
    {
      "id": 259,
      "role": "Honeywell",
      "icp": "",
      "shiftLabel": "MARE P",
      "permanent": true
    },
    {
      "id": 260,
      "role": "Honeywell",
      "icp": "",
      "shiftLabel": "ADAM R",
      "permanent": true
    },
    {
      "id": 261,
      "role": "PCO  Unit 35",
      "icp": "",
      "shiftLabel": "Jopson, Gareth"
    },
    {
      "id": 262,
      "role": "7-7 Unit 35 SCO",
      "icp": "",
      "shiftLabel": "B35 263-1"
    },
    {
      "id": 263,
      "role": "6-6 Unit 35 CO1",
      "icp": "Y",
      "shiftLabel": "TOKO 264-2"
    },
    {
      "id": 264,
      "role": "8-6 Unit 35 CO2",
      "icp": "Y",
      "shiftLabel": "TOKO 265-6"
    },
    {
      "id": 265,
      "role": "8-6 Unit 35 CO3",
      "icp": "Y",
      "shiftLabel": "TOKO 267-8"
    },
    {
      "id": 266,
      "role": "8-6 Unit 35 CO4",
      "icp": "Y",
      "shiftLabel": "TOKO 268-16"
    },
    {
      "id": 267,
      "role": "8-6 Unit 35 CO5",
      "icp": "Y",
      "shiftLabel": "TOKO 266-14"
    },
    {
      "id": 268,
      "role": "8-6 Unit 35 CO6",
      "icp": "Y",
      "shiftLabel": "TOKO 269-12"
    },
    {
      "id": 269,
      "role": "7-7 Unit 35 Site Staff",
      "icp": "Y",
      "shiftLabel": ""
    },
    {
      "id": 270,
      "role": "7-7 Unit 35 Site Staff",
      "icp": "Y",
      "shiftLabel": ""
    },
    {
      "id": 271,
      "role": "8-6 Unit 35 Site Staff",
      "icp": "Y",
      "shiftLabel": "Non Ess TOKO-11"
    },
    {
      "id": 272,
      "role": "8-6 Unit 35 Site Staff",
      "icp": "Y",
      "shiftLabel": ""
    },
    {
      "id": 273,
      "role": "Unit 35 PRE NIGHTWATCH",
      "icp": "Y",
      "shiftLabel": "NW TOKO 200-4"
    },
    {
      "id": 274,
      "role": "EMPTY Unit 35",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 275,
      "role": "EMPTY Unit 35",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 276,
      "role": "EMPTY Unit 35",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 277,
      "role": "EMPTY Unit 35",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 278,
      "role": "EMPTY Unit 35",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 279,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 280,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 281,
      "role": "LAUNDRY INSTRUCTOR",
      "icp": "",
      "shiftLabel": "MIKAERE K",
      "permanent": true
    },
    {
      "id": 282,
      "role": "LAUNDRY INSTRUCTOR",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 283,
      "role": "GROUNDS INSTRUCTOR",
      "icp": "",
      "shiftLabel": "GLOVER K",
      "permanent": true
    },
    {
      "id": 284,
      "role": "GROUNDS INSTRUCTOR",
      "icp": "",
      "shiftLabel": "MALLOY M",
      "permanent": true
    },
    {
      "id": 285,
      "role": "GROUNDS INSTRUCTOR",
      "icp": "",
      "shiftLabel": "GRAHAM L",
      "permanent": true
    },
    {
      "id": 286,
      "role": "TIMBER INSTRUCTOR",
      "icp": "",
      "shiftLabel": "BOOTH M",
      "permanent": true
    },
    {
      "id": 287,
      "role": "TIMBER INSTRUCTOR",
      "icp": "",
      "shiftLabel": "O'KANE M",
      "permanent": true
    },
    {
      "id": 288,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 289,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 290,
      "role": "HEALTH CENTER MANAGER",
      "icp": "",
      "shiftLabel": "LAWSON A",
      "permanent": true
    },
    {
      "id": 291,
      "role": "HEALTH TEAM LEADER",
      "icp": "",
      "shiftLabel": "SMART T",
      "permanent": true
    },
    {
      "id": 292,
      "role": "HEALTH ADMIN 1",
      "icp": "",
      "shiftLabel": "HAYES K",
      "permanent": true
    },
    {
      "id": 293,
      "role": "HEALTH ADMIN 2",
      "icp": "",
      "shiftLabel": "FERGUSON S",
      "permanent": true
    },
    {
      "id": 294,
      "role": "MENTAL HEALTH 1",
      "icp": "",
      "shiftLabel": "MILLS D",
      "permanent": true
    },
    {
      "id": 295,
      "role": "MENTAL HEALTH 2",
      "icp": "",
      "shiftLabel": "",
      "permanent": true
    },
    {
      "id": 296,
      "role": "MENTAL HEALTH 3",
      "icp": "",
      "shiftLabel": "",
      "permanent": true
    },
    {
      "id": 297,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "VELLA S",
      "permanent": true
    },
    {
      "id": 298,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "MICHIE B",
      "permanent": true
    },
    {
      "id": 299,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "CHRISTIE M",
      "permanent": true
    },
    {
      "id": 300,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "HANSON R",
      "permanent": true
    },
    {
      "id": 301,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "SAMSON R",
      "permanent": true
    },
    {
      "id": 302,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "LITTLE M",
      "permanent": true
    },
    {
      "id": 303,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "GORMAN S",
      "permanent": true
    },
    {
      "id": 304,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "PATRICK D",
      "permanent": true
    },
    {
      "id": 305,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "SANDERS J",
      "permanent": true
    },
    {
      "id": 306,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "YARNALL T",
      "permanent": true
    },
    {
      "id": 307,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "COCKROFT W",
      "permanent": true
    },
    {
      "id": 308,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "JOHN P",
      "permanent": true
    },
    {
      "id": 309,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "WANG C",
      "permanent": true
    },
    {
      "id": 310,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "",
      "permanent": true
    },
    {
      "id": 311,
      "role": "HEALTH NURSE",
      "icp": "",
      "shiftLabel": "MATUBIZ J",
      "permanent": true
    },
    {
      "id": 312,
      "role": "Assistant Pirson Director",
      "icp": "",
      "shiftLabel": "CLARKSON R",
      "permanent": true
    },
    {
      "id": 313,
      "role": "PRIN/CASE MANAGER",
      "icp": "",
      "shiftLabel": "MACDONALD J",
      "permanent": true
    },
    {
      "id": 314,
      "role": "PRIN/CASE MANAGER",
      "icp": "",
      "shiftLabel": "DAVIES G",
      "permanent": true
    },
    {
      "id": 315,
      "role": "PRINCIPAL ADV REHAB",
      "icp": "",
      "shiftLabel": "LUCKE S",
      "permanent": true
    },
    {
      "id": 316,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "ALLISON R",
      "permanent": true
    },
    {
      "id": 317,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "COERTZE R",
      "permanent": true
    },
    {
      "id": 318,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "FAN.J",
      "permanent": true
    },
    {
      "id": 319,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "DAVIES G",
      "permanent": true
    },
    {
      "id": 320,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "JORDAN C",
      "permanent": true
    },
    {
      "id": 321,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "KEYZER K",
      "permanent": true
    },
    {
      "id": 322,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "MARTIN A",
      "permanent": true
    },
    {
      "id": 323,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "METCALFE J",
      "permanent": true
    },
    {
      "id": 324,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "NIXON A",
      "permanent": true
    },
    {
      "id": 325,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "RICE J",
      "permanent": true
    },
    {
      "id": 326,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "SCHWEMMSCHUH",
      "permanent": true
    },
    {
      "id": 327,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "SIMPSON C",
      "permanent": true
    },
    {
      "id": 328,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "TAURARII",
      "permanent": true
    },
    {
      "id": 329,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "HOLLEY D",
      "permanent": true
    },
    {
      "id": 330,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "BUNT L",
      "permanent": true
    },
    {
      "id": 331,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "Cookson.S",
      "permanent": true
    },
    {
      "id": 332,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "MURPHY A",
      "permanent": true
    },
    {
      "id": 333,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "DOYLE-FRANKLIN O",
      "permanent": true
    },
    {
      "id": 334,
      "role": "CASE MANAGER",
      "icp": "",
      "shiftLabel": "CHADWICK A",
      "permanent": true
    },
    {
      "id": 335,
      "role": "Intervention Coordinator",
      "icp": "",
      "shiftLabel": "BIGNELL S",
      "permanent": true
    },
    {
      "id": 336,
      "role": "Parole Ready - Southern",
      "icp": "",
      "shiftLabel": "K McIVOR",
      "permanent": true
    },
    {
      "id": 337,
      "role": "SCHEDULER",
      "icp": "",
      "shiftLabel": "MOSES D",
      "permanent": true
    },
    {
      "id": 338,
      "role": "RTW Coordinator",
      "icp": "",
      "shiftLabel": "FINNEY G",
      "permanent": true
    },
    {
      "id": 339,
      "role": "DTU Counselor",
      "icp": "",
      "shiftLabel": "KAPOHE.T",
      "permanent": true
    },
    {
      "id": 340,
      "role": "DTU Counselor",
      "icp": "",
      "shiftLabel": "SOUTH B",
      "permanent": true
    },
    {
      "id": 341,
      "role": "DTU Counselor",
      "icp": "",
      "shiftLabel": "LEENHOWERS J",
      "permanent": true
    },
    {
      "id": 342,
      "role": "Emergency Airtec",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 343,
      "role": "Emergency Cell",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 344,
      "role": "Emergency Cell",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 345,
      "role": "Escort Keys - District Court SCO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 346,
      "role": "Escort Keys - District Court CO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 347,
      "role": "Escort Keys - District Court CO",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 348,
      "role": "Escort Keys - Transfer SCO",
      "icp": "",
      "shiftLabel": "HCRT 206"
    },
    {
      "id": 349,
      "role": "Escort Keys - Transfer CO",
      "icp": "",
      "shiftLabel": "HCRT 207"
    },
    {
      "id": 350,
      "role": "ESCORT 06",
      "icp": "",
      "shiftLabel": "TV 111-4"
    },
    {
      "id": 351,
      "role": "ESCORT 07",
      "icp": "",
      "shiftLabel": "TV 112-3"
    },
    {
      "id": 352,
      "role": "ESCORT 08",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 353,
      "role": "ESCORT 09",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 354,
      "role": "ESCORT 10",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 355,
      "role": "ESCORT 11",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 356,
      "role": "ESCORT 12",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 357,
      "role": "ESCORT 13",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 358,
      "role": "ESCORT 14",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 359,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 360,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 361,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 362,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 363,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 364,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 365,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 366,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 367,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 368,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 369,
      "role": "DOWNER",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 370,
      "role": "Contractor 01",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 371,
      "role": "Contractor 02",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 372,
      "role": "Contractor 03",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 373,
      "role": "Contractor 04",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 374,
      "role": "Contractor 05",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 375,
      "role": "Contractor 06",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 376,
      "role": "PI Dairy Farm",
      "icp": "",
      "shiftLabel": "RUSSELL T",
      "permanent": true
    },
    {
      "id": 377,
      "role": "Dairy Instructor",
      "icp": "",
      "shiftLabel": "ADAM R",
      "permanent": true
    },
    {
      "id": 378,
      "role": "Dairy Instructor",
      "icp": "",
      "shiftLabel": "DARBY R",
      "permanent": true
    },
    {
      "id": 379,
      "role": "Dairy Instructor",
      "icp": "",
      "shiftLabel": "MILLAR W",
      "permanent": true
    },
    {
      "id": 380,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 381,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 382,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 383,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 384,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 385,
      "role": "EMPTY",
      "icp": "",
      "shiftLabel": ""
    },
    {
      "id": 995,
      "role": "6-6 Master Control",
      "icp": "",
      "shiftLabel": "MC-7"
    },
    {
      "id": 996,
      "role": "6-6 Movement Control",
      "icp": "",
      "shiftLabel": "MC1-7"
    },
    {
      "id": 997,
      "role": "6-6 Movement Assist",
      "icp": "",
      "shiftLabel": "MC2-6"
    },
    {
      "id": 998,
      "role": "6-6 Control SCO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW CTRL-6"
    },
    {
      "id": 999,
      "role": "6-6 Control CO - NIGHTWATCH",
      "icp": "",
      "shiftLabel": "NW MC-11"
    }
  ]

var lastUpate

function refreshDispo() {
  var table = document.getElementById("weekTable");
  for (var i = 0, row; row = table.rows[i]; i++) {

    for (var j = 0, col; col = row.cells[j]; j++) {
      
      var dayOfWeek;

      switch (j) {
        case 3:
          //Monday
          dayOfWeek = 'monday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 4:
          //Tuesday
          dayOfWeek = 'tuesday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 5:
          //Wednesday
          dayOfWeek = 'wednesday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 6:
          //Thursday
          dayOfWeek = 'thursday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 7:
          //Friday
          dayOfWeek = 'friday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 8:
          //Saturday
          dayOfWeek = 'saturday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        case 9:
          //Sunday
          dayOfWeek = 'sunday';
          row.cells[j].innerHTML = kronosFind(dayOfWeek, row.cells[j].innerHTML)
          break;
        default:
          dayOfWeek = '';
          break;
      }
    }
  }
};

$(document).ready( () => {
    // Loop through each object in the dispo template
    for (i = 0; i <= dispoTemplate.length -1; i++) {
        
        // Get each object in numberical order and append to the table
        myObj = dispoTemplate[i];

        newRow = `
                <tr id="${myObj.id}">
                    <td class="dispoID">${myObj.id}</td>
                    <td class="role">${myObj.role}</td>
                    <td class="icp">${myObj.icp}</td>
                    <td class="monday">${myObj.shiftLabel}</td>
                    <td class="tuesday">${myObj.shiftLabel}</td>
                    <td class="wednesday">${myObj.shiftLabel}</td>
                    <td class="thursday">${myObj.shiftLabel}</td>
                    <td class="friday">${myObj.shiftLabel}</td>
                    <td class="saturday">${myObj.shiftLabel}</td>
                    <td class="sunday">${myObj.shiftLabel}</td>
                </tr>
        `

        $('#weekTable tbody').append(newRow);
    }
});

